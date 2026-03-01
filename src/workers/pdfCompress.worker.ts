/// <reference lib="webworker" />

// PDF compression worker.
// Strategy: render each page to an OffscreenCanvas via pdfjs, export JPEG at chosen quality,
// then rebuild a new PDF from those images using pdf-lib.

type CompressLevel = 'low' | 'medium' | 'high' | 'extreme' | string;

type CompressRequest = {
  type: 'compressPdf';
  buffer: ArrayBuffer;
  compressionLevel: CompressLevel;
  fastMode: boolean;
};

type ProgressMessage = { type: 'progress'; value: number };
type DoneMessage = { type: 'done'; pdfBytes: ArrayBuffer };
type ErrorMessage = { type: 'error'; message: string };

// `self` in a worker is a DedicatedWorkerGlobalScope.
const ctx: DedicatedWorkerGlobalScope = self as unknown as DedicatedWorkerGlobalScope;

const postProgress = (value: number) => {
  const msg: ProgressMessage = { type: 'progress', value };
  ctx.postMessage(msg);
};

const postError = (message: string) => {
  const msg: ErrorMessage = { type: 'error', message };
  ctx.postMessage(msg);
};

const qualityMap: Record<string, { scale: number; quality: number }> = {
  low: { scale: 1.5, quality: 0.85 },
  medium: { scale: 1.2, quality: 0.7 },
  high: { scale: 1.0, quality: 0.5 },
  extreme: { scale: 0.8, quality: 0.3 },
};

async function compressPdfInWorker(
  buffer: ArrayBuffer,
  compressionLevel: CompressLevel,
  fastMode: boolean
): Promise<ArrayBuffer> {
  if (typeof OffscreenCanvas === 'undefined') {
    throw new Error('OffscreenCanvas is not supported in this browser.');
  }

  // Dynamic imports keep initial bundle smaller.
  const pdfjsLib = await import('pdfjs-dist');
  const { PDFDocument } = await import('pdf-lib');

  // Avoid nested workers inside a worker.
  const loadingTask = pdfjsLib.getDocument({ data: buffer, disableWorker: true });
  const pdf = await loadingTask.promise;

  let settings = qualityMap[compressionLevel] || qualityMap.medium;

  // Adaptive scaling by page count.
  const pageCount = pdf.numPages;
  if (pageCount >= 80) settings = { ...settings, scale: Math.min(settings.scale, 0.7) };
  else if (pageCount >= 40) settings = { ...settings, scale: Math.min(settings.scale, 0.85) };
  else if (pageCount >= 20) settings = { ...settings, scale: Math.min(settings.scale, 1.0) };
  if (fastMode) settings = { ...settings, scale: Math.min(settings.scale, 0.85) };

  // Stage 1: Render pages.
  postProgress(10);
  const pageJpegBuffers: ArrayBuffer[] = [];
  for (let i = 1; i <= pageCount; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: settings.scale });

    const canvas = new OffscreenCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Failed to get 2D context from OffscreenCanvas.');

    // pdfjs types are geared towards CanvasRenderingContext2D; OffscreenCanvas uses
    // OffscreenCanvasRenderingContext2D which is compatible at runtime.
    await page.render({ canvasContext: context as unknown as CanvasRenderingContext2D, viewport }).promise;

    const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: settings.quality });
    pageJpegBuffers.push(await blob.arrayBuffer());

    // 10% .. 60% progress while rendering
    postProgress(10 + (i / pageCount) * 50);
  }

  // Stage 2: Build new PDF.
  postProgress(65);
  const newPdf = await PDFDocument.create();
  for (let i = 0; i < pageJpegBuffers.length; i++) {
    const img = await newPdf.embedJpg(pageJpegBuffers[i]);
    const page = newPdf.addPage([img.width, img.height]);
    page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });

    // 65% .. 95% while embedding
    postProgress(65 + ((i + 1) / pageJpegBuffers.length) * 30);
  }

  // Remove metadata.
  newPdf.setTitle('');
  newPdf.setAuthor('');
  newPdf.setSubject('');
  newPdf.setKeywords([]);
  newPdf.setCreator('');
  newPdf.setProducer('');

  postProgress(98);
  const pdfBytes = await newPdf.save({ useObjectStreams: true });

  // Return a transferable ArrayBuffer with exact length.
  return pdfBytes.buffer.slice(pdfBytes.byteOffset, pdfBytes.byteOffset + pdfBytes.byteLength);
}

ctx.onmessage = async (event: MessageEvent<CompressRequest>) => {
  const data = event.data;
  if (!data || data.type !== 'compressPdf') return;

  try {
    const out = await compressPdfInWorker(data.buffer, data.compressionLevel, data.fastMode);
    const msg: DoneMessage = { type: 'done', pdfBytes: out };
    ctx.postMessage(msg, [out]);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown worker error';
    postError(message);
  }
};

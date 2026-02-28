'use client';

type WorkerProgress = { type: 'progress'; value: number };
type WorkerDone = { type: 'done'; pdfBytes: ArrayBuffer };
type WorkerError = { type: 'error'; message: string };

type WorkerMessage = WorkerProgress | WorkerDone | WorkerError;

export async function compressPdfWithWorker(
  buffer: ArrayBuffer,
  compressionLevel: string,
  fastMode: boolean,
  onProgress: (p: number) => void
): Promise<Uint8Array> {
  // If workers aren't available, let the caller fall back.
  if (typeof Worker === 'undefined') {
    throw new Error('Web Workers are not supported in this environment.');
  }

  const worker = new Worker(new URL('../workers/pdfCompress.worker.ts', import.meta.url), {
    type: 'module',
  });

  return await new Promise<Uint8Array>((resolve, reject) => {
    const cleanup = () => {
      worker.terminate();
    };

    worker.onmessage = (ev: MessageEvent<WorkerMessage>) => {
      const msg = ev.data;
      if (!msg) return;
      if (msg.type === 'progress') {
        onProgress(Math.max(0, Math.min(100, msg.value)));
        return;
      }
      if (msg.type === 'done') {
        cleanup();
        resolve(new Uint8Array(msg.pdfBytes));
        return;
      }
      if (msg.type === 'error') {
        cleanup();
        reject(new Error(msg.message));
      }
    };

    worker.onerror = (err) => {
      cleanup();
      reject(err);
    };

    // Transfer the input buffer to avoid copying big PDFs.
    worker.postMessage(
      {
        type: 'compressPdf',
        buffer,
        compressionLevel,
        fastMode,
      },
      [buffer]
    );
  });
}

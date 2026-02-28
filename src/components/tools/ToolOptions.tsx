'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Zap,
  RotateCw,
  Scissors,
  Type,
  Lock,
  Palette,
  Maximize2,
  FlipHorizontal,
  Pen,
  Crop,
  Wand2,
  Film,
  ImageIcon,
  Layout,
  Info,
  CheckCircle,
  XCircle,
  Lightbulb,
  FileImage,
  Settings
} from 'lucide-react';
import type { Tool } from '@/types';

export interface ToolOptionsState {
  compressionLevel?: 'low' | 'medium' | 'high' | 'extreme';
  fastMode?: boolean;
  rotationAngle?: 0 | 90 | 180 | 270;
  splitMode?: 'all' | 'ranges';
  pageRanges?: string;
  watermarkText?: string;
  watermarkOpacity?: number;
  password?: string;
  resizePercentage?: number;
  outputQuality?: number;
  flipDirection?: 'horizontal' | 'vertical';
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:2' | '2:3' | '9:16';
  brightness?: number;
  contrast?: number;
  saturation?: number;
  frameDelay?: number;
  topText?: string;
  bottomText?: string;
  targetWidth?: number;
  targetHeight?: number;
  dpi?: number;
  outputFormat?: 'jpg' | 'png' | 'webp';
  maintainAspectRatio?: boolean;
}

interface Props {
  tool: Tool;
  options: ToolOptionsState;
  onChange: (o: ToolOptionsState) => void;
  locale: string;
}

// Warning/Info box component
function InfoBox({ type, children }: { type: 'warning' | 'info' | 'success' | 'tip'; children: React.ReactNode }) {
  const styles = {
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
    tip: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
  };
  const icons = {
    warning: <AlertTriangle className="w-4 h-4 flex-shrink-0" />,
    info: <Info className="w-4 h-4 flex-shrink-0" />,
    success: <CheckCircle className="w-4 h-4 flex-shrink-0" />,
    tip: <Lightbulb className="w-4 h-4 flex-shrink-0" />,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-2 p-3 rounded-xl border ${styles[type]}`}
    >
      {icons[type]}
      <span className="text-sm">{children}</span>
    </motion.div>
  );
}

export function ToolOptions({ tool, options, onChange, locale }: Props) {
  const isRtl = locale === 'ar';
  const t = (en: string, ar: string) => isRtl ? ar : en;
  const update = <K extends keyof ToolOptionsState>(k: K, v: ToolOptionsState[K]) => onChange({ ...options, [k]: v });

  // ═══════════════════════════════════════════════════════════
  // PDF COMPRESSION
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'compress') {
    const levels = [
      { id: 'low', icon: '🟢', en: 'Low', ar: 'منخفض', reduction: '10-20%', quality: t('Best quality', 'أفضل جودة') },
      { id: 'medium', icon: '🟡', en: 'Medium', ar: 'متوسط', reduction: '30-50%', quality: t('Good quality', 'جودة جيدة') },
      { id: 'high', icon: '🟠', en: 'High', ar: 'عالي', reduction: '50-70%', quality: t('Acceptable', 'مقبولة') },
      { id: 'extreme', icon: '🔴', en: 'Maximum', ar: 'أقصى', reduction: '70-90%', quality: t('Lower quality', 'جودة أقل') },
    ];
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Zap className="w-5 h-5" /><h3 className="font-medium">{t('Compression Level', 'مستوى الضغط')}</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {levels.map(l => (
            <button key={l.id} onClick={() => update('compressionLevel', l.id as ToolOptionsState['compressionLevel'])}
              className={`p-4 rounded-xl border-2 text-left transition-all ${options.compressionLevel === l.id ? 'border-violet-500 bg-violet-500/10 scale-[1.02]' : 'border-gray-700 hover:border-violet-500/50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{l.icon}</span>
                <span className={`font-medium ${options.compressionLevel === l.id ? 'text-violet-400' : 'text-white'}`}>{isRtl ? l.ar : l.en}</span>
              </div>
              <p className="text-xs text-gray-400">{t('Reduction:', 'التقليل:')} {l.reduction}</p>
              <p className="text-xs text-gray-500">{l.quality}</p>
            </button>
          ))}
        </div>

        {options.compressionLevel === 'low' && (
          <InfoBox type="success">
            {t('Minimal compression - your PDF will look identical to the original with slight size reduction.', 'ضغط بسيط - ملف PDF سيبدو مطابقاً للأصل مع تقليل طفيف في الحجم.')}
          </InfoBox>
        )}
        {options.compressionLevel === 'medium' && (
          <InfoBox type="info">
            {t('Balanced compression - good for sharing via email while maintaining readable quality.', 'ضغط متوازن - مناسب للمشاركة عبر البريد الإلكتروني مع الحفاظ على جودة قراءة جيدة.')}
          </InfoBox>
        )}
        {options.compressionLevel === 'high' && (
          <InfoBox type="warning">
            {t('High compression - images may appear slightly blurry. Good for archiving.', 'ضغط عالي - قد تظهر الصور ضبابية قليلاً. مناسب للأرشفة.')}
          </InfoBox>
        )}
        {options.compressionLevel === 'extreme' && (
          <InfoBox type="warning">
            {t('Maximum compression - significant quality loss. Images will be very compressed. Use only when file size is critical.', 'أقصى ضغط - فقدان كبير في الجودة. ستكون الصور مضغوطة جداً. استخدم فقط عندما يكون حجم الملف حرجاً.')}
          </InfoBox>
        )}

        <InfoBox type="tip">
          {t('Tip: For documents with mostly text, even high compression will look great!', 'نصيحة: للمستندات النصية، حتى الضغط العالي سيبدو رائعاً!')}
        </InfoBox>

        <div className="p-4 rounded-xl bg-gray-800/40 border border-gray-700">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-gray-300">
              <Settings className="w-4 h-4 text-violet-400" />
              <div>
                <p className="text-sm font-medium">{t('Fast mode', 'وضع سريع')}</p>
                <p className="text-xs text-gray-500">
                  {t('Faster processing (lower rendering scale). Best for large PDFs.', 'معالجة أسرع (دقة أقل أثناء التحويل). الأفضل لملفات PDF الكبيرة.')}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => update('fastMode', !options.fastMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${options.fastMode ? 'bg-violet-500' : 'bg-gray-700'}`}
              aria-pressed={!!options.fastMode}
              aria-label={t('Toggle fast mode', 'تبديل الوضع السريع')}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${options.fastMode ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // IMAGE COMPRESSION
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'compress-image') {
    const levels = [
      { id: 'low', icon: '🟢', en: 'Light', ar: 'خفيف', reduction: '10-20%', quality: '90%', desc: t('Almost no visible difference', 'تقريباً لا فرق مرئي') },
      { id: 'medium', icon: '🟡', en: 'Medium', ar: 'متوسط', reduction: '30-50%', quality: '70%', desc: t('Good for web & email', 'جيد للويب والبريد') },
      { id: 'high', icon: '🟠', en: 'Strong', ar: 'قوي', reduction: '50-70%', quality: '50%', desc: t('Visible compression artifacts', 'آثار ضغط مرئية') },
      { id: 'extreme', icon: '🔴', en: 'Maximum', ar: 'أقصى', reduction: '70-90%', quality: '30%', desc: t('Very small file, low quality', 'ملف صغير جداً، جودة منخفضة') },
    ];
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Zap className="w-5 h-5" /><h3 className="font-medium">{t('Compression Level', 'مستوى الضغط')}</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {levels.map(l => (
            <button key={l.id} onClick={() => update('compressionLevel', l.id as ToolOptionsState['compressionLevel'])}
              className={`p-4 rounded-xl border-2 text-left transition-all ${options.compressionLevel === l.id ? 'border-violet-500 bg-violet-500/10 scale-[1.02]' : 'border-gray-700 hover:border-violet-500/50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{l.icon}</span>
                <span className={`font-medium ${options.compressionLevel === l.id ? 'text-violet-400' : 'text-white'}`}>{isRtl ? l.ar : l.en}</span>
              </div>
              <p className="text-xs text-gray-400">{t('Quality:', 'الجودة:')} {l.quality}</p>
              <p className="text-xs text-gray-500">{l.desc}</p>
            </button>
          ))}
        </div>

        {options.compressionLevel === 'extreme' && (
          <InfoBox type="warning">
            {t('Warning: Extreme compression will cause visible quality loss. Colors may appear blocky and details will be lost. Best for thumbnails only.', 'تحذير: الضغط الأقصى سيسبب فقدان جودة مرئي. قد تظهر الألوان مكعبة وستفقد التفاصيل. الأفضل للصور المصغرة فقط.')}
          </InfoBox>
        )}
        {options.compressionLevel === 'high' && (
          <InfoBox type="warning">
            {t('Note: Some compression artifacts may be visible, especially in areas with gradients or fine details.', 'ملاحظة: قد تكون بعض آثار الضغط مرئية، خاصة في المناطق ذات التدرجات أو التفاصيل الدقيقة.')}
          </InfoBox>
        )}
        {(options.compressionLevel === 'low' || options.compressionLevel === 'medium') && (
          <InfoBox type="success">
            {t('Good choice! Your image will maintain excellent quality.', 'اختيار جيد! ستحافظ صورتك على جودة ممتازة.')}
          </InfoBox>
        )}

        <InfoBox type="tip">
          {t('Tip: JPEG works best for photos, PNG for graphics with transparency.', 'نصيحة: JPEG الأفضل للصور، PNG للرسومات ذات الشفافية.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // ROTATION (PDF & Image)
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'rotate' || tool.id === 'rotate-image') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <RotateCw className="w-5 h-5" /><h3 className="font-medium">{t('Rotation Angle', 'زاوية التدوير')}</h3>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { angle: 90, label: '90°', desc: t('Right', 'يمين') },
            { angle: 180, label: '180°', desc: t('Flip', 'قلب') },
            { angle: 270, label: '270°', desc: t('Left', 'يسار') },
            { angle: 0, label: '0°', desc: t('None', 'بدون') },
          ].map(({ angle, label, desc }) => (
            <button key={angle} onClick={() => update('rotationAngle', angle as ToolOptionsState['rotationAngle'])}
              className={`p-4 rounded-xl border-2 transition-all ${options.rotationAngle === angle ? 'border-violet-500 bg-violet-500/10' : 'border-gray-700 hover:border-violet-500/50'}`}>
              <RotateCw className={`w-8 h-8 mx-auto mb-2 ${options.rotationAngle === angle ? 'text-violet-400' : 'text-gray-500'}`} style={{ transform: `rotate(${angle}deg)` }} />
              <p className={`text-center font-medium ${options.rotationAngle === angle ? 'text-violet-400' : 'text-white'}`}>{label}</p>
              <p className="text-center text-xs text-gray-500">{desc}</p>
            </button>
          ))}
        </div>

        <InfoBox type="info">
          {t('All pages/images will be rotated by the selected angle.', 'سيتم تدوير جميع الصفحات/الصور بالزاوية المحددة.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // SPLIT / EXTRACT / REMOVE / ORGANIZE PAGES
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'split' || tool.id === 'extract-pages' || tool.id === 'remove-pages' || tool.id === 'organize') {
    const toolLabels = {
      split: { title: t('Split Options', 'خيارات التقسيم'), allDesc: t('Each page becomes a separate PDF', 'كل صفحة تصبح ملف PDF منفصل') },
      'extract-pages': { title: t('Pages to Extract', 'الصفحات للاستخراج'), allDesc: t('Extract all pages', 'استخراج كل الصفحات') },
      'remove-pages': { title: t('Pages to Remove', 'الصفحات للحذف'), allDesc: t('Remove all pages (not recommended)', 'حذف كل الصفحات (غير مستحسن)') },
      organize: { title: t('Page Order', 'ترتيب الصفحات'), allDesc: t('Keep original order', 'الحفاظ على الترتيب الأصلي') },
    };
    const labels = toolLabels[tool.id as keyof typeof toolLabels];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Scissors className="w-5 h-5" /><h3 className="font-medium">{labels.title}</h3>
        </div>

        <div className="flex gap-3 mb-4">
          <button onClick={() => update('splitMode', 'all')}
            className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${options.splitMode === 'all' ? 'border-violet-500 bg-violet-500/10 text-violet-400' : 'border-gray-700 text-gray-400 hover:border-violet-500/50'}`}>
            {t('All Pages', 'كل الصفحات')}
          </button>
          <button onClick={() => update('splitMode', 'ranges')}
            className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${options.splitMode === 'ranges' ? 'border-violet-500 bg-violet-500/10 text-violet-400' : 'border-gray-700 text-gray-400 hover:border-violet-500/50'}`}>
            {t('Custom Range', 'نطاق مخصص')}
          </button>
        </div>

        {options.splitMode === 'all' && (
          <InfoBox type="info">{labels.allDesc}</InfoBox>
        )}

        {options.splitMode === 'ranges' && (
          <div className="space-y-3">
            <input
              type="text"
              value={options.pageRanges || ''}
              onChange={e => update('pageRanges', e.target.value)}
              placeholder={tool.id === 'organize' ? "3, 1, 2, 5, 4" : "1-3, 5, 8-10"}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none transition-colors"
            />

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-gray-800/50">
                <span className="text-gray-400">{t('Example:', 'مثال:')}</span>
                <span className="text-violet-400 ml-2">1-3, 5, 8</span>
              </div>
              <div className="p-2 rounded-lg bg-gray-800/50">
                <span className="text-gray-400">{t('Range:', 'نطاق:')}</span>
                <span className="text-violet-400 ml-2">1-5</span>
              </div>
            </div>

            {tool.id === 'organize' && (
              <InfoBox type="tip">
                {t('Enter page numbers in the new order you want. Example: "3, 1, 2" will put page 3 first.', 'أدخل أرقام الصفحات بالترتيب الجديد المطلوب. مثال: "3, 1, 2" سيضع الصفحة 3 أولاً.')}
              </InfoBox>
            )}
            {tool.id === 'remove-pages' && (
              <InfoBox type="warning">
                {t('Warning: Removed pages cannot be recovered. Make sure to keep a backup of your original file.', 'تحذير: لا يمكن استعادة الصفحات المحذوفة. تأكد من الاحتفاظ بنسخة احتياطية من ملفك الأصلي.')}
              </InfoBox>
            )}
          </div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // WATERMARK (PDF & Image)
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'watermark' || tool.id === 'watermark-image') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Type className="w-5 h-5" /><h3 className="font-medium">{t('Watermark Settings', 'إعدادات العلامة المائية')}</h3>
        </div>

        <div className="space-y-3">
          <label className="block text-sm text-gray-400">{t('Watermark Text', 'نص العلامة المائية')}</label>
          <input
            type="text"
            value={options.watermarkText || ''}
            onChange={e => update('watermarkText', e.target.value)}
            placeholder={t('CONFIDENTIAL, DRAFT, etc.', 'سري، مسودة، إلخ.')}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400 flex justify-between">
            <span>{t('Opacity', 'الشفافية')}</span>
            <span className="text-violet-400">{options.watermarkOpacity || 50}%</span>
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={options.watermarkOpacity || 50}
            onChange={e => update('watermarkOpacity', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500 [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{t('Subtle', 'خفيف')}</span>
            <span>{t('Visible', 'واضح')}</span>
          </div>
        </div>

        {(options.watermarkOpacity || 50) < 30 && (
          <InfoBox type="info">
            {t('Low opacity watermark - may be hard to see but less intrusive.', 'علامة مائية شفافة - قد يصعب رؤيتها لكنها أقل إزعاجاً.')}
          </InfoBox>
        )}
        {(options.watermarkOpacity || 50) > 70 && (
          <InfoBox type="warning">
            {t('High opacity watermark - will be very visible and may cover content.', 'علامة مائية واضحة - ستكون مرئية جداً وقد تغطي المحتوى.')}
          </InfoBox>
        )}

        <InfoBox type="tip">
          {t('Tip: Use 30-50% opacity for professional documents.', 'نصيحة: استخدم 30-50% شفافية للمستندات الاحترافية.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // SIGN PDF
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'sign') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Pen className="w-5 h-5" /><h3 className="font-medium">{t('Digital Signature', 'التوقيع الرقمي')}</h3>
        </div>

        <div className="space-y-3">
          <label className="block text-sm text-gray-400">{t('Your Signature', 'توقيعك')}</label>
          <input
            type="text"
            value={options.watermarkText || ''}
            onChange={e => update('watermarkText', e.target.value)}
            placeholder={t('Enter your name or signature...', 'أدخل اسمك أو توقيعك...')}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none text-lg font-serif italic"
          />
        </div>

        {options.watermarkText && (
          <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <p className="text-xs text-gray-400 mb-2">{t('Preview:', 'معاينة:')}</p>
            <p className="text-xl font-serif italic text-blue-400 border-b-2 border-blue-400 inline-block">
              {options.watermarkText}
            </p>
          </div>
        )}

        <InfoBox type="info">
          {t('Your signature will be added to the bottom of the first page with an underline.', 'سيتم إضافة توقيعك في أسفل الصفحة الأولى مع خط سفلي.')}
        </InfoBox>

        <InfoBox type="tip">
          {t('Tip: For legal documents, consider using a handwritten signature image instead.', 'نصيحة: للمستندات القانونية، فكر في استخدام صورة توقيع مكتوب بخط اليد.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // EDIT PDF
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'edit') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Pen className="w-5 h-5" /><h3 className="font-medium">{t('Add Text to PDF', 'إضافة نص للـ PDF')}</h3>
        </div>

        <div className="space-y-3">
          <label className="block text-sm text-gray-400">{t('Text to Add', 'النص للإضافة')}</label>
          <textarea
            value={options.watermarkText || ''}
            onChange={e => update('watermarkText', e.target.value)}
            placeholder={t('Enter text to add to your PDF...', 'أدخل النص لإضافته إلى ملف PDF...')}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none resize-none"
          />
        </div>

        {!options.watermarkText && (
          <InfoBox type="info">
            {t('Leave empty to keep the PDF as-is. Text will be centered on each page.', 'اتركه فارغاً للحفاظ على PDF كما هو. سيتم توسيط النص في كل صفحة.')}
          </InfoBox>
        )}

        <InfoBox type="tip">
          {t('Tip: For more advanced editing, use dedicated PDF editors.', 'نصيحة: للتحرير المتقدم، استخدم محررات PDF متخصصة.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // REDACT PDF
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'redact') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <XCircle className="w-5 h-5" /><h3 className="font-medium">{t('Redaction Settings', 'إعدادات الإخفاء')}</h3>
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400 flex justify-between">
            <span>{t('Redaction Width', 'عرض الإخفاء')}</span>
            <span className="text-violet-400">{(options.resizePercentage || 50) * 4}px</span>
          </label>
          <input
            type="range"
            min="20"
            max="150"
            value={options.resizePercentage || 50}
            onChange={e => update('resizePercentage', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500"
          />
        </div>

        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
          <p className="text-xs text-gray-400 mb-2">{t('Preview:', 'معاينة:')}</p>
          <div className="h-6 bg-black rounded" style={{ width: `${(options.resizePercentage || 50) * 2}px` }} />
        </div>

        <InfoBox type="warning">
          {t('A black rectangle will be permanently added to cover sensitive information on page 1.', 'سيتم إضافة مستطيل أسود بشكل دائم لتغطية المعلومات الحساسة في الصفحة 1.')}
        </InfoBox>

        <InfoBox type="info">
          {t('The redaction will be placed at the top of the first page. For precise redaction, use a dedicated PDF editor.', 'سيتم وضع الإخفاء في أعلى الصفحة الأولى. للإخفاء الدقيق، استخدم محرر PDF متخصص.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // CROP PDF
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'crop') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Crop className="w-5 h-5" /><h3 className="font-medium">{t('Crop Margins', 'قص الهوامش')}</h3>
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400 flex justify-between">
            <span>{t('Margin to Remove', 'الهامش للإزالة')}</span>
            <span className="text-violet-400">{options.resizePercentage || 20}px</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={options.resizePercentage || 20}
            onChange={e => update('resizePercentage', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{t('No crop', 'بدون قص')}</span>
            <span>{t('Large crop', 'قص كبير')}</span>
          </div>
        </div>

        {(options.resizePercentage || 20) > 50 && (
          <InfoBox type="warning">
            {t('Warning: Large crop margin may cut into your content.', 'تحذير: هامش القص الكبير قد يقطع محتواك.')}
          </InfoBox>
        )}

        <InfoBox type="info">
          {t('Equal margin will be removed from all sides of each page.', 'سيتم إزالة هامش متساوي من جميع جوانب كل صفحة.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // PROTECT PDF
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'protect') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Lock className="w-5 h-5" /><h3 className="font-medium">{t('PDF Protection', 'حماية PDF')}</h3>
        </div>

        <InfoBox type="info">
          {t('A subtle "PROTECTED" watermark will be added diagonally across all pages to indicate the document is protected.', 'سيتم إضافة علامة مائية "محمي" بشكل مائل عبر جميع الصفحات للإشارة إلى أن المستند محمي.')}
        </InfoBox>

        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
          <p className="text-xs text-gray-400 mb-2">{t('Watermark Preview:', 'معاينة العلامة:')}</p>
          <p className="text-2xl text-red-400/30 font-bold italic transform -rotate-12">PROTECTED</p>
        </div>

        <InfoBox type="warning">
          {t('Note: This adds a visual watermark only. For true password protection, use professional PDF software.', 'ملاحظة: هذا يضيف علامة مائية مرئية فقط. للحماية بكلمة مرور حقيقية، استخدم برنامج PDF احترافي.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // UNLOCK PDF
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'unlock') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Lock className="w-5 h-5" /><h3 className="font-medium">{t('Unlock PDF', 'فتح PDF')}</h3>
        </div>

        <InfoBox type="info">
          {t('We will attempt to remove restrictions from your PDF. This works with PDFs that have edit/print restrictions but no password.', 'سنحاول إزالة القيود من ملف PDF الخاص بك. يعمل هذا مع ملفات PDF التي لها قيود تعديل/طباعة لكن بدون كلمة مرور.')}
        </InfoBox>

        <InfoBox type="warning">
          {t('Note: Password-protected PDFs cannot be unlocked without the correct password.', 'ملاحظة: لا يمكن فتح ملفات PDF المحمية بكلمة مرور بدون كلمة المرور الصحيحة.')}
        </InfoBox>

        <InfoBox type="tip">
          {t('If your PDF requires a password to open, you\'ll need to enter it first.', 'إذا كان ملف PDF يتطلب كلمة مرور للفتح، ستحتاج إلى إدخالها أولاً.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // RESIZE IMAGE
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'resize-image') {
    const presets = [
      { value: 25, label: '25%', desc: t('Tiny', 'صغير جداً') },
      { value: 50, label: '50%', desc: t('Half', 'نصف') },
      { value: 75, label: '75%', desc: t('Medium', 'متوسط') },
      { value: 100, label: '100%', desc: t('Original', 'أصلي') },
      { value: 150, label: '150%', desc: t('Large', 'كبير') },
      { value: 200, label: '200%', desc: t('Double', 'مضاعف') },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Maximize2 className="w-5 h-5" /><h3 className="font-medium">{t('Resize Image', 'تغيير حجم الصورة')}</h3>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {presets.map(p => (
            <button
              key={p.value}
              onClick={() => update('resizePercentage', p.value)}
              className={`p-3 rounded-xl border-2 text-center transition-all ${options.resizePercentage === p.value ? 'border-violet-500 bg-violet-500/10' : 'border-gray-700 hover:border-violet-500/50'}`}
            >
              <p className={`font-medium ${options.resizePercentage === p.value ? 'text-violet-400' : 'text-white'}`}>{p.label}</p>
              <p className="text-xs text-gray-500">{p.desc}</p>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400 flex justify-between">
            <span>{t('Custom Size', 'حجم مخصص')}</span>
            <span className="text-violet-400">{options.resizePercentage || 100}%</span>
          </label>
          <input
            type="range"
            min="10"
            max="300"
            value={options.resizePercentage || 100}
            onChange={e => update('resizePercentage', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500"
          />
        </div>

        {(options.resizePercentage || 100) < 50 && (
          <InfoBox type="warning">
            {t('Small size - image may lose detail and appear pixelated when enlarged later.', 'حجم صغير - قد تفقد الصورة التفاصيل وتظهر منقطة عند تكبيرها لاحقاً.')}
          </InfoBox>
        )}
        {(options.resizePercentage || 100) > 150 && (
          <InfoBox type="warning">
            {t('Large size - image may appear blurry as pixels are stretched.', 'حجم كبير - قد تظهر الصورة ضبابية لأن البكسلات ممددة.')}
          </InfoBox>
        )}
        {(options.resizePercentage || 100) >= 50 && (options.resizePercentage || 100) <= 150 && (
          <InfoBox type="success">
            {t('Good size range - image quality will be maintained.', 'نطاق حجم جيد - ستُحافظ على جودة الصورة.')}
          </InfoBox>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // CROP IMAGE
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'crop-image') {
    const aspectRatios = [
      { id: '1:1', en: 'Square', ar: 'مربع', icon: '⬜', use: t('Instagram, Profile pics', 'إنستغرام، صور شخصية') },
      { id: '4:3', en: '4:3', ar: '4:3', icon: '🖼️', use: t('Standard photos', 'صور قياسية') },
      { id: '16:9', en: '16:9', ar: '16:9', icon: '📺', use: t('YouTube, Widescreen', 'يوتيوب، شاشة عريضة') },
      { id: '3:2', en: '3:2', ar: '3:2', icon: '📷', use: t('Print photos', 'صور للطباعة') },
      { id: '2:3', en: '2:3', ar: '2:3', icon: '📱', use: t('Phone wallpaper', 'خلفية هاتف') },
      { id: '9:16', en: '9:16', ar: '9:16', icon: '📲', use: t('Stories, Reels', 'ستوري، ريلز') },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Crop className="w-5 h-5" /><h3 className="font-medium">{t('Aspect Ratio', 'نسبة العرض للارتفاع')}</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {aspectRatios.map(ar => (
            <button
              key={ar.id}
              onClick={() => update('aspectRatio', ar.id as ToolOptionsState['aspectRatio'])}
              className={`p-3 rounded-xl border-2 text-left transition-all ${options.aspectRatio === ar.id ? 'border-violet-500 bg-violet-500/10' : 'border-gray-700 hover:border-violet-500/50'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{ar.icon}</span>
                <span className={`font-medium ${options.aspectRatio === ar.id ? 'text-violet-400' : 'text-white'}`}>{isRtl ? ar.ar : ar.en}</span>
              </div>
              <p className="text-xs text-gray-500">{ar.use}</p>
            </button>
          ))}
        </div>

        <InfoBox type="info">
          {t('Image will be cropped from the center to match the selected aspect ratio.', 'سيتم قص الصورة من المركز لتتناسب مع نسبة العرض للارتفاع المحددة.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // PHOTO EDITOR
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'photo-editor') {
    const filters = [
      { id: 'low', en: 'Original', ar: 'أصلي', icon: '🌅', desc: t('No filter', 'بدون فلتر') },
      { id: 'medium', en: 'Warm', ar: 'دافئ', icon: '☀️', desc: t('Golden tones', 'درجات ذهبية') },
      { id: 'high', en: 'Sepia', ar: 'سيبيا', icon: '🌄', desc: t('Vintage look', 'مظهر قديم') },
      { id: 'extreme', en: 'B&W', ar: 'أبيض وأسود', icon: '🖤', desc: t('Classic mono', 'كلاسيكي') },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Wand2 className="w-5 h-5" /><h3 className="font-medium">{t('Photo Adjustments', 'تعديلات الصورة')}</h3>
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400">{t('Filter', 'الفلتر')}</label>
          <div className="grid grid-cols-2 gap-3">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => update('compressionLevel', f.id as ToolOptionsState['compressionLevel'])}
                className={`p-4 rounded-xl border-2 transition-all ${options.compressionLevel === f.id ? 'border-violet-500 bg-violet-500/10' : 'border-gray-700 hover:border-violet-500/50'}`}
              >
                <div className="text-2xl text-center mb-1">{f.icon}</div>
                <p className={`text-center font-medium ${options.compressionLevel === f.id ? 'text-violet-400' : 'text-white'}`}>{isRtl ? f.ar : f.en}</p>
                <p className="text-center text-xs text-gray-500">{f.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400 flex justify-between">
            <span>{t('Brightness', 'السطوع')}</span>
            <span className="text-violet-400">{(options.resizePercentage || 100) - 100 > 0 ? '+' : ''}{(options.resizePercentage || 100) - 100}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={options.resizePercentage || 100}
            onChange={e => update('resizePercentage', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{t('Darker', 'أغمق')}</span>
            <span>{t('Normal', 'عادي')}</span>
            <span>{t('Brighter', 'أفتح')}</span>
          </div>
        </div>

        {options.compressionLevel === 'extreme' && (
          <InfoBox type="info">
            {t('Black & White filter removes all color information.', 'فلتر الأبيض والأسود يزيل كل معلومات الألوان.')}
          </InfoBox>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // GIF MAKER
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'gif-maker') {
    const speedPresets = [
      { value: 20, label: t('Fast', 'سريع'), ms: '200ms' },
      { value: 50, label: t('Normal', 'عادي'), ms: '500ms' },
      { value: 100, label: t('Slow', 'بطيء'), ms: '1000ms' },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Film className="w-5 h-5" /><h3 className="font-medium">{t('Animation Settings', 'إعدادات الرسوم المتحركة')}</h3>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {speedPresets.map(p => (
            <button
              key={p.value}
              onClick={() => update('resizePercentage', p.value)}
              className={`p-3 rounded-xl border-2 text-center transition-all ${options.resizePercentage === p.value ? 'border-violet-500 bg-violet-500/10' : 'border-gray-700 hover:border-violet-500/50'}`}
            >
              <p className={`font-medium ${options.resizePercentage === p.value ? 'text-violet-400' : 'text-white'}`}>{p.label}</p>
              <p className="text-xs text-gray-500">{p.ms}</p>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <label className="text-sm text-gray-400 flex justify-between">
            <span>{t('Frame Delay', 'تأخير الإطار')}</span>
            <span className="text-violet-400">{(options.resizePercentage || 50) * 10}ms</span>
          </label>
          <input
            type="range"
            min="10"
            max="200"
            value={options.resizePercentage || 50}
            onChange={e => update('resizePercentage', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{t('Faster', 'أسرع')}</span>
            <span>{t('Slower', 'أبطأ')}</span>
          </div>
        </div>

        <InfoBox type="info">
          {t('Images will play in the order you uploaded them. Each frame will display for the selected duration.', 'ستُعرض الصور بالترتيب الذي رفعتها. سيُعرض كل إطار للمدة المحددة.')}
        </InfoBox>

        <InfoBox type="tip">
          {t('Tip: Upload 5-15 images for best results. Very large GIFs may take longer to process.', 'نصيحة: ارفع 5-15 صورة للحصول على أفضل النتائج. قد يستغرق GIF الكبير جداً وقتاً أطول للمعالجة.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // MEME GENERATOR
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'meme-generator') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <ImageIcon className="w-5 h-5" /><h3 className="font-medium">{t('Meme Text', 'نص الميم')}</h3>
        </div>

        <div className="space-y-3">
          <label className="block text-sm text-gray-400">{t('Top Text', 'النص العلوي')}</label>
          <input
            type="text"
            value={options.watermarkText || ''}
            onChange={e => update('watermarkText', e.target.value)}
            placeholder={t('WHEN YOU...', 'عندما...')}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none uppercase font-bold"
          />
        </div>

        {options.watermarkText && (
          <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
            <p className="text-xs text-gray-400 mb-2">{t('Preview:', 'معاينة:')}</p>
            <p className="text-lg font-bold text-white uppercase" style={{ textShadow: '2px 2px 0 #000' }}>
              {options.watermarkText}
            </p>
          </div>
        )}

        <InfoBox type="info">
          {t('Text will appear at the top of your image in classic meme style with black outline.', 'سيظهر النص في أعلى صورتك بأسلوب الميم الكلاسيكي مع حدود سوداء.')}
        </InfoBox>

        <InfoBox type="tip">
          {t('Tip: Keep text short and impactful. ALL CAPS works best for memes!', 'نصيحة: اجعل النص قصيراً ومؤثراً. الأحرف الكبيرة تعمل أفضل للميمز!')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // COLLAGE MAKER
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'collage-maker') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <Layout className="w-5 h-5" /><h3 className="font-medium">{t('Collage Settings', 'إعدادات الكولاج')}</h3>
        </div>

        <InfoBox type="info">
          {t('Images will be arranged in a grid layout. Upload 2-20 images for best results.', 'سيتم ترتيب الصور في تخطيط شبكي. ارفع 2-20 صورة للحصول على أفضل النتائج.')}
        </InfoBox>

        <div className="grid grid-cols-3 gap-2">
          {[2, 4, 6, 9, 12, 16].map(n => (
            <div key={n} className="p-3 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
              <p className="text-violet-400 font-medium">{n}</p>
              <p className="text-xs text-gray-500">{t('images', 'صور')}</p>
            </div>
          ))}
        </div>

        <InfoBox type="tip">
          {t('Tip: Use images of similar dimensions for a more uniform collage.', 'نصيحة: استخدم صوراً بأبعاد متشابهة للحصول على كولاج أكثر تناسقاً.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // FLIP IMAGE
  // ═══════════════════════════════════════════════════════════
  if (tool.id === 'flip-image') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <FlipHorizontal className="w-5 h-5" /><h3 className="font-medium">{t('Flip Direction', 'اتجاه القلب')}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { id: 'horizontal', en: 'Horizontal', ar: 'أفقي', icon: '↔️', desc: t('Mirror left-right', 'انعكاس يسار-يمين') },
            { id: 'vertical', en: 'Vertical', ar: 'عمودي', icon: '↕️', desc: t('Mirror up-down', 'انعكاس أعلى-أسفل') },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => update('flipDirection', f.id as ToolOptionsState['flipDirection'])}
              className={`p-6 rounded-xl border-2 transition-all ${options.flipDirection === f.id ? 'border-violet-500 bg-violet-500/10' : 'border-gray-700 hover:border-violet-500/50'}`}
            >
              <div className="text-4xl text-center mb-2">{f.icon}</div>
              <p className={`text-center font-medium ${options.flipDirection === f.id ? 'text-violet-400' : 'text-white'}`}>{isRtl ? f.ar : f.en}</p>
              <p className="text-center text-xs text-gray-500 mt-1">{f.desc}</p>
            </button>
          ))}
        </div>

        <InfoBox type="info">
          {t('Flipping creates a mirror image of your photo.', 'القلب ينشئ صورة معكوسة من صورتك.')}
        </InfoBox>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // CONVERT FORMATS (JPG, PNG, WebP, HEIC, SVG)
  // ═══════════════════════════════════════════════════════════
  if (['convert-to-jpg', 'convert-to-png', 'convert-to-webp', 'pdf-to-jpg', 'heic-to-jpg', 'svg-to-png'].includes(tool.id)) {
    const formatInfo = {
      'convert-to-jpg': { format: 'JPG', desc: t('Best for photos, smaller file size, no transparency', 'الأفضل للصور، حجم أصغر، بدون شفافية') },
      'convert-to-png': { format: 'PNG', desc: t('Supports transparency, larger file size, lossless', 'يدعم الشفافية، حجم أكبر، بدون فقدان') },
      'convert-to-webp': { format: 'WebP', desc: t('Modern format, best compression, web optimized', 'صيغة حديثة، أفضل ضغط، محسن للويب') },
      'pdf-to-jpg': { format: 'JPG', desc: t('Each PDF page becomes a JPG image', 'كل صفحة PDF تصبح صورة JPG') },
      'heic-to-jpg': { format: 'JPG', desc: t('Convert iPhone photos to universal JPG format', 'تحويل صور آيفون لصيغة JPG العالمية') },
      'svg-to-png': { format: 'PNG', desc: t('Convert vector to raster at 2x resolution', 'تحويل المتجه إلى نقطي بدقة 2x') },
    };
    const info = formatInfo[tool.id as keyof typeof formatInfo];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet-400 mb-4">
          <FileImage className="w-5 h-5" /><h3 className="font-medium">{t('Output Settings', 'إعدادات الإخراج')}</h3>
        </div>

        <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30">
          <p className="text-violet-400 font-medium mb-1">{t('Output Format:', 'صيغة الإخراج:')} {info.format}</p>
          <p className="text-sm text-gray-400">{info.desc}</p>
        </div>

        {tool.id !== 'convert-to-png' && tool.id !== 'svg-to-png' && (
          <div className="space-y-3">
            <label className="text-sm text-gray-400 flex justify-between">
              <span>{t('Output Quality', 'جودة الإخراج')}</span>
              <span className="text-violet-400">{options.outputQuality || 85}%</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={options.outputQuality || 85}
              onChange={e => update('outputQuality', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{t('Smaller file', 'ملف أصغر')}</span>
              <span>{t('Better quality', 'جودة أفضل')}</span>
            </div>

            {(options.outputQuality || 85) < 50 && (
              <InfoBox type="warning">
                {t('Low quality setting will result in visible compression artifacts.', 'إعداد الجودة المنخفضة سيؤدي إلى آثار ضغط مرئية.')}
              </InfoBox>
            )}
            {(options.outputQuality || 85) >= 80 && (
              <InfoBox type="success">
                {t('High quality - your images will look great!', 'جودة عالية - ستبدو صورك رائعة!')}
              </InfoBox>
            )}
          </div>
        )}

        {tool.id === 'convert-to-jpg' && (
          <InfoBox type="warning">
            {t('Note: Transparent areas will become white when converting to JPG.', 'ملاحظة: ستصبح المناطق الشفافة بيضاء عند التحويل إلى JPG.')}
          </InfoBox>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // DEFAULT (for any tools without specific options)
  // ═══════════════════════════════════════════════════════════
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-violet-400 mb-4">
        <Settings className="w-5 h-5" /><h3 className="font-medium">{t('Processing', 'المعالجة')}</h3>
      </div>

      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-violet-400" />
        </div>
        <p className="text-white font-medium">{t('Ready to process', 'جاهز للمعالجة')}</p>
        <p className="text-sm text-gray-400 mt-2">{t('Click the button below to start processing your files.', 'انقر الزر أدناه لبدء معالجة ملفاتك.')}</p>
      </div>

      <InfoBox type="tip">
        {t('Your files are processed locally in your browser. Nothing is uploaded to our servers.', 'يتم معالجة ملفاتك محلياً في متصفحك. لا يتم رفع أي شيء لخوادمنا.')}
      </InfoBox>
    </div>
  );
}

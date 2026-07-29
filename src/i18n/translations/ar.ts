import type { TranslationKeys } from './en';

export const ar: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'لغتك جاهزة. مو مجرد ترجمة - الموقع مبني لك.',
    continue: 'متابعة',
  },

  // Navigation
  nav: {
    home: 'الرئيسية',
    tools: 'جميع الأدوات',
    pricing: 'الأسعار',
    help: 'المساعدة',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    account: 'حسابي',
    logout: 'تسجيل الخروج',
  },

  // Hero Section (homepage)
  hero: {
    tagline: '{count} أداة مجانية لملفات PDF والصور',
    secure: 'آمن ومشفر',
    instant: 'معالجة فورية',
    free: 'مجاني 100%',
    pdfToolsTitle: 'أدوات PDF',
    pdfToolsDesc: 'دمج، تقسيم، ضغط، تحويل والمزيد',
    imageToolsTitle: 'أدوات الصور',
    imageToolsDesc: 'ضغط، تغيير الحجم، تحويل وتعديل',
    toolsSuffix: 'أداة',
  },

  // Tools
  tools: {
    all: 'جميع الأدوات',
    organize: 'تنظيم PDF',
    optimize: 'تحسين PDF',
    convertTo: 'تحويل إلى PDF',
    convertFrom: 'تحويل من PDF',
    edit: 'تحرير PDF',
    security: 'أمان PDF',
    ai: 'الذكاء الاصطناعي',
    popular: 'الأدوات الشائعة',
    viewAll: 'عرض جميع الأدوات',
  },

  // Tool names
  toolNames: {
    merge: 'دمج PDF',
    split: 'تقسيم PDF',
    compress: 'ضغط PDF',
    organize: 'تنظيم PDF',
    rotate: 'تدوير PDF',
    watermark: 'إضافة علامة مائية',
    pageNumbers: 'إضافة أرقام الصفحات',
    protect: 'حماية PDF',
    unlock: 'فتح PDF',
    repair: 'إصلاح PDF',
    ocr: 'التعرف الضوئي',
    compare: 'مقارنة PDF',
    sign: 'توقيع PDF',
    edit: 'تحرير PDF',
    crop: 'قص PDF',
    redact: 'حذف المعلومات الحساسة',
    pdfToWord: 'PDF إلى Word',
    pdfToExcel: 'PDF إلى Excel',
    pdfToPowerpoint: 'PDF إلى PowerPoint',
    pdfToJpg: 'PDF إلى صورة',
    wordToPdf: 'Word إلى PDF',
    excelToPdf: 'Excel إلى PDF',
    powerpointToPdf: 'PowerPoint إلى PDF',
    jpgToPdf: 'صورة إلى PDF',
    htmlToPdf: 'HTML إلى PDF',
    summarize: 'تلخيص PDF',
    translate: 'ترجمة PDF',
    chat: 'محادثة مع PDF',
    extractData: 'استخراج البيانات',
  },

  // File Upload
  upload: {
    dropzone: 'اسحب الملفات وأفلتها هنا',
    or: 'أو',
    browse: 'تصفح الملفات',
    selectFiles: 'اختر ملفات PDF',
    uploading: 'جاري الرفع...',
    processing: 'جاري المعالجة...',
    maxSize: 'الحجم الأقصى:',
    formats: 'الصيغ المدعومة:',
    addMore: 'إضافة المزيد',
    removeAll: 'حذف الكل',
  },

  // Processing
  process: {
    start: 'معالجة',
    processing: 'جاري المعالجة...',
    done: 'تم!',
    failed: 'فشل',
    download: 'تحميل',
    downloadAll: 'تحميل الكل',
    deleteNow: 'حذف الآن',
    expiresIn: 'ينتهي خلال',
    expired: 'منتهي الصلاحية',
    retry: 'إعادة المحاولة',
  },

  // Options
  options: {
    quality: 'الجودة',
    compression: 'مستوى الضغط',
    low: 'منخفض',
    medium: 'متوسط',
    high: 'عالي',
    extreme: 'أقصى',
    pages: 'الصفحات',
    allPages: 'جميع الصفحات',
    customRange: 'نطاق مخصص',
    position: 'الموضع',
    font: 'الخط',
    fontSize: 'حجم الخط',
    color: 'اللون',
    opacity: 'الشفافية',
    rotation: 'التدوير',
  },

  // Pricing
  pricing: {
    title: 'اختر خطتك',
    subtitle: 'احصل على المزيد مع Premium',
    free: 'مجاني',
    premium: 'Premium',
    monthly: 'شهري',
    yearly: 'سنوي',
    perMonth: '/شهر',
    perYear: '/سنة',
    save: 'وفر',
    mostPopular: 'الأكثر شيوعاً',
    getStarted: 'ابدأ الآن',
    goPremium: 'احصل على Premium',
    currentPlan: 'الخطة الحالية',
    features: 'المميزات',
    limitations: 'القيود',
  },

  // Redeem
  redeem: {
    title: 'استخدام كود',
    subtitle: 'أدخل كود الوصول للحصول على المميزات المدفوعة',
    placeholder: 'أدخل الكود',
    submit: 'تفعيل',
    success: 'تم تفعيل الكود بنجاح!',
    error: 'كود غير صالح أو منتهي الصلاحية',
    alreadyUsed: 'هذا الكود مستخدم بالفعل',
  },

  // Account
  account: {
    title: 'حسابي',
    profile: 'الملف الشخصي',
    subscription: 'الاشتراك',
    usage: 'الاستخدام',
    settings: 'الإعدادات',
    billing: 'الفواتير',
    plan: 'الخطة الحالية',
    expiresOn: 'ينتهي في',
    neverExpires: 'لا ينتهي',
    operations: 'العمليات اليوم',
    ocrOperations: 'عمليات OCR اليوم',
    aiRequests: 'طلبات AI اليوم',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'نحن نستخدم ملفات تعريف الارتباط',
    description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك، وتحليل حركة الموقع، ولأغراض تسويقية. بالنقر على "قبول"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
    learnMore: 'اعرف المزيد',
    acceptAll: 'قبول الكل',
    decline: 'رفض',
    manage: 'إدارة',
  },

  // Footer
  footer: {
    tagline: 'أدوات PDF احترافية للجميع. سريعة وآمنة وسهلة الاستخدام.',
    product: 'المنتج',
    resources: 'المصادر',
    company: 'الشركة',
    legal: 'قانوني',
    home: 'الرئيسية',
    features: 'المميزات',
    pricing: 'الأسعار',
    tools: 'الأدوات',
    faq: 'الأسئلة الشائعة',
    blog: 'المدونة',
    help: 'المساعدة',
    about: 'من نحن',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    cookies: 'سياسة الكوكيز',
    refund: 'سياسة الاسترداد',
    copyright: 'جميع الحقوق محفوظة.',
    madeWith: 'صنع بـ',
  },

  // Common
  common: {
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجاح',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    save: 'حفظ',
    delete: 'حذف',
    edit: 'تعديل',
    close: 'إغلاق',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    submit: 'إرسال',
    search: 'بحث',
    filter: 'تصفية',
    sort: 'ترتيب',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    yes: 'نعم',
    no: 'لا',
    ok: 'موافق',
  },

  // Messages
  messages: {
    fileTooLarge: 'حجم الملف يتجاوز الحد المسموح',
    invalidFormat: 'صيغة ملف غير صالحة',
    uploadFailed: 'فشل الرفع',
    processingFailed: 'فشلت المعالجة',
    downloadReady: 'ملفك جاهز للتحميل',
    filesExpiringSoon: 'سيتم حذف ملفاتك خلال',
    dailyLimitReached: 'وصلت للحد اليومي',
    upgradeForMore: 'قم بالترقية إلى Premium للوصول غير المحدود',
    loginRequired: 'يرجى تسجيل الدخول للمتابعة',
    premiumRequired: 'هذه الميزة تتطلب Premium',
  },

  // SEO
  seo: {
    title: 'Xeer Files - أدوات PDF مجانية عبر الإنترنت',
    description: 'أدوات PDF مجانية عبر الإنترنت لدمج وتقسيم وضغط وتحويل وتدوير وفتح وإضافة علامة مائية لملفات PDF. سريع وآمن وسهل الاستخدام.',
    keywords: 'PDF، دمج PDF، تقسيم PDF، ضغط PDF، تحويل PDF، أدوات PDF عبر الإنترنت، محرر PDF مجاني',
  },
};

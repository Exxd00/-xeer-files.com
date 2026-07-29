import type { TranslationKeys } from './en';

export const tr: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'Diliniz hazır. Sadece çeviri değil - sizin için yapıldı.',
    continue: 'Devam Et',
  },

  // Navigation
  nav: {
    home: 'Ana Sayfa',
    tools: 'Tüm Araçlar',
    pricing: 'Fiyatlandırma',
    help: 'Yardım',
    login: 'Giriş Yap',
    signup: 'Kayıt Ol',
    account: 'Hesap',
    logout: 'Çıkış Yap',
  },

  // Hero Section (homepage)
  hero: {
    tagline: 'PDF ve Görseller için {count} Ücretsiz Araç',
    secure: 'Güvenli ve Özel',
    instant: 'Anında İşleme',
    free: '%100 Ücretsiz',
    pdfToolsTitle: 'PDF Araçları',
    pdfToolsDesc: 'Birleştir, Böl, Sıkıştır, Dönüştür ve Daha Fazlası',
    imageToolsTitle: 'Görsel Araçları',
    imageToolsDesc: 'Sıkıştır, Yeniden Boyutlandır, Dönüştür ve Düzenle',
    toolsSuffix: 'araç',
  },

  // Tools
  tools: {
    all: 'Tüm Araçlar',
    organize: "PDF'yi Düzenle",
    optimize: "PDF'yi Optimize Et",
    convertTo: "PDF'ye Dönüştür",
    convertFrom: "PDF'den Dönüştür",
    edit: "PDF'yi Düzenle",
    security: 'PDF Güvenliği',
    ai: 'Yapay Zeka',
    popular: 'Popüler Araçlar',
    viewAll: 'Tüm Araçları Görüntüle',
  },

  // Tool names
  toolNames: {
    merge: "PDF'leri Birleştir",
    split: "PDF'yi Böl",
    compress: "PDF'yi Sıkıştır",
    organize: "PDF'yi Düzenle",
    rotate: "PDF'yi Döndür",
    watermark: 'Filigran Ekle',
    pageNumbers: 'Sayfa Numarası Ekle',
    protect: "PDF'yi Koru",
    unlock: "PDF Kilidini Aç",
    repair: "PDF'yi Onar",
    ocr: 'PDF OCR',
    compare: "PDF'leri Karşılaştır",
    sign: "PDF'yi İmzala",
    edit: "PDF'yi Düzenle",
    crop: "PDF'yi Kırp",
    redact: "PDF'de Bilgi Gizle",
    pdfToWord: "PDF'den Word'e",
    pdfToExcel: "PDF'den Excel'e",
    pdfToPowerpoint: "PDF'den PowerPoint'e",
    pdfToJpg: "PDF'den JPG'ye",
    wordToPdf: "Word'den PDF'ye",
    excelToPdf: "Excel'den PDF'ye",
    powerpointToPdf: "PowerPoint'ten PDF'ye",
    jpgToPdf: "JPG'den PDF'ye",
    htmlToPdf: "HTML'den PDF'ye",
    summarize: "PDF'yi Özetle",
    translate: "PDF'yi Çevir",
    chat: 'PDF ile Sohbet Et',
    extractData: 'Veri Çıkar',
  },

  // File Upload
  upload: {
    dropzone: 'Dosyaları buraya sürükleyip bırakın',
    or: 'veya',
    browse: 'Dosyalara Göz At',
    selectFiles: 'PDF Dosyaları Seç',
    uploading: 'Yükleniyor...',
    processing: 'İşleniyor...',
    maxSize: 'Maksimum dosya boyutu:',
    formats: 'Desteklenen formatlar:',
    addMore: 'Daha Fazla Dosya Ekle',
    removeAll: 'Tümünü Kaldır',
  },

  // Processing
  process: {
    start: 'İşle',
    processing: 'İşleniyor...',
    done: 'Tamamlandı!',
    failed: 'Başarısız',
    download: 'İndir',
    downloadAll: 'Tümünü İndir',
    deleteNow: 'Şimdi Sil',
    expiresIn: 'Şu sürede sona erer:',
    expired: 'Süresi Doldu',
    retry: 'Tekrar Dene',
  },

  // Options
  options: {
    quality: 'Kalite',
    compression: 'Sıkıştırma Seviyesi',
    low: 'Düşük',
    medium: 'Orta',
    high: 'Yüksek',
    extreme: 'Aşırı',
    pages: 'Sayfalar',
    allPages: 'Tüm Sayfalar',
    customRange: 'Özel Aralık',
    position: 'Konum',
    font: 'Yazı Tipi',
    fontSize: 'Yazı Tipi Boyutu',
    color: 'Renk',
    opacity: 'Opaklık',
    rotation: 'Döndürme',
  },

  // Pricing
  pricing: {
    title: 'Planınızı Seçin',
    subtitle: "Premium ile Daha Fazlasını Alın",
    free: 'Ücretsiz',
    premium: 'Premium',
    monthly: 'Aylık',
    yearly: 'Yıllık',
    perMonth: '/ay',
    perYear: '/yıl',
    save: 'Tasarruf Et',
    mostPopular: 'En Popüler',
    getStarted: 'Başlayın',
    goPremium: "Premium'a Geç",
    currentPlan: 'Mevcut Plan',
    features: 'Özellikler',
    limitations: 'Sınırlamalar',
  },

  // Redeem
  redeem: {
    title: 'Kodu Kullan',
    subtitle: 'Premium özelliklerin kilidini açmak için erişim kodunuzu girin',
    placeholder: 'Kodunuzu girin',
    submit: 'Kullan',
    success: 'Kod başarıyla kullanıldı!',
    error: 'Geçersiz veya süresi dolmuş kod',
    alreadyUsed: 'Bu kod zaten kullanıldı',
  },

  // Account
  account: {
    title: 'Hesabım',
    profile: 'Profil',
    subscription: 'Abonelik',
    usage: 'Kullanım',
    settings: 'Ayarlar',
    billing: 'Faturalandırma',
    plan: 'Mevcut Plan',
    expiresOn: 'Sona erme tarihi',
    neverExpires: 'Asla sona ermez',
    operations: 'Bugünkü işlemler',
    ocrOperations: 'Bugünkü OCR işlemleri',
    aiRequests: 'Bugünkü yapay zeka istekleri',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'Çerezleri Kullanıyoruz',
    description: 'Deneyiminizi geliştirmek, site trafiğini analiz etmek ve pazarlama amacıyla çerezler kullanıyoruz. "Kabul Et"e tıklayarak çerez kullanımımızı kabul etmiş olursunuz.',
    learnMore: 'Daha Fazla Bilgi',
    acceptAll: 'Tümünü Kabul Et',
    decline: 'Reddet',
    manage: 'Yönet',
  },

  // Footer
  footer: {
    tagline: 'Herkes için profesyonel PDF araçları. Hızlı, güvenli ve kullanımı kolay.',
    product: 'Ürün',
    resources: 'Kaynaklar',
    company: 'Şirket',
    legal: 'Yasal',
    home: 'Ana Sayfa',
    features: 'Özellikler',
    pricing: 'Fiyatlandırma',
    tools: 'Araçlar',
    faq: 'Sıkça Sorulan Sorular',
    blog: 'Blog',
    help: 'Yardım',
    about: 'Hakkımızda',
    contact: 'İletişim',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Şartları',
    cookies: 'Çerez Politikası',
    refund: 'İade Politikası',
    copyright: 'Tüm hakları saklıdır.',
    madeWith: 'Şununla yapıldı:',
  },

  // Common
  common: {
    loading: 'Yükleniyor...',
    error: 'Hata',
    success: 'Başarılı',
    cancel: 'İptal',
    confirm: 'Onayla',
    save: 'Kaydet',
    delete: 'Sil',
    edit: 'Düzenle',
    close: 'Kapat',
    back: 'Geri',
    next: 'İleri',
    previous: 'Önceki',
    submit: 'Gönder',
    search: 'Ara',
    filter: 'Filtrele',
    sort: 'Sırala',
    reset: 'Sıfırla',
    clear: 'Temizle',
    yes: 'Evet',
    no: 'Hayır',
    ok: 'Tamam',
  },

  // Messages
  messages: {
    fileTooLarge: 'Dosya boyutu limiti aşıyor',
    invalidFormat: 'Geçersiz dosya formatı',
    uploadFailed: 'Yükleme başarısız',
    processingFailed: 'İşleme başarısız',
    downloadReady: 'Dosyanız indirilmeye hazır',
    filesExpiringSoon: 'Dosyalarınız şu sürede silinecek:',
    dailyLimitReached: 'Günlük limite ulaşıldı',
    upgradeForMore: 'Sınırsız erişim için Premium\'a yükseltin',
    loginRequired: 'Devam etmek için lütfen giriş yapın',
    premiumRequired: 'Bu özellik Premium gerektirir',
  },

  // SEO
  seo: {
    title: 'Xeer Files - Ücretsiz Çevrimiçi PDF Araçları',
    description: "PDF'leri birleştirmek, bölmek, sıkıştırmak, dönüştürmek, döndürmek, kilidini açmak ve filigran eklemek için ücretsiz çevrimiçi PDF araçları. Hızlı, güvenli ve kullanımı kolay.",
    keywords: "PDF, PDF birleştir, PDF böl, PDF sıkıştır, PDF dönüştür, çevrimiçi PDF araçları, ücretsiz PDF düzenleyici",
  },
};

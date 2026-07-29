import type { TranslationKeys } from './en';

export const de: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'Deine Sprache ist bereit. Nicht nur übersetzt - für dich gemacht.',
    continue: 'Weiter',
  },

  // Navigation
  nav: {
    home: 'Startseite',
    tools: 'Alle Werkzeuge',
    pricing: 'Preise',
    help: 'Hilfe',
    login: 'Anmelden',
    signup: 'Registrieren',
    account: 'Konto',
    logout: 'Abmelden',
  },

  // Hero Section (homepage)
  hero: {
    tagline: '{count} Kostenlose Tools für PDF & Bilder',
    secure: 'Sicher & Privat',
    instant: 'Sofortige Verarbeitung',
    free: '100% Kostenlos',
    pdfToolsTitle: 'PDF-Werkzeuge',
    pdfToolsDesc: 'Zusammenführen, Teilen, Komprimieren, Konvertieren & Mehr',
    imageToolsTitle: 'Bild-Werkzeuge',
    imageToolsDesc: 'Komprimieren, Größe Ändern, Konvertieren & Bearbeiten',
    toolsSuffix: 'Werkzeuge',
  },

  // Tools
  tools: {
    all: 'Alle Werkzeuge',
    organize: 'PDF Organisieren',
    optimize: 'PDF Optimieren',
    convertTo: 'In PDF Konvertieren',
    convertFrom: 'Von PDF Konvertieren',
    edit: 'PDF Bearbeiten',
    security: 'PDF-Sicherheit',
    ai: 'Künstliche Intelligenz',
    popular: 'Beliebte Werkzeuge',
    viewAll: 'Alle Werkzeuge Anzeigen',
  },

  // Tool names
  toolNames: {
    merge: 'PDF Zusammenführen',
    split: 'PDF Teilen',
    compress: 'PDF Komprimieren',
    organize: 'PDF Organisieren',
    rotate: 'PDF Drehen',
    watermark: 'Wasserzeichen Hinzufügen',
    pageNumbers: 'Seitenzahlen Hinzufügen',
    protect: 'PDF Schützen',
    unlock: 'PDF Entsperren',
    repair: 'PDF Reparieren',
    ocr: 'PDF OCR',
    compare: 'PDF Vergleichen',
    sign: 'PDF Signieren',
    edit: 'PDF Bearbeiten',
    crop: 'PDF Zuschneiden',
    redact: 'PDF Schwärzen',
    pdfToWord: 'PDF zu Word',
    pdfToExcel: 'PDF zu Excel',
    pdfToPowerpoint: 'PDF zu PowerPoint',
    pdfToJpg: 'PDF zu JPG',
    wordToPdf: 'Word zu PDF',
    excelToPdf: 'Excel zu PDF',
    powerpointToPdf: 'PowerPoint zu PDF',
    jpgToPdf: 'JPG zu PDF',
    htmlToPdf: 'HTML zu PDF',
    summarize: 'PDF Zusammenfassen',
    translate: 'PDF Übersetzen',
    chat: 'Mit PDF Chatten',
    extractData: 'Daten Extrahieren',
  },

  // File Upload
  upload: {
    dropzone: 'Dateien hierher ziehen',
    or: 'oder',
    browse: 'Dateien durchsuchen',
    selectFiles: 'PDF-Dateien Auswählen',
    uploading: 'Wird hochgeladen...',
    processing: 'Wird verarbeitet...',
    maxSize: 'Maximale Dateigröße:',
    formats: 'Unterstützte Formate:',
    addMore: 'Weitere Dateien Hinzufügen',
    removeAll: 'Alle Entfernen',
  },

  // Processing
  process: {
    start: 'Verarbeiten',
    processing: 'Wird verarbeitet...',
    done: 'Fertig!',
    failed: 'Fehlgeschlagen',
    download: 'Herunterladen',
    downloadAll: 'Alle Herunterladen',
    deleteNow: 'Jetzt Löschen',
    expiresIn: 'Läuft ab in',
    expired: 'Abgelaufen',
    retry: 'Erneut Versuchen',
  },

  // Options
  options: {
    quality: 'Qualität',
    compression: 'Komprimierungsstufe',
    low: 'Niedrig',
    medium: 'Mittel',
    high: 'Hoch',
    extreme: 'Extrem',
    pages: 'Seiten',
    allPages: 'Alle Seiten',
    customRange: 'Benutzerdefinierter Bereich',
    position: 'Position',
    font: 'Schriftart',
    fontSize: 'Schriftgröße',
    color: 'Farbe',
    opacity: 'Deckkraft',
    rotation: 'Drehung',
  },

  // Pricing
  pricing: {
    title: 'Wähle deinen Plan',
    subtitle: 'Hol dir mehr mit Premium',
    free: 'Kostenlos',
    premium: 'Premium',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    perMonth: '/Monat',
    perYear: '/Jahr',
    save: 'Sparen',
    mostPopular: 'Am Beliebtesten',
    getStarted: 'Loslegen',
    goPremium: 'Premium Holen',
    currentPlan: 'Aktueller Plan',
    features: 'Funktionen',
    limitations: 'Einschränkungen',
  },

  // Redeem
  redeem: {
    title: 'Code Einlösen',
    subtitle: 'Gib deinen Zugangscode ein, um Premium-Funktionen freizuschalten',
    placeholder: 'Code eingeben',
    submit: 'Einlösen',
    success: 'Code erfolgreich eingelöst!',
    error: 'Ungültiger oder abgelaufener Code',
    alreadyUsed: 'Dieser Code wurde bereits verwendet',
  },

  // Account
  account: {
    title: 'Mein Konto',
    profile: 'Profil',
    subscription: 'Abonnement',
    usage: 'Nutzung',
    settings: 'Einstellungen',
    billing: 'Abrechnung',
    plan: 'Aktueller Plan',
    expiresOn: 'Läuft ab am',
    neverExpires: 'Läuft nie ab',
    operations: 'Vorgänge heute',
    ocrOperations: 'OCR-Vorgänge heute',
    aiRequests: 'KI-Anfragen heute',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'Wir verwenden Cookies',
    description: 'Wir verwenden Cookies, um dein Erlebnis zu verbessern, den Website-Traffic zu analysieren und für Marketingzwecke. Mit Klick auf "Akzeptieren" stimmst du unserer Verwendung von Cookies zu.',
    learnMore: 'Mehr erfahren',
    acceptAll: 'Alle Akzeptieren',
    decline: 'Ablehnen',
    manage: 'Verwalten',
  },

  // Footer
  footer: {
    tagline: 'Professionelle PDF-Werkzeuge für alle. Schnell, sicher und einfach zu bedienen.',
    product: 'Produkt',
    resources: 'Ressourcen',
    company: 'Unternehmen',
    legal: 'Rechtliches',
    home: 'Startseite',
    features: 'Funktionen',
    pricing: 'Preise',
    tools: 'Werkzeuge',
    faq: 'FAQ',
    blog: 'Blog',
    help: 'Hilfe',
    about: 'Über Uns',
    contact: 'Kontakt',
    privacy: 'Datenschutzrichtlinie',
    terms: 'Nutzungsbedingungen',
    cookies: 'Cookie-Richtlinie',
    refund: 'Rückerstattungsrichtlinie',
    copyright: 'Alle Rechte vorbehalten.',
    madeWith: 'Gemacht mit',
  },

  // Common
  common: {
    loading: 'Wird geladen...',
    error: 'Fehler',
    success: 'Erfolg',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    close: 'Schließen',
    back: 'Zurück',
    next: 'Weiter',
    previous: 'Vorherige',
    submit: 'Absenden',
    search: 'Suchen',
    filter: 'Filtern',
    sort: 'Sortieren',
    reset: 'Zurücksetzen',
    clear: 'Löschen',
    yes: 'Ja',
    no: 'Nein',
    ok: 'OK',
  },

  // Messages
  messages: {
    fileTooLarge: 'Dateigröße überschreitet das Limit',
    invalidFormat: 'Ungültiges Dateiformat',
    uploadFailed: 'Upload fehlgeschlagen',
    processingFailed: 'Verarbeitung fehlgeschlagen',
    downloadReady: 'Deine Datei ist zum Download bereit',
    filesExpiringSoon: 'Deine Dateien werden gelöscht in',
    dailyLimitReached: 'Tageslimit erreicht',
    upgradeForMore: 'Upgrade auf Premium für unbegrenzten Zugriff',
    loginRequired: 'Bitte melde dich an, um fortzufahren',
    premiumRequired: 'Diese Funktion erfordert Premium',
  },

  // SEO
  seo: {
    title: 'Xeer Files - Kostenlose Online-PDF-Werkzeuge',
    description: 'Kostenlose Online-PDF-Werkzeuge zum Zusammenführen, Teilen, Komprimieren, Konvertieren, Drehen, Entsperren und Versehen mit Wasserzeichen von PDFs. Schnell, sicher und einfach zu bedienen.',
    keywords: 'PDF, PDF zusammenführen, PDF teilen, PDF komprimieren, PDF konvertieren, Online-PDF-Werkzeuge, kostenloser PDF-Editor',
  },
};

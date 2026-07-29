import type { TranslationKeys } from './en';

export const pl: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'Twój język jest gotowy. To nie jest zwykłe tłumaczenie - stworzone dla ciebie.',
    continue: 'Kontynuuj',
  },

  // Navigation
  nav: {
    home: 'Strona Główna',
    tools: 'Wszystkie Narzędzia',
    pricing: 'Cennik',
    help: 'Pomoc',
    login: 'Zaloguj się',
    signup: 'Zarejestruj się',
    account: 'Konto',
    logout: 'Wyloguj się',
  },

  // Hero Section (homepage)
  hero: {
    tagline: '{count} Darmowych Narzędzi do PDF i Zdjęć',
    secure: 'Bezpiecznie i Prywatnie',
    instant: 'Natychmiastowe Przetwarzanie',
    free: '100% Darmowe',
    pdfToolsTitle: 'Narzędzia PDF',
    pdfToolsDesc: 'Łącz, Dziel, Kompresuj, Konwertuj i Więcej',
    imageToolsTitle: 'Narzędzia do Zdjęć',
    imageToolsDesc: 'Kompresuj, Zmień Rozmiar, Konwertuj i Edytuj',
    toolsSuffix: 'narzędzi',
  },

  // Tools
  tools: {
    all: 'Wszystkie Narzędzia',
    organize: 'Organizuj PDF',
    optimize: 'Optymalizuj PDF',
    convertTo: 'Konwertuj na PDF',
    convertFrom: 'Konwertuj z PDF',
    edit: 'Edytuj PDF',
    security: 'Bezpieczeństwo PDF',
    ai: 'Sztuczna Inteligencja',
    popular: 'Popularne Narzędzia',
    viewAll: 'Zobacz Wszystkie Narzędzia',
  },

  // Tool names
  toolNames: {
    merge: 'Połącz PDF',
    split: 'Podziel PDF',
    compress: 'Kompresuj PDF',
    organize: 'Organizuj PDF',
    rotate: 'Obróć PDF',
    watermark: 'Dodaj Znak Wodny',
    pageNumbers: 'Dodaj Numery Stron',
    protect: 'Zabezpiecz PDF',
    unlock: 'Odblokuj PDF',
    repair: 'Napraw PDF',
    ocr: 'OCR PDF',
    compare: 'Porównaj PDF',
    sign: 'Podpisz PDF',
    edit: 'Edytuj PDF',
    crop: 'Przytnij PDF',
    redact: 'Ukryj Dane w PDF',
    pdfToWord: 'PDF na Word',
    pdfToExcel: 'PDF na Excel',
    pdfToPowerpoint: 'PDF na PowerPoint',
    pdfToJpg: 'PDF na JPG',
    wordToPdf: 'Word na PDF',
    excelToPdf: 'Excel na PDF',
    powerpointToPdf: 'PowerPoint na PDF',
    jpgToPdf: 'JPG na PDF',
    htmlToPdf: 'HTML na PDF',
    summarize: 'Podsumuj PDF',
    translate: 'Przetłumacz PDF',
    chat: 'Czatuj z PDF',
    extractData: 'Wyodrębnij Dane',
  },

  // File Upload
  upload: {
    dropzone: 'Przeciągnij i upuść pliki tutaj',
    or: 'lub',
    browse: 'Przeglądaj pliki',
    selectFiles: 'Wybierz pliki PDF',
    uploading: 'Przesyłanie...',
    processing: 'Przetwarzanie...',
    maxSize: 'Maksymalny rozmiar pliku:',
    formats: 'Obsługiwane formaty:',
    addMore: 'Dodaj więcej plików',
    removeAll: 'Usuń wszystko',
  },

  // Processing
  process: {
    start: 'Przetwórz',
    processing: 'Przetwarzanie...',
    done: 'Gotowe!',
    failed: 'Niepowodzenie',
    download: 'Pobierz',
    downloadAll: 'Pobierz Wszystko',
    deleteNow: 'Usuń Teraz',
    expiresIn: 'Wygasa za',
    expired: 'Wygasło',
    retry: 'Spróbuj Ponownie',
  },

  // Options
  options: {
    quality: 'Jakość',
    compression: 'Poziom Kompresji',
    low: 'Niski',
    medium: 'Średni',
    high: 'Wysoki',
    extreme: 'Ekstremalny',
    pages: 'Strony',
    allPages: 'Wszystkie Strony',
    customRange: 'Niestandardowy Zakres',
    position: 'Pozycja',
    font: 'Czcionka',
    fontSize: 'Rozmiar Czcionki',
    color: 'Kolor',
    opacity: 'Przezroczystość',
    rotation: 'Obrót',
  },

  // Pricing
  pricing: {
    title: 'Wybierz swój plan',
    subtitle: 'Zyskaj więcej z Premium',
    free: 'Darmowy',
    premium: 'Premium',
    monthly: 'Miesięcznie',
    yearly: 'Rocznie',
    perMonth: '/miesiąc',
    perYear: '/rok',
    save: 'Oszczędzaj',
    mostPopular: 'Najpopularniejszy',
    getStarted: 'Rozpocznij',
    goPremium: 'Przejdź na Premium',
    currentPlan: 'Aktualny Plan',
    features: 'Funkcje',
    limitations: 'Ograniczenia',
  },

  // Redeem
  redeem: {
    title: 'Wykorzystaj Kod',
    subtitle: 'Wprowadź kod dostępu, aby odblokować funkcje premium',
    placeholder: 'Wprowadź swój kod',
    submit: 'Wykorzystaj',
    success: 'Kod pomyślnie wykorzystany!',
    error: 'Nieprawidłowy lub wygasły kod',
    alreadyUsed: 'Ten kod został już wykorzystany',
  },

  // Account
  account: {
    title: 'Moje Konto',
    profile: 'Profil',
    subscription: 'Subskrypcja',
    usage: 'Użycie',
    settings: 'Ustawienia',
    billing: 'Rozliczenia',
    plan: 'Aktualny Plan',
    expiresOn: 'Wygasa',
    neverExpires: 'Nigdy nie wygasa',
    operations: 'Operacje dzisiaj',
    ocrOperations: 'Operacje OCR dzisiaj',
    aiRequests: 'Zapytania AI dzisiaj',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'Używamy plików cookie',
    description: 'Używamy plików cookie, aby poprawić twoje doświadczenia, analizować ruch na stronie i w celach marketingowych. Klikając "Akceptuj", wyrażasz zgodę na używanie przez nas plików cookie.',
    learnMore: 'Dowiedz się więcej',
    acceptAll: 'Zaakceptuj Wszystko',
    decline: 'Odrzuć',
    manage: 'Zarządzaj',
  },

  // Footer
  footer: {
    tagline: 'Profesjonalne narzędzia PDF dla każdego. Szybkie, bezpieczne i łatwe w użyciu.',
    product: 'Produkt',
    resources: 'Zasoby',
    company: 'Firma',
    legal: 'Informacje Prawne',
    home: 'Strona Główna',
    features: 'Funkcje',
    pricing: 'Cennik',
    tools: 'Narzędzia',
    faq: 'Najczęściej Zadawane Pytania',
    blog: 'Blog',
    help: 'Pomoc',
    about: 'O Nas',
    contact: 'Kontakt',
    privacy: 'Polityka Prywatności',
    terms: 'Warunki Korzystania',
    cookies: 'Polityka Plików Cookie',
    refund: 'Polityka Zwrotów',
    copyright: 'Wszelkie prawa zastrzeżone.',
    madeWith: 'Stworzone z',
  },

  // Common
  common: {
    loading: 'Ładowanie...',
    error: 'Błąd',
    success: 'Sukces',
    cancel: 'Anuluj',
    confirm: 'Potwierdź',
    save: 'Zapisz',
    delete: 'Usuń',
    edit: 'Edytuj',
    close: 'Zamknij',
    back: 'Wstecz',
    next: 'Dalej',
    previous: 'Poprzedni',
    submit: 'Wyślij',
    search: 'Szukaj',
    filter: 'Filtruj',
    sort: 'Sortuj',
    reset: 'Resetuj',
    clear: 'Wyczyść',
    yes: 'Tak',
    no: 'Nie',
    ok: 'OK',
  },

  // Messages
  messages: {
    fileTooLarge: 'Rozmiar pliku przekracza limit',
    invalidFormat: 'Nieprawidłowy format pliku',
    uploadFailed: 'Przesyłanie nie powiodło się',
    processingFailed: 'Przetwarzanie nie powiodło się',
    downloadReady: 'Twój plik jest gotowy do pobrania',
    filesExpiringSoon: 'Twoje pliki zostaną usunięte za',
    dailyLimitReached: 'Osiągnięto dzienny limit',
    upgradeForMore: 'Przejdź na Premium, aby uzyskać nieograniczony dostęp',
    loginRequired: 'Zaloguj się, aby kontynuować',
    premiumRequired: 'Ta funkcja wymaga Premium',
  },

  // SEO
  seo: {
    title: 'Xeer Files - Darmowe Narzędzia PDF Online',
    description: 'Darmowe narzędzia PDF online do łączenia, dzielenia, kompresowania, konwertowania, obracania, odblokowywania i dodawania znaków wodnych do plików PDF. Szybko, bezpiecznie i łatwo w użyciu.',
    keywords: 'PDF, połącz PDF, podziel PDF, kompresuj PDF, konwertuj PDF, narzędzia PDF online, darmowy edytor PDF',
  },
};

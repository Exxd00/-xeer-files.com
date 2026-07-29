import type { TranslationKeys } from './en';

export const ru: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'Ваш язык готов. Это не просто перевод - сделано для вас.',
    continue: 'Продолжить',
  },

  // Navigation
  nav: {
    home: 'Главная',
    tools: 'Все Инструменты',
    pricing: 'Цены',
    help: 'Помощь',
    login: 'Войти',
    signup: 'Регистрация',
    account: 'Аккаунт',
    logout: 'Выйти',
  },

  // Hero Section (homepage)
  hero: {
    tagline: '{count} Бесплатных Инструментов для PDF и Изображений',
    secure: 'Безопасно и Конфиденциально',
    instant: 'Мгновенная Обработка',
    free: '100% Бесплатно',
    pdfToolsTitle: 'Инструменты PDF',
    pdfToolsDesc: 'Объединить, Разделить, Сжать, Конвертировать и Больше',
    imageToolsTitle: 'Инструменты для Изображений',
    imageToolsDesc: 'Сжать, Изменить Размер, Конвертировать и Редактировать',
    toolsSuffix: 'инструментов',
  },

  // Tools
  tools: {
    all: 'Все Инструменты',
    organize: 'Организовать PDF',
    optimize: 'Оптимизировать PDF',
    convertTo: 'Конвертировать в PDF',
    convertFrom: 'Конвертировать из PDF',
    edit: 'Редактировать PDF',
    security: 'Безопасность PDF',
    ai: 'Искусственный Интеллект',
    popular: 'Популярные Инструменты',
    viewAll: 'Показать Все Инструменты',
  },

  // Tool names
  toolNames: {
    merge: 'Объединить PDF',
    split: 'Разделить PDF',
    compress: 'Сжать PDF',
    organize: 'Организовать PDF',
    rotate: 'Повернуть PDF',
    watermark: 'Добавить Водяной Знак',
    pageNumbers: 'Добавить Номера Страниц',
    protect: 'Защитить PDF',
    unlock: 'Снять Защиту PDF',
    repair: 'Восстановить PDF',
    ocr: 'Распознавание Текста PDF',
    compare: 'Сравнить PDF',
    sign: 'Подписать PDF',
    edit: 'Редактировать PDF',
    crop: 'Обрезать PDF',
    redact: 'Скрыть Данные в PDF',
    pdfToWord: 'PDF в Word',
    pdfToExcel: 'PDF в Excel',
    pdfToPowerpoint: 'PDF в PowerPoint',
    pdfToJpg: 'PDF в JPG',
    wordToPdf: 'Word в PDF',
    excelToPdf: 'Excel в PDF',
    powerpointToPdf: 'PowerPoint в PDF',
    jpgToPdf: 'JPG в PDF',
    htmlToPdf: 'HTML в PDF',
    summarize: 'Суммировать PDF',
    translate: 'Перевести PDF',
    chat: 'Чат с PDF',
    extractData: 'Извлечь Данные',
  },

  // File Upload
  upload: {
    dropzone: 'Перетащите файлы сюда',
    or: 'или',
    browse: 'Обзор файлов',
    selectFiles: 'Выбрать файлы PDF',
    uploading: 'Загрузка...',
    processing: 'Обработка...',
    maxSize: 'Максимальный размер:',
    formats: 'Поддерживаемые форматы:',
    addMore: 'Добавить еще файлы',
    removeAll: 'Удалить все',
  },

  // Processing
  process: {
    start: 'Обработать',
    processing: 'Обработка...',
    done: 'Готово!',
    failed: 'Ошибка',
    download: 'Скачать',
    downloadAll: 'Скачать Все',
    deleteNow: 'Удалить Сейчас',
    expiresIn: 'Истекает через',
    expired: 'Истекло',
    retry: 'Повторить',
  },

  // Options
  options: {
    quality: 'Качество',
    compression: 'Уровень Сжатия',
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
    extreme: 'Максимальный',
    pages: 'Страницы',
    allPages: 'Все Страницы',
    customRange: 'Пользовательский Диапазон',
    position: 'Позиция',
    font: 'Шрифт',
    fontSize: 'Размер Шрифта',
    color: 'Цвет',
    opacity: 'Прозрачность',
    rotation: 'Поворот',
  },

  // Pricing
  pricing: {
    title: 'Выберите свой план',
    subtitle: 'Получите больше с Premium',
    free: 'Бесплатно',
    premium: 'Premium',
    monthly: 'Ежемесячно',
    yearly: 'Ежегодно',
    perMonth: '/месяц',
    perYear: '/год',
    save: 'Экономьте',
    mostPopular: 'Самый Популярный',
    getStarted: 'Начать',
    goPremium: 'Перейти на Premium',
    currentPlan: 'Текущий План',
    features: 'Функции',
    limitations: 'Ограничения',
  },

  // Redeem
  redeem: {
    title: 'Активировать Код',
    subtitle: 'Введите код доступа, чтобы разблокировать премиум-функции',
    placeholder: 'Введите ваш код',
    submit: 'Активировать',
    success: 'Код успешно активирован!',
    error: 'Неверный или истекший код',
    alreadyUsed: 'Этот код уже был использован',
  },

  // Account
  account: {
    title: 'Мой Аккаунт',
    profile: 'Профиль',
    subscription: 'Подписка',
    usage: 'Использование',
    settings: 'Настройки',
    billing: 'Оплата',
    plan: 'Текущий План',
    expiresOn: 'Истекает',
    neverExpires: 'Никогда не истекает',
    operations: 'Операций сегодня',
    ocrOperations: 'Операций OCR сегодня',
    aiRequests: 'Запросов ИИ сегодня',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'Мы используем файлы cookie',
    description: 'Мы используем файлы cookie для улучшения вашего опыта, анализа трафика сайта и в маркетинговых целях. Нажимая "Принять", вы соглашаетесь на использование файлов cookie.',
    learnMore: 'Узнать больше',
    acceptAll: 'Принять Все',
    decline: 'Отклонить',
    manage: 'Управление',
  },

  // Footer
  footer: {
    tagline: 'Профессиональные инструменты PDF для всех. Быстро, безопасно и просто в использовании.',
    product: 'Продукт',
    resources: 'Ресурсы',
    company: 'Компания',
    legal: 'Правовая Информация',
    home: 'Главная',
    features: 'Функции',
    pricing: 'Цены',
    tools: 'Инструменты',
    faq: 'Вопросы и Ответы',
    blog: 'Блог',
    help: 'Помощь',
    about: 'О Нас',
    contact: 'Контакты',
    privacy: 'Политика Конфиденциальности',
    terms: 'Условия Использования',
    cookies: 'Политика Использования Cookie',
    refund: 'Политика Возврата',
    copyright: 'Все права защищены.',
    madeWith: 'Сделано с',
  },

  // Common
  common: {
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успешно',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    save: 'Сохранить',
    delete: 'Удалить',
    edit: 'Редактировать',
    close: 'Закрыть',
    back: 'Назад',
    next: 'Далее',
    previous: 'Предыдущий',
    submit: 'Отправить',
    search: 'Поиск',
    filter: 'Фильтр',
    sort: 'Сортировка',
    reset: 'Сбросить',
    clear: 'Очистить',
    yes: 'Да',
    no: 'Нет',
    ok: 'ОК',
  },

  // Messages
  messages: {
    fileTooLarge: 'Размер файла превышает лимит',
    invalidFormat: 'Неверный формат файла',
    uploadFailed: 'Ошибка загрузки',
    processingFailed: 'Ошибка обработки',
    downloadReady: 'Ваш файл готов к скачиванию',
    filesExpiringSoon: 'Ваши файлы будут удалены через',
    dailyLimitReached: 'Достигнут дневной лимит',
    upgradeForMore: 'Перейдите на Premium для неограниченного доступа',
    loginRequired: 'Пожалуйста, войдите, чтобы продолжить',
    premiumRequired: 'Эта функция требует Premium',
  },

  // SEO
  seo: {
    title: 'Xeer Files - Бесплатные Онлайн-Инструменты PDF',
    description: 'Бесплатные онлайн-инструменты PDF для объединения, разделения, сжатия, конвертации, поворота, снятия защиты и добавления водяных знаков на PDF. Быстро, безопасно и просто в использовании.',
    keywords: 'PDF, объединить PDF, разделить PDF, сжать PDF, конвертировать PDF, онлайн инструменты PDF, бесплатный редактор PDF',
  },
};

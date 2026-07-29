import type { TranslationKeys } from './en';

export const ko: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: '회원님의 언어가 준비되었습니다. 단순한 번역이 아니라 회원님을 위해 만들어졌습니다.',
    continue: '계속하기',
  },

  // Navigation
  nav: {
    home: '홈',
    tools: '모든 도구',
    pricing: '요금제',
    help: '도움말',
    login: '로그인',
    signup: '회원가입',
    account: '계정',
    logout: '로그아웃',
  },

  // Hero Section (homepage)
  hero: {
    tagline: 'PDF 및 이미지용 무료 도구 {count}개',
    secure: '안전하고 비공개',
    instant: '즉시 처리',
    free: '100% 무료',
    pdfToolsTitle: 'PDF 도구',
    pdfToolsDesc: '병합, 분할, 압축, 변환 등',
    imageToolsTitle: '이미지 도구',
    imageToolsDesc: '압축, 크기 조정, 변환, 편집',
    toolsSuffix: '개 도구',
  },

  // Tools
  tools: {
    all: '모든 도구',
    organize: 'PDF 정리',
    optimize: 'PDF 최적화',
    convertTo: 'PDF로 변환',
    convertFrom: 'PDF에서 변환',
    edit: 'PDF 편집',
    security: 'PDF 보안',
    ai: '인공지능',
    popular: '인기 도구',
    viewAll: '모든 도구 보기',
  },

  // Tool names
  toolNames: {
    merge: 'PDF 병합',
    split: 'PDF 분할',
    compress: 'PDF 압축',
    organize: 'PDF 정리',
    rotate: 'PDF 회전',
    watermark: '워터마크 추가',
    pageNumbers: '페이지 번호 추가',
    protect: 'PDF 보호',
    unlock: 'PDF 잠금 해제',
    repair: 'PDF 복구',
    ocr: 'PDF OCR',
    compare: 'PDF 비교',
    sign: 'PDF 서명',
    edit: 'PDF 편집',
    crop: 'PDF 자르기',
    redact: 'PDF 정보 가리기',
    pdfToWord: 'PDF를 Word로',
    pdfToExcel: 'PDF를 Excel로',
    pdfToPowerpoint: 'PDF를 PowerPoint로',
    pdfToJpg: 'PDF를 JPG로',
    wordToPdf: 'Word를 PDF로',
    excelToPdf: 'Excel을 PDF로',
    powerpointToPdf: 'PowerPoint를 PDF로',
    jpgToPdf: 'JPG를 PDF로',
    htmlToPdf: 'HTML을 PDF로',
    summarize: 'PDF 요약',
    translate: 'PDF 번역',
    chat: 'PDF와 채팅',
    extractData: '데이터 추출',
  },

  // File Upload
  upload: {
    dropzone: '여기에 파일을 끌어다 놓으세요',
    or: '또는',
    browse: '파일 찾아보기',
    selectFiles: 'PDF 파일 선택',
    uploading: '업로드 중...',
    processing: '처리 중...',
    maxSize: '최대 파일 크기:',
    formats: '지원 형식:',
    addMore: '파일 추가',
    removeAll: '모두 제거',
  },

  // Processing
  process: {
    start: '처리 시작',
    processing: '처리 중...',
    done: '완료!',
    failed: '실패',
    download: '다운로드',
    downloadAll: '모두 다운로드',
    deleteNow: '지금 삭제',
    expiresIn: '만료까지 남은 시간:',
    expired: '만료됨',
    retry: '다시 시도',
  },

  // Options
  options: {
    quality: '품질',
    compression: '압축 수준',
    low: '낮음',
    medium: '보통',
    high: '높음',
    extreme: '최고',
    pages: '페이지',
    allPages: '모든 페이지',
    customRange: '사용자 지정 범위',
    position: '위치',
    font: '글꼴',
    fontSize: '글꼴 크기',
    color: '색상',
    opacity: '불투명도',
    rotation: '회전',
  },

  // Pricing
  pricing: {
    title: '요금제 선택',
    subtitle: 'Premium으로 더 많은 혜택을',
    free: '무료',
    premium: 'Premium',
    monthly: '월간',
    yearly: '연간',
    perMonth: '/월',
    perYear: '/년',
    save: '절약',
    mostPopular: '가장 인기',
    getStarted: '시작하기',
    goPremium: 'Premium 시작하기',
    currentPlan: '현재 요금제',
    features: '기능',
    limitations: '제한 사항',
  },

  // Redeem
  redeem: {
    title: '코드 사용하기',
    subtitle: '프리미엄 기능을 잠금 해제하려면 액세스 코드를 입력하세요',
    placeholder: '코드를 입력하세요',
    submit: '사용하기',
    success: '코드가 성공적으로 사용되었습니다!',
    error: '잘못되었거나 만료된 코드입니다',
    alreadyUsed: '이미 사용된 코드입니다',
  },

  // Account
  account: {
    title: '내 계정',
    profile: '프로필',
    subscription: '구독',
    usage: '사용량',
    settings: '설정',
    billing: '결제',
    plan: '현재 요금제',
    expiresOn: '만료일',
    neverExpires: '만료되지 않음',
    operations: '오늘의 작업',
    ocrOperations: '오늘의 OCR 작업',
    aiRequests: '오늘의 AI 요청',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: '쿠키를 사용합니다',
    description: '더 나은 경험 제공, 사이트 트래픽 분석 및 마케팅 목적으로 쿠키를 사용합니다. "모두 동의"를 클릭하면 쿠키 사용에 동의하는 것으로 간주됩니다.',
    learnMore: '자세히 알아보기',
    acceptAll: '모두 동의',
    decline: '거부',
    manage: '관리',
  },

  // Footer
  footer: {
    tagline: '모두를 위한 전문 PDF 도구. 빠르고 안전하며 사용하기 쉽습니다.',
    product: '제품',
    resources: '리소스',
    company: '회사',
    legal: '법적 정보',
    home: '홈',
    features: '기능',
    pricing: '요금제',
    tools: '도구',
    faq: '자주 묻는 질문',
    blog: '블로그',
    help: '도움말',
    about: '회사 소개',
    contact: '문의하기',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    cookies: '쿠키 정책',
    refund: '환불 정책',
    copyright: '모든 권리 보유.',
    madeWith: '제작:',
  },

  // Common
  common: {
    loading: '로딩 중...',
    error: '오류',
    success: '성공',
    cancel: '취소',
    confirm: '확인',
    save: '저장',
    delete: '삭제',
    edit: '편집',
    close: '닫기',
    back: '뒤로',
    next: '다음',
    previous: '이전',
    submit: '제출',
    search: '검색',
    filter: '필터',
    sort: '정렬',
    reset: '초기화',
    clear: '지우기',
    yes: '예',
    no: '아니오',
    ok: '확인',
  },

  // Messages
  messages: {
    fileTooLarge: '파일 크기가 제한을 초과했습니다',
    invalidFormat: '잘못된 파일 형식입니다',
    uploadFailed: '업로드 실패',
    processingFailed: '처리 실패',
    downloadReady: '파일 다운로드 준비가 완료되었습니다',
    filesExpiringSoon: '파일이 다음 시간 후 삭제됩니다:',
    dailyLimitReached: '일일 한도에 도달했습니다',
    upgradeForMore: '무제한 액세스를 위해 Premium으로 업그레이드하세요',
    loginRequired: '계속하려면 로그인하세요',
    premiumRequired: '이 기능은 Premium이 필요합니다',
  },

  // SEO
  seo: {
    title: 'Xeer Files - 무료 온라인 PDF 도구',
    description: 'PDF 병합, 분할, 압축, 변환, 회전, 잠금 해제 및 워터마크 추가를 위한 무료 온라인 PDF 도구. 빠르고 안전하며 사용하기 쉽습니다.',
    keywords: 'PDF, PDF 병합, PDF 분할, PDF 압축, PDF 변환, 온라인 PDF 도구, 무료 PDF 편집기',
  },
};

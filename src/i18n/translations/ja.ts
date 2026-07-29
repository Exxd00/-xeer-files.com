import type { TranslationKeys } from './en';

export const ja: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'あなたの言語の準備ができました。単なる翻訳ではなく、あなたのために作られています。',
    continue: '続ける',
  },

  // Navigation
  nav: {
    home: 'ホーム',
    tools: 'すべてのツール',
    pricing: '料金',
    help: 'ヘルプ',
    login: 'ログイン',
    signup: '新規登録',
    account: 'アカウント',
    logout: 'ログアウト',
  },

  // Hero Section (homepage)
  hero: {
    tagline: 'PDF・画像用の無料ツール{count}種',
    secure: '安全・プライベート',
    instant: '瞬時に処理',
    free: '完全無料',
    pdfToolsTitle: 'PDFツール',
    pdfToolsDesc: '結合、分割、圧縮、変換など',
    imageToolsTitle: '画像ツール',
    imageToolsDesc: '圧縮、リサイズ、変換、編集',
    toolsSuffix: '個のツール',
  },

  // Tools
  tools: {
    all: 'すべてのツール',
    organize: 'PDFを整理',
    optimize: 'PDFを最適化',
    convertTo: 'PDFに変換',
    convertFrom: 'PDFから変換',
    edit: 'PDFを編集',
    security: 'PDFセキュリティ',
    ai: '人工知能',
    popular: '人気のツール',
    viewAll: 'すべてのツールを見る',
  },

  // Tool names
  toolNames: {
    merge: 'PDFを結合',
    split: 'PDFを分割',
    compress: 'PDFを圧縮',
    organize: 'PDFを整理',
    rotate: 'PDFを回転',
    watermark: '透かしを追加',
    pageNumbers: 'ページ番号を追加',
    protect: 'PDFを保護',
    unlock: 'PDFのロック解除',
    repair: 'PDFを修復',
    ocr: 'PDF OCR',
    compare: 'PDFを比較',
    sign: 'PDFに署名',
    edit: 'PDFを編集',
    crop: 'PDFを切り抜き',
    redact: 'PDFの情報を非表示',
    pdfToWord: 'PDFからWord',
    pdfToExcel: 'PDFからExcel',
    pdfToPowerpoint: 'PDFからPowerPoint',
    pdfToJpg: 'PDFからJPG',
    wordToPdf: 'WordからPDF',
    excelToPdf: 'ExcelからPDF',
    powerpointToPdf: 'PowerPointからPDF',
    jpgToPdf: 'JPGからPDF',
    htmlToPdf: 'HTMLからPDF',
    summarize: 'PDFを要約',
    translate: 'PDFを翻訳',
    chat: 'PDFとチャット',
    extractData: 'データを抽出',
  },

  // File Upload
  upload: {
    dropzone: 'ここにファイルをドラッグ＆ドロップ',
    or: 'または',
    browse: 'ファイルを参照',
    selectFiles: 'PDFファイルを選択',
    uploading: 'アップロード中...',
    processing: '処理中...',
    maxSize: '最大ファイルサイズ：',
    formats: '対応形式：',
    addMore: 'ファイルを追加',
    removeAll: 'すべて削除',
  },

  // Processing
  process: {
    start: '処理を開始',
    processing: '処理中...',
    done: '完了！',
    failed: '失敗',
    download: 'ダウンロード',
    downloadAll: 'すべてダウンロード',
    deleteNow: '今すぐ削除',
    expiresIn: '有効期限まで',
    expired: '期限切れ',
    retry: '再試行',
  },

  // Options
  options: {
    quality: '品質',
    compression: '圧縮レベル',
    low: '低',
    medium: '中',
    high: '高',
    extreme: '最大',
    pages: 'ページ',
    allPages: 'すべてのページ',
    customRange: 'カスタム範囲',
    position: '位置',
    font: 'フォント',
    fontSize: 'フォントサイズ',
    color: '色',
    opacity: '不透明度',
    rotation: '回転',
  },

  // Pricing
  pricing: {
    title: 'プランを選択',
    subtitle: 'Premiumでもっと便利に',
    free: '無料',
    premium: 'Premium',
    monthly: '月払い',
    yearly: '年払い',
    perMonth: '/月',
    perYear: '/年',
    save: 'お得',
    mostPopular: '一番人気',
    getStarted: '始める',
    goPremium: 'Premiumにアップグレード',
    currentPlan: '現在のプラン',
    features: '機能',
    limitations: '制限事項',
  },

  // Redeem
  redeem: {
    title: 'コードを引き換える',
    subtitle: 'アクセスコードを入力してプレミアム機能をロック解除',
    placeholder: 'コードを入力',
    submit: '引き換える',
    success: 'コードが正常に引き換えられました！',
    error: 'コードが無効か期限切れです',
    alreadyUsed: 'このコードはすでに使用されています',
  },

  // Account
  account: {
    title: 'マイアカウント',
    profile: 'プロフィール',
    subscription: 'サブスクリプション',
    usage: '使用状況',
    settings: '設定',
    billing: 'お支払い',
    plan: '現在のプラン',
    expiresOn: '有効期限',
    neverExpires: '無期限',
    operations: '本日の操作回数',
    ocrOperations: '本日のOCR操作回数',
    aiRequests: '本日のAIリクエスト数',
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'Cookieを使用しています',
    description: '当サイトでは、体験の向上、サイトのトラフィック分析、マーケティングのためにCookieを使用しています。「同意する」をクリックすると、Cookieの使用に同意したことになります。',
    learnMore: '詳細を見る',
    acceptAll: 'すべて同意する',
    decline: '拒否する',
    manage: '管理する',
  },

  // Footer
  footer: {
    tagline: 'すべての人のためのプロフェッショナルなPDFツール。高速・安全・簡単操作。',
    product: '製品',
    resources: 'リソース',
    company: '会社概要',
    legal: '法的情報',
    home: 'ホーム',
    features: '機能',
    pricing: '料金',
    tools: 'ツール',
    faq: 'よくある質問',
    blog: 'ブログ',
    help: 'ヘルプ',
    about: '私たちについて',
    contact: 'お問い合わせ',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    cookies: 'Cookieポリシー',
    refund: '返金ポリシー',
    copyright: '無断複写・転載を禁じます。',
    madeWith: '制作',
  },

  // Common
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    cancel: 'キャンセル',
    confirm: '確認',
    save: '保存',
    delete: '削除',
    edit: '編集',
    close: '閉じる',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    submit: '送信',
    search: '検索',
    filter: 'フィルター',
    sort: '並べ替え',
    reset: 'リセット',
    clear: 'クリア',
    yes: 'はい',
    no: 'いいえ',
    ok: 'OK',
  },

  // Messages
  messages: {
    fileTooLarge: 'ファイルサイズが上限を超えています',
    invalidFormat: '無効なファイル形式です',
    uploadFailed: 'アップロードに失敗しました',
    processingFailed: '処理に失敗しました',
    downloadReady: 'ファイルのダウンロード準備ができました',
    filesExpiringSoon: 'ファイルは以下の時間後に削除されます：',
    dailyLimitReached: '本日の上限に達しました',
    upgradeForMore: '無制限にアクセスするにはPremiumにアップグレードしてください',
    loginRequired: '続行するにはログインしてください',
    premiumRequired: 'この機能にはPremiumが必要です',
  },

  // SEO
  seo: {
    title: 'Xeer Files - 無料オンラインPDFツール',
    description: 'PDFの結合、分割、圧縮、変換、回転、ロック解除、透かし追加ができる無料オンラインPDFツール。高速・安全・簡単操作。',
    keywords: 'PDF, PDF結合, PDF分割, PDF圧縮, PDF変換, オンラインPDFツール, 無料PDFエディタ',
  },
};

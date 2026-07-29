import type { TranslationKeys } from './en';

export const fr: TranslationKeys = {
  // Welcome Splash (shown once on first visit)
  welcome: {
    title: 'XEER FILES',
    message: 'Votre langue est prête. Pas juste une traduction - conçu pour vous.',
    continue: 'Continuer',
  },

  // Navigation
  nav: {
    home: 'Accueil',
    tools: 'Tous les Outils',
    pricing: 'Tarifs',
    help: 'Aide',
    login: 'Connexion',
    signup: "S'inscrire",
    account: 'Compte',
    logout: 'Déconnexion',
  },

  // Hero Section (homepage)
  hero: {
    tagline: '{count} Outils Gratuits pour PDF et Images',
    secure: 'Sécurisé et Privé',
    instant: 'Traitement Instantané',
    free: '100% Gratuit',
    pdfToolsTitle: 'Outils PDF',
    pdfToolsDesc: 'Fusionner, Diviser, Compresser, Convertir et Plus',
    imageToolsTitle: "Outils d'Image",
    imageToolsDesc: 'Compresser, Redimensionner, Convertir et Modifier',
    toolsSuffix: 'outils',
  },

  // Tools
  tools: {
    all: 'Tous les Outils',
    organize: 'Organiser le PDF',
    optimize: 'Optimiser le PDF',
    convertTo: 'Convertir en PDF',
    convertFrom: 'Convertir depuis PDF',
    edit: 'Modifier le PDF',
    security: 'Sécurité PDF',
    ai: 'Intelligence Artificielle',
    popular: 'Outils Populaires',
    viewAll: 'Voir Tous les Outils',
  },

  // Tool names
  toolNames: {
    merge: 'Fusionner PDF',
    split: 'Diviser PDF',
    compress: 'Compresser PDF',
    organize: 'Organiser PDF',
    rotate: 'Pivoter PDF',
    watermark: 'Ajouter un Filigrane',
    pageNumbers: 'Ajouter des Numéros de Page',
    protect: 'Protéger PDF',
    unlock: 'Déverrouiller PDF',
    repair: 'Réparer PDF',
    ocr: 'OCR PDF',
    compare: 'Comparer PDF',
    sign: 'Signer PDF',
    edit: 'Modifier PDF',
    crop: 'Rogner PDF',
    redact: 'Caviarder PDF',
    pdfToWord: 'PDF vers Word',
    pdfToExcel: 'PDF vers Excel',
    pdfToPowerpoint: 'PDF vers PowerPoint',
    pdfToJpg: 'PDF vers JPG',
    wordToPdf: 'Word vers PDF',
    excelToPdf: 'Excel vers PDF',
    powerpointToPdf: 'PowerPoint vers PDF',
    jpgToPdf: 'JPG vers PDF',
    htmlToPdf: 'HTML vers PDF',
    summarize: 'Résumer le PDF',
    translate: 'Traduire le PDF',
    chat: 'Discuter avec le PDF',
    extractData: 'Extraire des Données',
  },

  // File Upload
  upload: {
    dropzone: 'Glissez-déposez les fichiers ici',
    or: 'ou',
    browse: 'Parcourir les fichiers',
    selectFiles: 'Sélectionner des fichiers PDF',
    uploading: 'Téléversement...',
    processing: 'Traitement...',
    maxSize: 'Taille maximale :',
    formats: 'Formats pris en charge :',
    addMore: 'Ajouter plus de fichiers',
    removeAll: 'Tout supprimer',
  },

  // Processing
  process: {
    start: 'Traiter',
    processing: 'Traitement...',
    done: 'Terminé !',
    failed: 'Échoué',
    download: 'Télécharger',
    downloadAll: 'Tout Télécharger',
    deleteNow: 'Supprimer Maintenant',
    expiresIn: 'Expire dans',
    expired: 'Expiré',
    retry: 'Réessayer',
  },

  // Options
  options: {
    quality: 'Qualité',
    compression: 'Niveau de Compression',
    low: 'Faible',
    medium: 'Moyen',
    high: 'Élevé',
    extreme: 'Extrême',
    pages: 'Pages',
    allPages: 'Toutes les Pages',
    customRange: 'Plage Personnalisée',
    position: 'Position',
    font: 'Police',
    fontSize: 'Taille de Police',
    color: 'Couleur',
    opacity: 'Opacité',
    rotation: 'Rotation',
  },

  // Pricing
  pricing: {
    title: 'Choisissez votre forfait',
    subtitle: 'Obtenez plus avec Premium',
    free: 'Gratuit',
    premium: 'Premium',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    perMonth: '/mois',
    perYear: '/an',
    save: 'Économisez',
    mostPopular: 'Le Plus Populaire',
    getStarted: 'Commencer',
    goPremium: 'Passer à Premium',
    currentPlan: 'Forfait Actuel',
    features: 'Fonctionnalités',
    limitations: 'Limitations',
  },

  // Redeem
  redeem: {
    title: 'Utiliser un Code',
    subtitle: "Entrez votre code d'accès pour débloquer les fonctionnalités premium",
    placeholder: 'Entrez votre code',
    submit: 'Utiliser',
    success: 'Code utilisé avec succès !',
    error: 'Code invalide ou expiré',
    alreadyUsed: 'Ce code a déjà été utilisé',
  },

  // Account
  account: {
    title: 'Mon Compte',
    profile: 'Profil',
    subscription: 'Abonnement',
    usage: 'Utilisation',
    settings: 'Paramètres',
    billing: 'Facturation',
    plan: 'Forfait Actuel',
    expiresOn: 'Expire le',
    neverExpires: "N'expire jamais",
    operations: "Opérations aujourd'hui",
    ocrOperations: "Opérations OCR aujourd'hui",
    aiRequests: "Requêtes IA aujourd'hui",
  },

  // Cookie Consent Banner
  cookieConsent: {
    title: 'Nous utilisons des cookies',
    description: 'Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic du site et à des fins marketing. En cliquant sur "Accepter", vous consentez à notre utilisation des cookies.',
    learnMore: 'En savoir plus',
    acceptAll: 'Tout Accepter',
    decline: 'Refuser',
    manage: 'Gérer',
  },

  // Footer
  footer: {
    tagline: 'Outils PDF professionnels pour tous. Rapides, sûrs et faciles à utiliser.',
    product: 'Produit',
    resources: 'Ressources',
    company: 'Entreprise',
    legal: 'Mentions Légales',
    home: 'Accueil',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    tools: 'Outils',
    faq: 'FAQ',
    blog: 'Blog',
    help: 'Aide',
    about: 'À Propos',
    contact: 'Contact',
    privacy: 'Politique de Confidentialité',
    terms: "Conditions d'Utilisation",
    cookies: 'Politique de Cookies',
    refund: 'Politique de Remboursement',
    copyright: 'Tous droits réservés.',
    madeWith: 'Fait avec',
  },

  // Common
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    close: 'Fermer',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    search: 'Rechercher',
    filter: 'Filtrer',
    sort: 'Trier',
    reset: 'Réinitialiser',
    clear: 'Effacer',
    yes: 'Oui',
    no: 'Non',
    ok: 'OK',
  },

  // Messages
  messages: {
    fileTooLarge: 'La taille du fichier dépasse la limite',
    invalidFormat: 'Format de fichier invalide',
    uploadFailed: 'Échec du téléversement',
    processingFailed: 'Échec du traitement',
    downloadReady: 'Votre fichier est prêt à être téléchargé',
    filesExpiringSoon: 'Vos fichiers seront supprimés dans',
    dailyLimitReached: 'Limite quotidienne atteinte',
    upgradeForMore: 'Passez à Premium pour un accès illimité',
    loginRequired: 'Veuillez vous connecter pour continuer',
    premiumRequired: 'Cette fonctionnalité nécessite Premium',
  },

  // SEO
  seo: {
    title: 'Xeer Files - Outils PDF Gratuits en Ligne',
    description: 'Outils PDF gratuits en ligne pour fusionner, diviser, compresser, convertir, faire pivoter, déverrouiller et filigraner des PDF. Rapide, sécurisé et facile à utiliser.',
    keywords: 'PDF, fusionner PDF, diviser PDF, compresser PDF, convertir PDF, outils PDF en ligne, éditeur PDF gratuit',
  },
};

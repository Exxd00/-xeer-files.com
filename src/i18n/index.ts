import { en } from './translations/en';
import { ar } from './translations/ar';
import { es } from './translations/es';
import { fr } from './translations/fr';
import { de } from './translations/de';
import { it } from './translations/it';
import { pt } from './translations/pt';
import { ru } from './translations/ru';
import { zh } from './translations/zh';
import { ja } from './translations/ja';
import { ko } from './translations/ko';
import { tr } from './translations/tr';
import { nl } from './translations/nl';
import { pl } from './translations/pl';
import { hi } from './translations/hi';
import type { Locale } from '@/types';

export const translations: Record<string, typeof en> = {
  en,
  ar,
  es,
  fr,
  de,
  it,
  pt,
  ru,
  zh,
  ja,
  ko,
  tr,
  nl,
  pl,
  hi,
};

export const getTranslations = (locale: Locale) => {
  return translations[locale] || translations.en;
};

export type { TranslationKeys } from './translations/en';

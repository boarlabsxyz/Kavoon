import { Language } from 'src/types/language';

type i18nType = {
  defaultLocale: Language;
  locales: Language[];
};

export const i18n: i18nType = {
  defaultLocale: 'en',
  locales: ['en', 'uk', 'pl'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export type Language = 'en' | 'pl' | 'uk';
export type LangCode = 'EN' | 'PL' | 'UA';

export interface LanguageSwitcherType {
  src: string;
  name: string;
  langCode: LangCode;
  locale: Language;
}

import { languages } from 'src/data/routes';
import { Language, LanguageSwitcherType } from 'src/types/language';

function getActiveLocale(
  testedLocale: Language
): LanguageSwitcherType | undefined {
  return languages.find(({ locale }) => locale === testedLocale);
}
export default getActiveLocale;

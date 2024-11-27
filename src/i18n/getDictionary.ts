import 'server-only';
import { I18N, metaI18N } from 'src/types/i18n.type';
import { Language } from 'src/types/language';

const getDictionary = async (
  language: Language,
  pageName: string
): Promise<I18N | metaI18N> => {
  try {
    const i18n = (await import(`src/i18n/server/${language}/${pageName}`))
      .default;
    return i18n;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `Error loading dictionary for language: ${language} and pageName: ${pageName}`,
      error
    );
    throw error;
  }
};

export default getDictionary;

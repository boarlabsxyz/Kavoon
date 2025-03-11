import AboutUs from 'src/components/aboutUsPage/aboutUs/AboutUs';

import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';

import { Language } from 'src/types/language';

type Props = {
  params: { lang: Language };
};

async function AboutUsPage({ params: { lang } }: Props) {
  try {
    const i18n = (await getDictionary(lang, 'aboutUs')) as I18N;
    return <AboutUs dictionary={i18n} />;
  } catch (error) {
    return <div>Error loading policy page.</div>;
  }
}

export default AboutUsPage;

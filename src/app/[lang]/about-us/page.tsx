import AboutUs from 'src/components/aboutUsPage/aboutUs/AboutUs';
import { Metadata } from 'next';

import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';

import { Language } from 'src/types/language';
import brandingConst from 'src/data/brandingConst';

type Props = {
  params: { lang: Language };
};

export function generateMetadata({ params }: Props): Metadata {
  const { siteUrl } = brandingConst;
  const { lang } = params;
  const path = '/about-us';

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: {
        en: `${siteUrl}/en${path}`,
        uk: `${siteUrl}/uk${path}`,
        pl: `${siteUrl}/pl${path}`,
      },
    },
  };
}

async function AboutUsPage({ params: { lang } }: Props) {
  try {
    const i18n = (await getDictionary(lang, 'aboutUs')) as I18N;
    return <AboutUs dictionary={i18n} />;
  } catch (error) {
    return <div>Error loading About Us page.</div>;
  }
}

export default AboutUsPage;

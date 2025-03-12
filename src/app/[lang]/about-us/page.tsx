import AboutUs from 'src/components/aboutUsPage/aboutUs';
import { Metadata } from 'next';

import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';

import { Language } from 'src/types/language';

type Props = {
  params: { lang: Language };
};

export function generateMetadata({ params }: Props): Metadata {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang } = params;
  const path = '/about-us';

  return {
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        uk: `${baseUrl}/uk${path}`,
        pl: `${baseUrl}/pl${path}`,
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

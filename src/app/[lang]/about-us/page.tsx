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
    console.error('Failed to load About Us page:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <h2 className="text-xl font-semibold mb-2">
          Error loading About Us page
        </h2>
        <p className="text-gray-600">
          Please try refreshing the page or contact support if the problem
          persists.
        </p>
      </div>
    );
  }
}

export default AboutUsPage;

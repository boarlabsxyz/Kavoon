import type { Metadata } from 'next';

import Policy from 'src/components/policyPage/policy';

import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';
import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';
import brandingConst from 'src/data/brandingConst';

type Props = {
  params: { lang: Language };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { siteUrl } = brandingConst;
  const { lang } = params;
  const path = '/policy';

  return {
    title: `${translate('SiteName', lang)} - ${translate('PolicyTitle', lang)}`,
    description: `${translate('PolicyMetaDescription', lang)}`,
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: {
        en: `${siteUrl}/en${path}`,
        uk: `${siteUrl}/uk${path}`,
        pl: `${siteUrl}/pl${path}`,
      },
    },
    openGraph: {
      title: `${translate('SiteName', lang)} - ${translate('PolicyTitle', lang)}`,
      description: translate('PolicyMetaDescription', lang),
      url: `${siteUrl}/${lang}${path}`,
      type: 'website',
      siteName: translate('SiteName', lang),
      locale: 'uk-UA',
      alternateLocale: ['en-US', 'pl-PL'],
    },
  };
}

async function PolicyPage({ params }: Props) {
  const { lang } = params;

  try {
    const i18n = (await getDictionary(lang, 'policy')) as I18N;
    return <Policy language={lang} policy={i18n} />;
  } catch (error) {
    console.error('Failed to load Policy page:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <h2 className="text-xl font-semibold mb-2">
          Error loading Policy page
        </h2>
        <p className="text-gray-600">
          Please try refreshing the page or contact support if the problem
          persists.
        </p>
      </div>
    );
  }
}

export default PolicyPage;

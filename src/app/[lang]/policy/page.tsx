import type { Metadata } from 'next';

import Policy from 'src/components/policyPage/policy';

import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';
import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';

type Props = {
  params: { lang: Language };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang } = params;
  const path = '/policy';

  return {
    title: `${translate('SiteName', lang)} - ${translate('PolicyTitle', lang)}`,
    description: `${translate('PolicyMetaDescription', lang)}`,
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        uk: `${baseUrl}/uk${path}`,
        pl: `${baseUrl}/pl${path}`,
      },
    },
    openGraph: {
      title: `${translate('SiteName', lang)} - ${translate('PolicyTitle', lang)}`,
      description: translate('PolicyMetaDescription', lang),
      url: `${baseUrl}/${lang}${path}`,
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
    return <div>Error loading policy page.</div>;
  }
}

export default PolicyPage;

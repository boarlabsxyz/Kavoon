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
    return <div>Error loading policy page.</div>;
  }
}

export default PolicyPage;

import { notFound } from 'next/navigation';
import { NextPage, Metadata } from 'next';

import brandingConst from 'src/data/brandingConst';
import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

type Props = {
  params: { lang: Language; productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const { siteUrl } = brandingConst;

  return {
    title: translate('Page404', lang),
    description: translate('PageNotFound', lang),
    openGraph: {
      images: '/img/404/oops.svg',
      url: `${brandingConst.siteUrl}/${lang}`,
      type: 'website',
      siteName: `${translate('EquipForLightTravel', lang)}`,
      locale: 'uk-UA',
      alternateLocale: ['en-US', 'pl-PL'],
    },
  };
}

export default function NotFoundDummy(): NextPage {
  notFound();
}

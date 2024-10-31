import Advantages from 'src/components/homePage/advantages';
import Hero from 'src/components/homePage/hero';
import ProductsSection from 'src/components/homePage/productsSection';
import ReviewsSection from 'src/components/homePage/reviewsSection';

import translate from 'src/i18n/lang';
import brandingConst from 'src/data/brandingConst';

import { Language } from 'src/types/language';
import type { Metadata } from 'next';

type Props = {
  params: { lang: Language };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const { SiteName, siteUrl } = brandingConst;

  const titleChunk1 = translate('MenuItemShop', lang);
  const titleChunk2 = translate('SiteNameExtended', lang);
  return {
    title: `${titleChunk1} - ${titleChunk2}`,
    description: `${SiteName}. ${translate('ComfortableJourney', lang)}`,
    openGraph: {
      title: `${SiteName}. ${translate('HomeMetaTitle', lang)}`,
      images: `${siteUrl}/meta/hamster_1080x1080@1x.png`,
      url: `${siteUrl}/${lang}`,
      type: 'website',
      siteName: `${translate('EquipForLightTravel', lang)}`,
      locale: 'uk-UA',
      alternateLocale: ['en-US', 'pl-PL'],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = params;

  return (
    <>
      <Hero lang={lang} />
      <Advantages lang={lang} />
      <ProductsSection language={lang} />
      <ReviewsSection language={lang} />
    </>
  );
}

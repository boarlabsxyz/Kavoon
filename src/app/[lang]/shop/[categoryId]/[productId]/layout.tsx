import React from 'react';

import type { Metadata } from 'next';

import brandingConst from 'src/data/brandingConst';
import Products from 'src/data/data/products';
import translate from 'src/i18n/lang';
import getDictionary from 'src/i18n/getDictionary';
import { Language } from 'src/types/language';
import { metaI18N } from 'src/types/i18n.type';

type ProductPageLayoutProps = {
  children: React.ReactNode;
  additionalThings: React.ReactNode;
  info: React.ReactNode;
  reviews: React.ReactNode;
  seeMore: React.ReactNode;
  gallery: React.ReactNode;
};

type Props = {
  params: { lang: Language; productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, productId } = params;
  const { siteUrl } = brandingConst;

  const data = (await getDictionary(lang, 'meta')) as metaI18N;
  const { title, description } = data[productId];

  return {
    title,
    description,
    openGraph: {
      images: `${siteUrl}/products/${productId}/${productId}_1080x1080@1x.png`,
      url: `${siteUrl}/${lang}`,
      type: 'website',
      siteName: `${translate('EquipForLightTravel', lang)}`,
      locale: 'uk-UA',
      alternateLocale: ['en-US', 'pl-PL'],
    },
  };
}

export async function generateStaticParams() {
  const products = Products();

  const ids = products.map((product) => ({ productId: product.id }));

  return ids;
}

export const dynamicParams = false;

function ProductPageLayout({
  children,
  additionalThings,
  info,
  reviews,
  seeMore,
  gallery,
}: ProductPageLayoutProps) {
  return (
    <>
      {children}
      {info}
      {reviews}
      {additionalThings}
      {gallery}
      {seeMore}
    </>
  );
}

export default ProductPageLayout;

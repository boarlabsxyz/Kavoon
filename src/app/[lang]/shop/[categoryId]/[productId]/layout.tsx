import React from 'react';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import brandingConst from 'src/data/brandingConst';
import Products from 'src/data/data/products';
import translate from 'src/i18n/lang';
import getDictionary from 'src/i18n/getDictionary';
import { Language } from 'src/types/language';
import { I18N, metaI18N } from 'src/types/i18n.type';

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

  let productMeta: I18N;
  let title = 'Product Not Found';
  let description = 'This product does not exist.';
  try {
    const data = (await getDictionary(lang, 'meta')) as metaI18N;
    productMeta = data?.[productId];
    title = productMeta.title;
    description = productMeta.description;
  } catch (error) {
    notFound();
  }

  return {
    title,
    description,
    openGraph: {
      images: productMeta
        ? `${siteUrl}/products/${productId}/${productId}_1080x1080@1x.png`
        : null,
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

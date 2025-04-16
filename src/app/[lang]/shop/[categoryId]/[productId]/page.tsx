import BreadcrumbsWithCart from 'src/components/productPage/breadcrumbsWithCart';
import ProductDetailsSection from 'src/components/productPage/productDetailsSection';

import { Metadata } from 'next';

import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';
import brandingConst from 'src/data/brandingConst';

type ProductPageProps = {
  params: { categoryId: Category; productId: string; lang: Language };
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { siteUrl } = brandingConst;
  const { lang, categoryId, productId } = params;

  const categoryPath = categoryId ? `/shop/${categoryId}` : 'shop';
  const productPath = productId ? `/${productId}` : '';

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}${categoryPath}${productPath}`,
      languages: {
        en: `${siteUrl}/en${categoryPath}${productPath}`,
        uk: `${siteUrl}/uk${categoryPath}${productPath}`,
        pl: `${siteUrl}/pl${categoryPath}${productPath}`,
      },
    },
  };
}

function ProductPage({ params }: ProductPageProps) {
  const { productId } = params;

  return (
    <div data-cy="product-page">
      <BreadcrumbsWithCart productId={productId} />
      <ProductDetailsSection productId={productId} />
    </div>
  );
}

export default ProductPage;

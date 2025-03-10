import BreadcrumbsWithCart from 'src/components/productPage/breadcrumbsWithCart';
import ProductDetailsSection from 'src/components/productPage/productDetailsSection';

import { Metadata } from 'next';

import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';

type ProductPageProps = {
  params: { categoryId: Category; productId: string; lang: Language };
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang, categoryId, productId } = params;

  return {
    // title: `Продукт ${productId} | Категорія ${categoryId}`,
    alternates: {
      canonical: `${baseUrl}/${lang}/shop/${categoryId}/${productId}`,

      languages: {
        en: `${baseUrl}/en/shop/${categoryId}/${productId}`,
        uk: `${baseUrl}/uk/shop/${categoryId}/${productId}`,
        pl: `${baseUrl}/pl/shop/${categoryId}/${productId}`,
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

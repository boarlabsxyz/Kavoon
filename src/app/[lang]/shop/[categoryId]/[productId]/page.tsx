import BreadcrumbsWithCart from 'src/components/productPage/breadcrumbsWithCart';
import ProductDetailsSection from 'src/components/productPage/productDetailsSection';

import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';

type ProductPageProps = {
  params: { categoryId: Category; productId: string; lang: Language };
};

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

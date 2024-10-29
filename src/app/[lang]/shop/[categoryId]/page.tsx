import ProductsReviewsSection from 'src/components/shopPage/productsReviewsSection';

import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';

type CategoryPageProps = {
  params: { categoryId: Category; lang: Language };
};

function CategoryPage({ params: { lang, categoryId } }: CategoryPageProps) {
  return (
    <>
      <CategoryProductsSection categoryId={categoryId} lang={lang} />
      <ProductsReviewsSection language={lang} categoryId={categoryId} />
    </>
  );
}

export default CategoryPage;

import Container from 'src/components/common/container';
import PureProductCategories from 'src/components/categoryPage/pureProductCategories';
import ProductsState from 'src/components/categoryPage/productState';
import FilterSubsection from 'src/components/categoryPage/filterSubsection';

import { PRODUCT_CATEGORIES, Category } from 'src/data/constants';
import { Language } from 'src/types/language';

type CategoryPageProps = {
  categoryId: Category;
  lang: Language;
};

function CategoryProductsSection({ lang, categoryId }: CategoryPageProps) {
  return (
    <Container>
      <ProductsState language={lang} />
      <PureProductCategories
        categories={PRODUCT_CATEGORIES}
        activeCategory={categoryId}
        language={lang}
      />
      <FilterSubsection categoryId={categoryId} lang={lang} />
    </Container>
  );
}

export default CategoryProductsSection;

import Container from 'src/components/common/container';
import ProductsState from 'src/components/categoryPage/productState';
import FilteringAndSortingSection from 'src/components/categoryPage/filteringAndSortingSection';

import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';

type CategoryPageProps = {
  categoryId: Category;
  lang: Language;
};

function CategoryProductsSection({ lang, categoryId }: CategoryPageProps) {
  return (
    <Container>
      <ProductsState language={lang} />
      <FilteringAndSortingSection categoryId={categoryId} lang={lang} />
    </Container>
  );
}

export default CategoryProductsSection;

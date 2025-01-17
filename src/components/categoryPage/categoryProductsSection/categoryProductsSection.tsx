import Container from 'src/components/common/container';
import ProductsState from 'src/components/categoryPage/productState';
import FilteringAndSortingSuction from 'src/components/categoryPage/filteringAndSortingSection';

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
      <FilteringAndSortingSuction categoryId={categoryId} lang={lang} />
    </Container>
  );
}

export default CategoryProductsSection;

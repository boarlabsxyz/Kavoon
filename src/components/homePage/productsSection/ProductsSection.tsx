'use client';

import Container from 'src/components/common/container';
import CategorySection from 'src/components/homePage/categorySection';

import vmFactory from 'src/data/viewModels/shopListVM';
import { PRODUCT_CATEGORIES } from 'src/data/constants';

import { Language } from 'src/types/language';

import st from './ProductsSection.module.css';

type Props = {
  language: Language;
};

function ProductsSection({ language }: Props) {
  const vm = vmFactory();

  return (
    <section className={st.section}>
      <Container>
        <div className={st.content}>
          {PRODUCT_CATEGORIES.map((category) => (
            <CategorySection
              key={category}
              category={category}
              language={language}
              vm={vm.productsListVM.filterAndLimitByCategory(category)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductsSection;

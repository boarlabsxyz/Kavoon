import PageTitle from 'src/components/categoryPage/pageTitle';

import { Language } from 'src/types/language';

import st from 'src/components/homePage/productsSection/ProductsSection.module.css';

type ProductsStateProps = {
  language: Language;
};

function ProductsState({ language }: ProductsStateProps) {
  return (
    <section className={st.section}>
      <PageTitle language={language} />
    </section>
  );
}

export default ProductsState;

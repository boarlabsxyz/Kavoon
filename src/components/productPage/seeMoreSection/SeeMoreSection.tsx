import Container from 'src/components/common/container';
import ProductCard from 'src/components/common/productCard';

import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './SeeMoreSection.module.css';

type Props = {
  vm: ProductListItemVM[];
  language: Language;
};

function SeeMoreSection({ vm, language }: Props) {
  vm = JSON.parse(JSON.stringify(vm));

  return (
    <section className={st.section}>
      <Container>
        <h2 className={st.title}>{lang('LetsWatchMore', language)}</h2>
        <div className={st.wrapper}>
          {vm.map((productListItem) => (
            <div className={st.cardWrapper} key={productListItem.id}>
              <ProductCard vm={productListItem} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SeeMoreSection;

import PlacingOrderDetails from './PlacingOrderDetails';

import Product from 'src/types/product';
import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CHEVRONS,
} from 'src/data/constants';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './PlacingOrder.module.css';

type Props = {
  language: Language;
  product: Product;
};

function PlacingOrder({ language, product }: Props) {
  let content;
  if (product.subcategory === SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts) {
    content = 'PlacingOrderForMounts';
  } else if (product.category === IN_STOCK) {
    content = 'PlacingOrderInStockDetails';
  } else if (product.category === CHEVRONS) {
    content = 'PlacingOrderForChevron';
  } else {
    content = 'PlacingOrderDetails';
  }

  return (
    <section className={st.section}>
      <h2 className={st.title}>{lang('PlacingOrder', language)}</h2>
      <PlacingOrderDetails text={lang(content, language)} />
    </section>
  );
}

export default PlacingOrder;

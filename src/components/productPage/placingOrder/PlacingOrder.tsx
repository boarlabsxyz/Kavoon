import { FC } from 'react';
import PlacingOrderDetails from './PlacingOrderDetails';
import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CHEVRONS,
  BICYCLE_EQUIPMENT,
} from 'src/data/constants';
import Product from 'src/types/product';
import lang from 'src/i18n/lang';
import styles from './PlacingOrder.module.css';

type Props = {
  language: string;
  product: Product;
};

const PlacingOrder: FC<Props> = ({ language, product }) => {
  let content = 'PlacingOrderDetails';

  if (product.category === CHEVRONS) {
    content = 'PlacingOrderForChevron';
  } else if (product.category === IN_STOCK) {
    content = 'PlacingOrderInStockDetails';
  } else if (
    product.category === BICYCLE_EQUIPMENT &&
    product.subcategory === SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts
  ) {
    content = 'PlacingOrderForMounts';
  }

  return (
    <section className={styles.section} data-testid="placing-order-section">
      <h2 className={styles.title}>{lang('PlacingOrder', language)}</h2>
      <PlacingOrderDetails text={lang(content, language)} />
    </section>
  );
};

export default PlacingOrder;

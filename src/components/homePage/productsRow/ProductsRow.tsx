import { Observable } from 'rxjs';

import ProductCard from 'src/components/common/productCard';

import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import useRx from 'src/hooks/useRx';

import st from './ProductsRow.module.css';

type Props = {
  vm: Observable<ProductListItemVM[]>;
};

function ProductsRow({ vm }: Props) {
  const data = useRx(vm);

  return (
    <div className={st.wrapper}>
      {data.map((product) => (
        <div key={product.id} className={st.cardWrapper}>
          <ProductCard vm={product} key={product.id} />
        </div>
      ))}
    </div>
  );
}

export default ProductsRow;

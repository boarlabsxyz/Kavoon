import { Observable } from 'rxjs';

import useRx from 'src/hooks/useRx';

import st from './CartItemCount.module.css';

type Props = {
  count: Observable<number>;
};

function CartTotalItems({ count }: Props) {
  const cartTotalItems = useRx(count);

  const areItemsInCart = !!cartTotalItems && cartTotalItems > 0;

  const render = areItemsInCart ? (
    <p className={st.totalItems}>{cartTotalItems}</p>
  ) : null;
  return render;
}

export default CartTotalItems;

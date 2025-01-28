import CartItemCount from 'src/components/common/cartItemCount';

import CartStatusVM from 'src/data/viewModels/cart/cartStatusVM';
import { Language } from 'src/types/language';

import st from './CartStatus.module.css';

type Props = {
  language: Language;
};

function CartStatus({ language }: Props) {
  return (
    <div className={st.wrapper}>
      <CartItemCount vm={new CartStatusVM()} language={language} />
    </div>
  );
}

export default CartStatus;

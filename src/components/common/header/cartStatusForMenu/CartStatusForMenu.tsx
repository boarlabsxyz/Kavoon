import CartItemCount from 'src/components/common/cartItemCount';

import lang from 'src/i18n/lang';
import CartStatusVM from 'src/data/viewModels/cart/cartStatusVM';
import { Language } from 'src/types/language';

import st from 'src/components/common/header/Navigation/Navigation.module.css';

type Props = {
  language: Language;
};

function CartStatusForMenu({ language }: Props) {
  return (
    <div className={st.cartStatus}>
      <span className={st.cartStatusText}>
        {lang('AddedProducts2', language)}
      </span>
      <CartItemCount vm={new CartStatusVM()} language={language} />
    </div>
  );
}

export default CartStatusForMenu;

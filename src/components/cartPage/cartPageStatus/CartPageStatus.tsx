'use client';

import CartStatus from 'src/components/common/cartStatus';
import BreadcrumbsNav from 'src/components/common/breadcrumbs';

import cartPageStatusVM from 'src/data/viewModels/cart/CartPageStatusVM';
import { Language } from 'src/types/language';

import st from './CartPageStatus.module.css';

type Props = {
  language: Language;
};

function CartPageStatus({ language }: Props) {
  const vm = new cartPageStatusVM();

  return (
    <div className={st.wrapper}>
      <BreadcrumbsNav vm={vm.breadcrumbsNavVM} language={language} />
      <CartStatus language={language} />
    </div>
  );
}

export default CartPageStatus;

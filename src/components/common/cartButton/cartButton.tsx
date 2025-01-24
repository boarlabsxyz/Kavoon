'use client';
import CartItemCount from 'src/components/common/cartItemCount';

import CartStatusVM from 'src/data/viewModels/cart/cartStatusVM';
import { Language } from 'src/types/language';

import st from './cartButton.module.css';
import { usePathname } from 'next/navigation';
import { getPathWithoutLocale } from 'src/helpers/getPathWithoutLocale';

type Props = {
  language: Language;
};

function CartButton({ language }: Props) {
  const pathname = usePathname();
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const pathSegments = pathWithoutLocale.split('/');
  const isCartPage = pathSegments.at(-1) === 'cart';

  if (isCartPage) {
    return null;
  }

  return (
    <div className={st.wrapper} data-cy="link-to-cart-page-from-button">
      <CartItemCount vm={new CartStatusVM()} language={language} />
    </div>
  );
}

export default CartButton;

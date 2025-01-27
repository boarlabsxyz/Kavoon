'use client';
import CartItemCount from 'src/components/common/cartItemCount';

import CartStatusVM from 'src/data/viewModels/cart/cartStatusVM';
import { Language } from 'src/types/language';

import st from './cartButton.module.css';
import { usePathname } from 'next/navigation';
import { getPathWithoutLocale } from 'src/helpers/getPathWithoutLocale';

type Props = {
  readonly language: Language;
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
    <button
      className={st.wrapper}
      data-cy="link-to-cart-page-from-button"
      role="button"
      aria-label="Shopping cart"
    >
      <CartItemCount vm={new CartStatusVM()} language={language} />
    </button>
  );
}

export default CartButton;

import Link from 'next/link';

import { Observable } from 'rxjs';

import CartTotalItems from 'src/components/common/cartItemCount/CartTotalItems';

import ShopIcon from 'src/icons/shopIcon';
import { Language } from 'src/types/language';

import st from './CartItemCount.module.css';

type Props = {
  vm: {
    count: Observable<number>;
    href: string;
  };
  language: Language;
};

function CartItemCount({ vm: { count, href }, language }: Props) {
  return (
    <Link
      href={`/${language}${href}`}
      className={st.cartLink}
      aria-label="link-to-cart-page"
      data-cy="cart-link"
      prefetch={false}
    >
      <ShopIcon width="24" height="25" />
      <CartTotalItems count={count} />
    </Link>
  );
}

export default CartItemCount;

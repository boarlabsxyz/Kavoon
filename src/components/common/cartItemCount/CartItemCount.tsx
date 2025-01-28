import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Observable } from 'rxjs';

import CartIcon from 'src/icons/cartIcon';
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
  const CartTotalItems = dynamic(
    () => import('src/components/common/cartItemCount/CartTotalItems'),
    {
      ssr: false,
    }
  );

  return (
    <Link
      href={`/${language}${href}`}
      className={st.cartLink}
      aria-label="link-to-cart-page"
      prefetch={false}
    >
      <CartIcon width="24" height="25" />
      <CartTotalItems count={count} />
    </Link>
  );
}

export default CartItemCount;

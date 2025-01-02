import dynamic from 'next/dynamic';
import { Language } from 'src/types/language';

const StatusSection = dynamic(
  () => import('src/components/cartPage/statusSection'),
  {
    ssr: false,
  }
);
const OrderDetailsSection = dynamic(
  () => import('src/components/cartPage/orderDetailsSection'),
  {
    ssr: false,
  }
);

type Props = {
  params: { lang: Language };
};

function CartPage({ params }: Props) {
  const { lang } = params;
  return (
    <>
      <StatusSection language={lang} />
      <OrderDetailsSection language={lang} />
    </>
  );
}

export default CartPage;

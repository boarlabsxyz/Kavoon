import StatusSection from 'src/components/cartPage/statusSection';
import OrderDetailsSection from 'src/components/cartPage/orderDetailsSection';

import { Language } from 'src/types/language';

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

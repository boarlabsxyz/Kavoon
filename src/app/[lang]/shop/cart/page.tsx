import { Metadata } from 'next';
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

export function generateMetadata({ params }: Props): Metadata {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang } = params;
  const path = '/shop/cart';

  return {
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        uk: `${baseUrl}/uk${path}`,
        pl: `${baseUrl}/pl${path}`,
      },
    },
  };
}

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

import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import brandingConst from 'src/data/brandingConst';
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
  const { siteUrl } = brandingConst;
  const { lang } = params;
  const path = '/shop/cart';

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: {
        en: `${siteUrl}/en${path}`,
        uk: `${siteUrl}/uk${path}`,
        pl: `${siteUrl}/pl${path}`,
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

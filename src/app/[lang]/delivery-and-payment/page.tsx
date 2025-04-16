import DeliveryAndPayment from 'src/components/deliveryPaymentPage/deliveryAndPayment';
import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';
import { Metadata } from 'next';

import { Language } from 'src/types/language';
import brandingConst from 'src/data/brandingConst';

type Props = {
  params: { lang: Language };
};

export function generateMetadata({ params }: Props): Metadata {
  const { siteUrl } = brandingConst;
  const { lang } = params;
  const path = '/delivery-and-payment';

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

async function DeliveryAndPaymentPage({ params: { lang } }: Props) {
  try {
    const i18n = (await getDictionary(lang, 'deliveryAndPayment')) as I18N;
    return <DeliveryAndPayment dictionary={i18n} />;
  } catch (error) {
    console.error('Failed to load Delivery and Payment page:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <h2 className="text-xl font-semibold mb-2">
          Error loading Delivery and Payment page
        </h2>
        <p className="text-gray-600">
          Please try refreshing the page or contact support if the problem
          persists.
        </p>
      </div>
    );
  }
}

export default DeliveryAndPaymentPage;

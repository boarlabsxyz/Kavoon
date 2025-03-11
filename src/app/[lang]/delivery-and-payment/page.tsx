import DeliveryAndPayment from 'src/components/deliveryPaymentPage/deliveryAndPayment';
import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';
import { Metadata } from 'next';

import { Language } from 'src/types/language';

type Props = {
  params: { lang: Language };
};

export function generateMetadata({ params }: Props): Metadata {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang } = params;
  const path = '/delivery-and-payment';

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

async function DeliveryAndPaymentPage({ params: { lang } }: Props) {
  try {
    const i18n = (await getDictionary(lang, 'deliveryAndPayment')) as I18N;
    return <DeliveryAndPayment dictionary={i18n} />;
  } catch (error) {
    return <div>Error loading Delivery and Payment page.</div>;
  }
}

export default DeliveryAndPaymentPage;

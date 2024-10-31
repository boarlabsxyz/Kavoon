import DeliveryAndPayment from 'src/components/deliveryPaymentPage/deliveryAndPayment';
import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';

import { Language } from 'src/types/language';

type Props = {
  params: { lang: Language };
};

async function DeliveryAndPaymentPage({ params: { lang } }: Props) {
  try {
    const i18n = (await getDictionary(lang, 'deliveryAndPayment')) as I18N;
    return <DeliveryAndPayment dictionary={i18n} />;
  } catch (error) {
    return <div>Error loading policy page.</div>;
  }
}

export default DeliveryAndPaymentPage;

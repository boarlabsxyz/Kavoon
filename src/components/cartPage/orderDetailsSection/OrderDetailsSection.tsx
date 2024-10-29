import Container from 'src/components/common/container';

import CartInfoAndOrderSection from 'src/components/cartPage/cartInfoAndOrderSection';
import ServiceConditions from 'src/components/cartPage/serviceConditions';

import { Language } from 'src/types/language';

type Props = {
  language: Language;
};

function OrderDetailsSection({ language }: Props) {
  return (
    <Container>
      <CartInfoAndOrderSection language={language}>
        <ServiceConditions section="Delivery" language={language} />
        <ServiceConditions section="Payment" language={language} />
      </CartInfoAndOrderSection>
    </Container>
  );
}

export default OrderDetailsSection;

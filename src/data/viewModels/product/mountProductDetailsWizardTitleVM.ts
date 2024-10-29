import { of } from 'rxjs';

import { Currencies } from 'src/types/product';

function mountProductDetailsWizardVM(name: string, price: Currencies) {
  const priceUAH = of(price.UAH);
  const priceEURO = of(price.EUR);

  return {
    name,
    priceEURO,
    priceUAH,
  };
}

export default mountProductDetailsWizardVM;

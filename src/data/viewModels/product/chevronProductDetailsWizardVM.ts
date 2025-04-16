import mountProductDetailsWizardTitleVM from './mountProductDetailsWizardTitleVM';
import mountProductDetailsOrderBtnVM from './mountProductDetailsOrderBtnVM';
import Product, { Currencies } from 'src/types/product';

function chevronProductDetailsWizardVM(product: Product) {
  const { name } = product;
  const price = product.price as Currencies;

  return {
    productDetailsWizardPickerVM: null,
    productDetailsWizardTitleVM: mountProductDetailsWizardTitleVM(name, price),
    productDetailsOrderBtnVM: mountProductDetailsOrderBtnVM(product),
    subcategory: product.subcategory,
  };
}

export default chevronProductDetailsWizardVM;

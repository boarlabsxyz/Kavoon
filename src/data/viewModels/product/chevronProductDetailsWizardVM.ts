import mountProductDetailsWizardTitleVM from './mountProductDetailsWizardTitleVM';
import mountProductDetailsOrderBtnVM from './mountProductDetailsOrderBtnVM';

function chevronProductDetailsWizardVM(product: any) {
  const { name, price } = product;

  return {
    productDetailsWizardPickerVM: null,
    productDetailsWizardTitleVM: mountProductDetailsWizardTitleVM(name, price),
    productDetailsOrderBtnVM: mountProductDetailsOrderBtnVM(product),
    subcategory: product.subcategory,
  };
}

export default chevronProductDetailsWizardVM;

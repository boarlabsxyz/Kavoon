import { map } from 'rxjs';

const productDetailsWizardTitleVM = ({ name, fabric$, volume }) => {
  const priceEURO = fabric$.pipe(map((fabricValue) => fabricValue.priceEURO));
  const priceUAH = fabric$.pipe(map((fabricValue) => fabricValue.priceUAH));

  return {
    name,
    priceEURO,
    priceUAH,
    volume,
  };
};
export default productDetailsWizardTitleVM;

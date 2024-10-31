import { Observable } from 'rxjs';

import SubcategoryStatus from 'src/components/shopPage/subcategoryStatus';

import { Language } from 'src/types/language';
import useRx from 'src/hooks/useRx';
import ProductListItemVm from 'src/data/viewModels/shop/productListItemVM';

type Props = {
  language: Language;
  vm: Observable<ProductListItemVm[]>;
};

function ShopPageStatus({ language, vm }: Props) {
  const quantity = useRx(vm).length;

  return <SubcategoryStatus language={language} quantity={quantity} />;
}

export default ShopPageStatus;

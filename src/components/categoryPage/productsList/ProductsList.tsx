import { Observable } from 'rxjs';

import ProductSubCategory from 'src/components/categoryPage/productSubCategory';

import useRx from 'src/hooks/useRx';
import ProductListItemVm from 'src/data/viewModels/shop/productListItemVM';
type Props = {
  vm: Observable<ProductListItemVm[]>;
};

function ProductsList({ vm }: Props) {
  const data = useRx(vm);
  return data ? <ProductSubCategory products={data} /> : null;
}

export default ProductsList;

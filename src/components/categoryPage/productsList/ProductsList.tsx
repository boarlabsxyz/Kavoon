import { Observable } from 'rxjs';

import ProductSubCategory from 'src/components/categoryPage/productSubCategory';

import useRx from 'src/hooks/useRx';
import ProductListItemVm from 'src/data/viewModels/shop/productListItemVM';
import sortProducts from 'src/helpers/sortProducts';
type Props = {
  vm: Observable<ProductListItemVm[]>;
};

function ProductsList({ vm }: Props) {
  const data = useRx(vm);
  const sortedData = sortProducts(data, 'hasTopBadge');
  // const sortedData = sortProducts(data, 'priceEURO');
  // const sortedData = sortProducts(data, 'price');???????????
  // const sortedData = sortProducts(data, 'priceEURO', 'desc');
  // const sortedData = sortProducts(data, 'createdAt');
  // const sortedData = sortProducts(data, 'createdAt', 'desc');

  console.log('data: ', data);
  console.log('sortedData: ', sortedData);
  // return data ? <ProductSubCategory products={data} /> : null;
  return data ? <ProductSubCategory products={sortedData} /> : null;
}

export default ProductsList;

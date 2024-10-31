import filterShopVM from 'src/data/viewModels/shop/filterShopVM';
import shopVM from './shop';

const shopListVM = () => ({
  productsListVM: filterShopVM(shopVM().productsListVM),
  shopPageStatusVM: shopVM().shopPageStatusVM,
});

export default shopListVM;

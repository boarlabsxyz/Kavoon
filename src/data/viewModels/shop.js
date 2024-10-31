import productsData from 'src/data/data/products';
import ShopPageStatusVM from './shop/shopPageStatusVM';
import productsListVM from './shop/productsListVM';

const shopVM = () => ({
  shopPageStatusVM: new ShopPageStatusVM(productsData().length),
  productsListVM: productsListVM(productsData()),
});

export default shopVM;

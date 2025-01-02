import { BehaviorSubject } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

import Product, { Currencies } from 'src/types/product';
import { Fabric } from 'src/data/data/fabrics/fabrics';
import cartModel from 'src/data/logic/cartLogic';
import { CUSTOMER_PARAMETERS } from 'src/data/constants';

const productInStockDetailsOrderBtnVM = (
  product: Product,
  products: Product[],
  isProductKitChecked: BehaviorSubject<boolean>
) => {
  const addProduct = () => {
    const currentPrice = product.price as Currencies;
    const fabric = product.fabrics as Fabric;

    cartModel.addProduct({
      name: product.name,
      id: product.id,
      dimensions: CUSTOMER_PARAMETERS,
      size: product.size,
      volume: product.volume,
      fabric: fabric.name,
      color: fabric.color,
      materialPrint: product.print,
      priceEURO: currentPrice.EUR,
      priceUAH: currentPrice.UAH,
      count: 1,
      cartId: uuidv4(),
      picture: `/products/${product.id}/${product.id}_120x120@3x.png`,
    });

    if (
      isProductKitChecked instanceof BehaviorSubject &&
      isProductKitChecked.getValue()
    ) {
      if (product.productKit && product.productKit.id) {
        const mount = products.find(
          (productItem) => productItem.id === product.productKit.id
        );

        if (mount) {
          const { price } = mount as { price: Currencies };
          isProductKitChecked.next(false);

          cartModel.addProduct({
            name: mount.name,
            id: mount.id,
            priceEURO: price.EUR,
            priceUAH: price.UAH,
            dimensions: '',
            count: 1,
            cartId: uuidv4(),
            picture: `/products/${mount.id}/${mount.id}_120x120@3x.png`,
          });
        }
      }
    }
  };

  return {
    name: product.name,
    addProduct,
  };
};

export default productInStockDetailsOrderBtnVM;

import { v4 as uuidv4 } from 'uuid';

import cartModel from 'src/data/logic/cartLogic';
import Product, { Currencies } from 'src/types/product';

const mountProductDetailsOrderBtn = (product: Product) => {
  const Price = product.price as Currencies;

  const addProduct = () => {
    const { EUR, UAH } = Price;

    cartModel.addProduct({
      name: product.name,
      id: product.id,
      priceEURO: EUR,
      priceUAH: UAH,
      dimensions: '',
      count: 1,
      cartId: uuidv4(),
      picture: `/products/${product.id}/${product.id}_120x120@3x.png`,
    });
  };

  return {
    name: product.name,
    addProduct,
  };
};

export default mountProductDetailsOrderBtn;

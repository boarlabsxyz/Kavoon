import { BehaviorSubject, map } from 'rxjs';

import { INCREASE, DECREASE, STORAGE, CART_DATA } from 'src/data/constants';
import { ProductInCart } from 'src/types/product';
import { omitValues, updateUserChoiceInfo } from 'src/helpers/cart';

type Action = typeof INCREASE | typeof DECREASE;

const products = new BehaviorSubject<ProductInCart[]>([]);

function changeQuantityOfProduct(productId: string, action: Action): void {
  const items = products.getValue();

  const updatedItems = items.map((item) => {
    if (item.cartId !== productId) return item;

    let newCount: number;
    if (action === INCREASE) {
      newCount = item.count + 1;
    } else if (action === DECREASE) {
      newCount = Math.max(item.count - 1, 1);
    } else {
      // eslint-disable-next-line no-console
      console.error(`Unknown action: ${action}`);
      return item;
    }

    return {
      ...item,
      count: newCount,
    };
  });

  updateUserChoiceInfo(products, updatedItems);
}

function increase(cartId: string): void {
  changeQuantityOfProduct(cartId, INCREASE);
}

function decrease(cartId: string): void {
  changeQuantityOfProduct(cartId, DECREASE);
}

export function handleUserChoiceInfo(): void {
  const data: ProductInCart[] = JSON.parse(
    localStorage.getItem(CART_DATA) || '[]'
  );
  products.next(data);
}

function init(): () => void {
  handleUserChoiceInfo();
  window.addEventListener(STORAGE, handleUserChoiceInfo);

  return () => {
    window.removeEventListener(STORAGE, handleUserChoiceInfo);
  };
}

function addProduct(productData: ProductInCart): void {
  const currentValue = products.getValue();

  if (!currentValue.length) {
    updateUserChoiceInfo(products, [productData]);
    return;
  }

  const sameProduct = currentValue.find(
    (product) =>
      JSON.stringify(omitValues(product)) ===
      JSON.stringify(omitValues(productData))
  );

  if (sameProduct) {
    increase(sameProduct.cartId);
    return;
  }

  updateUserChoiceInfo(products, [...currentValue, productData]);
}

function deleteProduct(cartId: string): void {
  const updatedValue = products.value.filter(
    (product) => product.cartId !== cartId
  );
  updateUserChoiceInfo(products, updatedValue);
}

const count = products.pipe(
  map((productsList) =>
    productsList.reduce((sum, item) => {
      if (item.additionProductData) {
        return sum + item.count + item.additionProductData.count;
      }
      return sum + item.count;
    }, 0)
  )
);

const CartLogic = {
  addProduct,
  products,
  count,
  increase,
  decrease,
  init,
  deleteProduct,
  handleUserChoiceInfo,
};

export default CartLogic;

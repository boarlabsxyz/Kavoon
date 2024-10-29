import { BehaviorSubject, map } from 'rxjs';

import { updateUserChoiceInfo } from 'src/helpers/cart';
import getTotalPrice from 'src/helpers/getTotalPrice';
import cartModel from 'src/data/logic/cartLogic';
import cartProductVM from 'src/data/viewModels/cart/cartProductVM';

const CartInfoAndOrderSectionVM = () => {
  const totalSum = cartModel.products.pipe(
    map((products) => getTotalPrice(products))
  );
  const productVMs = cartModel.products.pipe(
    map((products) => products.map((product) => cartProductVM(product)))
  );
  const statusOfOrder = new BehaviorSubject(false);

  function makeOrder(statusOfServer) {
    if (statusOfServer === 'success') {
      statusOfOrder.next(true);
      updateUserChoiceInfo(cartModel.products, []);
      setTimeout(() => {
        statusOfOrder.next(false);
      }, 2000);
    } else {
      console.error('The order isn`t sent!'); // eslint-disable-line no-console
    }
  }

  return {
    count: cartModel.count,
    orderedProducts: cartModel.products,
    totalSum,
    makeOrder,
    statusOfOrder,
    productVMs,
    deleteProduct: cartModel.deleteProduct,
  };
};

export default CartInfoAndOrderSectionVM;

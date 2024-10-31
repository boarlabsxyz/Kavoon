import cartModel from 'src/data/logic/cartLogic';

const CartProductVM = (product) => ({
  picture: `/products/${product.id}/${product.id}_120x120@3x.png`,
  increase: cartModel.increase,
  decrease: cartModel.decrease,
  ...product,
});

export default CartProductVM;

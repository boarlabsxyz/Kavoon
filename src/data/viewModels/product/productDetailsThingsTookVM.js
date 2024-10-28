import getTotalPrice from 'src/helpers/getTotalPrice';
import cartModel from 'src/data/logic/cartLogic';
import applyDiscount from 'src/helpers/applyDiscount';
import productDiscountInComplectVM from './productDiscountInComplectVM';

const productDetailsThingsTookVM = ({ allKitDiscount }) => {
  const { discount, kit } = allKitDiscount();
  const kitForCart = kit.map((productData) => ({
    name: productData.name,
    id: productData.id,
    count: productData.count,
    size: productData.size,
    priceEURO: applyDiscount(productData.price.cordura.EUR, discount),
    priceUAH: applyDiscount(productData.price.cordura.UAH, discount),
    volume: productData.volume,
    fabric: productData.fabrics[0].fabric.name,
    print: productData.fabrics[0].fabric.colors[0].name,
    materialPrint: productData.materialPrint.prints[0].name,
    dimensions: {},
  }));

  const totalSum = getTotalPrice(kitForCart);

  return {
    kitVMs: kit.map((productData) => productDiscountInComplectVM(productData)),
    kitForCart,
    totalSum,
    addProduct: cartModel.addProduct,
  };
};
export default productDetailsThingsTookVM;

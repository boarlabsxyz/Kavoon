import productDetailsKitCheckboxVM from './productDetailsKitCheckboxVM';

function productDetailsKitVM(product, products) {
  if (!product.productKit) return null;

  const { price } = products.find(
    (productItem) => productItem.id === product.productKit.id
  );
  const priceObj = { priceUAH: price.UAH, priceEURO: price.EUR };
  const kit = { price: priceObj, ...product.productKit };

  return {
    kit,
    productDetailsKitCheckboxVM: productDetailsKitCheckboxVM(),
  };
}

export default productDetailsKitVM;

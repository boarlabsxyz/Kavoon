const productDiscountInComplectVM = (product) => ({
  name: product.name,
  volume: product.volume,
  priceEURO: product.price.cordura.EUR,
  priceUAH: product.price.cordura.UAH,
  count: product.count,
  image: `/products/${product.id}/${product.id}_120x120@3x.png`,
});
export default productDiscountInComplectVM;

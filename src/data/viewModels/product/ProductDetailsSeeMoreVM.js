import { getAllProduct } from 'src/helpers/getProducts';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';

const productDetailsSeeMoreVM = () => {
  const products = getAllProduct();
  const isRunningInCypress = !!(
    typeof window !== 'undefined' && window.Cypress
  );

  const productsList = products.map((productData) => {
    const mainPropertyName = 'Volume';
    const mainPropertyValue = productData.volume;
    const unitNameOfMainProperty = 'Liters';

    return new ProductListItemVM({
      name: productData.name,
      mainPropertyName,
      mainPropertyValue,
      unitNameOfMainProperty,
      id: productData.id,
      price: productData.price,
      category: productData.category,
      subcategory: productData.subcategory,
    });
  });

  const generateRandomProducts = (productList) =>
    [...productList].sort(() => 0.5 - Math.random());

  const limitedList = (
    isRunningInCypress ? productsList : generateRandomProducts(productsList)
  ).slice(0, 4);

  return limitedList;
};

export default productDetailsSeeMoreVM;

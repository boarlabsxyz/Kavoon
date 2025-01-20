import { getAllProducts } from 'src/helpers/getProducts';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import Product from 'src/types/product';

const productDetailsSeeMoreVM = (): ProductListItemVM[] => {
  const products: Product[] = getAllProducts();

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
      createdAt: productData.createdAt,
    });
  });

  const generateRandomProducts = (productList) =>
    [...productList].sort(() => 0.5 - Math.random());

  const limitedList = generateRandomProducts(productsList).slice(0, 4);

  return limitedList;
};

export default productDetailsSeeMoreVM;

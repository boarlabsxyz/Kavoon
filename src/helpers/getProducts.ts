import toKebabCase from 'src/helpers/toKebabCase';
import Products from 'src/data/data/products';
import Product from 'src/types/product';

export const getAllProducts = (): Product[] => Products();

export const getProductById = (productId: string): Product | undefined => {
  const products = getAllProducts();

  return products.find(({ id }) => id === productId);
};

export const getProductByCategory = (categoryId: string): Product[] => {
  const products = getAllProducts();

  return products.filter(
    ({ category }) => toKebabCase(category) === categoryId
  );
};

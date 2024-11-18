import toKebabCase from 'src/helpers/toKebabCase';
import Products from 'src/data/data/products';

export const getAllProducts = () => Products();

export const getProductById = (productId) => {
  const products = getAllProducts();

  return products.find(({ id }) => id === productId);
};

export const getProductByCategory = (categoryId) => {
  const products = getAllProducts();

  return products.filter(
    ({ category }) => toKebabCase(category) === categoryId
  );
};

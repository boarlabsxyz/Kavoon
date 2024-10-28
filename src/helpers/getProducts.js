import toKebabCase from 'src/helpers/toKebabCase';
import Products from 'src/data/data/products';

export const getAllProduct = () => Products();

export const getProductById = (productId) => {
  const products = getAllProduct();

  return products.find(({ id }) => id === productId);
};

export const getProductByCategory = (categoryId) => {
  const products = getAllProduct();

  return products.filter(
    ({ category }) => toKebabCase(category) === categoryId
  );
};

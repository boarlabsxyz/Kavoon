import productsData from './productsData';

const getProducts = (locale) => {
  const productsForLocale = {};

  Object.keys(productsData).forEach((key) => {
    if (productsData[key] && productsData[key][locale]) {
      productsForLocale[key] = productsData[key][locale];
    }
  });

  return productsForLocale;
};

export default getProducts;

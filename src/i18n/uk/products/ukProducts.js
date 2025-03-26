import getProducts from '../../server/products/getProducts';

const ukProducts = getProducts('uk');

// Ensure the translations are properly exported
export default {
  ...ukProducts,
  // Add any additional translations specific to Ukrainian
};

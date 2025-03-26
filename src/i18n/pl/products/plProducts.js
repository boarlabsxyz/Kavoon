import getProducts from '../../server/products/getProducts';

const plProducts = getProducts('pl');

// Ensure the translations are properly exported
export default {
  ...plProducts,
  // Add any additional translations specific to Polish
};

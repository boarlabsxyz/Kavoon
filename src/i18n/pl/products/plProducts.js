import getProducts from '../../server/products/getProducts';

const plProducts = getProducts('pl');

// Ensure the translations are properly exported
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...plProducts,
  // Add any additional translations specific to Polish
};

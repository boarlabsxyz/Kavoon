import { expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CartPage from './page';

describe.skip('Cart page components:', () => {
  test('StatusSection should render correctly', () => {
    render(<CartPage />);

    const yourShoppingBagTitle = screen.getByRole('heading', {
      name: 'Your shopping bag',
    });
    expect(yourShoppingBagTitle).toBeInTheDocument();
  });

  test('OrderDetailsSection should render correctly', () => {
    render(<CartPage />);

    const deliveryTitle = screen.getByRole('heading', {
      name: 'Delivery',
    });
    expect(deliveryTitle).toBeInTheDocument();

    const paymentTitle = screen.getByRole('heading', {
      name: 'Payment',
    });
    expect(paymentTitle).toBeInTheDocument();
  });
});

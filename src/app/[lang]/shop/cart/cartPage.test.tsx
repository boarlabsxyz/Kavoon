import { render, screen } from '@testing-library/react';

import { Language } from 'src/types/language';

import CartPage from './page';

const mockParams = { lang: 'en' as Language };

describe('Cart page components:', () => {
  test('StatusSection should render correctly', () => {
    render(<CartPage params={mockParams} />);

    const yourShoppingBagTitle = screen.getByRole('heading', {
      name: 'Your shopping bag',
    });
    expect(yourShoppingBagTitle).toBeInTheDocument();
  });

  test('OrderDetailsSection should render correctly', () => {
    render(<CartPage params={mockParams} />);

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

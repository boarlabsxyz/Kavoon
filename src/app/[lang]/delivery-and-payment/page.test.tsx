import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryAndPaymentPage, { generateMetadata } from './page';
import getDictionary from 'src/i18n/getDictionary';
import DeliveryAndPayment from 'src/components/deliveryPaymentPage/deliveryAndPayment';

jest.mock('src/i18n/getDictionary');
jest.mock('src/components/deliveryPaymentPage/deliveryAndPayment', () =>
  jest.fn(() => <div data-testid="delivery-payment" />)
);

describe('DeliveryAndPaymentPage', () => {
  const mockLang = 'uk';
  const mockDictionary = { title: 'Доставка та оплата' };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('fetches dictionary and renders DeliveryAndPayment component', async () => {
    (getDictionary as jest.Mock).mockResolvedValue(mockDictionary);

    const { findByTestId } = render(
      await DeliveryAndPaymentPage({ params: { lang: mockLang } })
    );

    expect(getDictionary).toHaveBeenCalledWith(mockLang, 'deliveryAndPayment');
    expect(DeliveryAndPayment).toHaveBeenCalledWith(
      { dictionary: mockDictionary },
      {}
    );

    expect(await findByTestId('delivery-payment')).toBeInTheDocument();
  });

  test('renders error message if dictionary fetch fails', async () => {
    (getDictionary as jest.Mock).mockRejectedValue(new Error('Fetch error'));

    const { findByText } = render(
      await DeliveryAndPaymentPage({ params: { lang: mockLang } })
    );

    expect(
      await findByText('Error loading Delivery and Payment page')
    ).toBeInTheDocument();
    expect(
      await findByText(
        'Please try refreshing the page or contact support if the problem persists.'
      )
    ).toBeInTheDocument();
  });

  test('generateMetadata returns correct canonical URL', () => {
    const metadata = generateMetadata({ params: { lang: 'en' } });

    expect(metadata).toEqual({
      alternates: {
        canonical: 'https://kavoon.com.ua/en/delivery-and-payment',
        languages: {
          en: 'https://kavoon.com.ua/en/delivery-and-payment',
          uk: 'https://kavoon.com.ua/uk/delivery-and-payment',
          pl: 'https://kavoon.com.ua/pl/delivery-and-payment',
        },
      },
    });
  });
});

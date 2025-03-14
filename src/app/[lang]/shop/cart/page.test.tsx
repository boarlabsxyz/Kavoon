import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Language } from 'src/types/language';
import CartPage, { generateMetadata } from './page';

describe('CartPage Component', () => {
  const validParams = { lang: 'en' as Language };

  it('renders without crashing', async () => {
    await act(async () => {
      expect(() => render(<CartPage params={validParams} />)).not.toThrow();
    });
  });
});

describe('generateMetadata', () => {
  it('generates correct metadata', () => {
    const metadata = generateMetadata({ params: { lang: 'en' as Language } });

    expect(metadata.alternates?.canonical).toBe(
      'https://kavoon.com.ua/en/shop/cart'
    );
    expect(metadata.alternates?.languages).toEqual({
      en: 'https://kavoon.com.ua/en/shop/cart',
      uk: 'https://kavoon.com.ua/uk/shop/cart',
      pl: 'https://kavoon.com.ua/pl/shop/cart',
    });
  });
});

import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUsPage, { generateMetadata } from './page';
import getDictionary from 'src/i18n/getDictionary';
import { Language } from 'src/types/language';
import { renderToString } from 'react-dom/server';

jest.mock('src/components/aboutUsPage/aboutUs/AboutUs', () => () => (
  <div data-testid="about-us-component" />
));

jest.mock('src/i18n/getDictionary', () => jest.fn());

describe('AboutUsPage Component (Server-side)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders AboutUs component when dictionary loads successfully', async () => {
    (getDictionary as jest.Mock).mockResolvedValue({
      title: 'Про нас',
      subtitle: 'Дізнайтеся більше про Kavoon',
    });

    let html: string;

    await act(async () => {
      html = renderToString(
        await AboutUsPage({ params: { lang: 'en' as Language } })
      );
    });

    expect(html).toContain('data-testid="about-us-component"');
  });

  it('displays error message when dictionary fails to load', async () => {
    (getDictionary as jest.Mock).mockRejectedValue(
      new Error('Failed to fetch dictionary')
    );

    let html: string;

    await act(async () => {
      html = renderToString(
        await AboutUsPage({ params: { lang: 'en' as Language } })
      );
    });

    expect(html).toContain('Error loading About Us page.');
  });
});

describe('generateMetadata', () => {
  it('generates correct metadata', () => {
    const metadata = generateMetadata({ params: { lang: 'en' as Language } });

    expect(metadata.alternates?.canonical).toBe(
      'https://kavoon.com.ua/en/about-us'
    );
    expect(metadata.alternates?.languages).toEqual({
      en: 'https://kavoon.com.ua/en/about-us',
      uk: 'https://kavoon.com.ua/uk/about-us',
      pl: 'https://kavoon.com.ua/pl/about-us',
    });
  });
});

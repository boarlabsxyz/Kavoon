import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PolicyPage, { generateMetadata } from './page';
import getDictionary from 'src/i18n/getDictionary';
import Policy from 'src/components/policyPage/policy';

jest.mock('src/i18n/getDictionary');
jest.mock('src/components/policyPage/policy', () =>
  jest.fn(() => <div data-testid="policy-page" />)
);
jest.mock('src/i18n/lang', () => jest.fn((key, lang) => `${key}-${lang}`));

describe('PolicyPage', () => {
  const mockLang = 'uk';
  const mockDictionary = { title: 'Політика конфіденційності' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetches dictionary and renders Policy component', async () => {
    (getDictionary as jest.Mock).mockResolvedValue(mockDictionary);

    const { findByTestId } = render(
      await PolicyPage({ params: { lang: mockLang } })
    );

    expect(getDictionary).toHaveBeenCalledWith(mockLang, 'policy');
    expect(Policy).toHaveBeenCalledWith(
      { language: mockLang, policy: mockDictionary },
      {}
    );

    expect(await findByTestId('policy-page')).toBeInTheDocument();
  });

  test('renders error message if dictionary fetch fails', async () => {
    (getDictionary as jest.Mock).mockRejectedValue(new Error('Fetch error'));

    const { findByText } = render(
      await PolicyPage({ params: { lang: mockLang } })
    );

    expect(await findByText('Error loading policy page.')).toBeInTheDocument();
  });

  test('generateMetadata returns correct metadata', async () => {
    const metadata = await generateMetadata({ params: { lang: 'en' } });

    expect(metadata).toEqual({
      title: 'SiteName-en - PolicyTitle-en',
      description: 'PolicyMetaDescription-en',
      alternates: {
        canonical: 'https://kavoon.com.ua/en/policy',
        languages: {
          en: 'https://kavoon.com.ua/en/policy',
          uk: 'https://kavoon.com.ua/uk/policy',
          pl: 'https://kavoon.com.ua/pl/policy',
        },
      },
      openGraph: {
        title: 'SiteName-en - PolicyTitle-en',
        description: 'PolicyMetaDescription-en',
        url: 'https://kavoon.com.ua/en/policy',
        type: 'website',
        siteName: 'SiteName-en',
        locale: 'uk-UA',
        alternateLocale: ['en-US', 'pl-PL'],
      },
    });
  });
});

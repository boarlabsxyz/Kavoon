import { render, screen } from '@testing-library/react';

import ActiveLocale from './ActiveLocale';

import getActiveLocale from 'helpers/utils/getActiveLocale';
import { LanguageSwitcherType, Language } from 'types/language';

jest.mock('helpers/utils/getActiveLocale');

const mockGetActiveLocale = getActiveLocale as jest.MockedFunction<
  typeof getActiveLocale
>;

type MockLanguages = {
  [key in Language]: LanguageSwitcherType;
};

const mockLanguages: MockLanguages = {
  en: {
    src: '/icons/country-flag-en.svg',
    name: 'English',
    langCode: 'EN',
    locale: 'en',
  },
  uk: {
    src: '/icons/country-flag-ua.svg',
    name: 'Українська',
    langCode: 'UA',
    locale: 'uk',
  },
  pl: {
    src: '/icons/country-flag-pl.svg',
    name: 'Polski',
    langCode: 'PL',
    locale: 'pl',
  },
};

describe('ActiveLocale', () => {
  function encodeImageSrc(path) {
    return expect.stringMatching(encodeURIComponent(path));
  }

  beforeEach(() => {
    mockGetActiveLocale.mockReset();
  });

  it('should render the correct locale data for "en"', () => {
    const { name, langCode } = mockLanguages.en;
    const src = `${mockLanguages.en.src}`;

    mockGetActiveLocale.mockReturnValue(mockLanguages.en);

    render(<ActiveLocale lang="en" />);

    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(langCode, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', src);
  });

  it('should render the correct locale data for "pl"', () => {
    const { name, langCode } = mockLanguages.pl;
    const src = `${mockLanguages.pl.src}`;

    mockGetActiveLocale.mockReturnValue(mockLanguages.pl);

    render(<ActiveLocale lang="pl" />);

    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(langCode, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', src);
  });

  it('should render the correct locale data for "uk"', () => {
    const { name, langCode } = mockLanguages.uk;
    const src = `${mockLanguages.uk.src}`;

    mockGetActiveLocale.mockReturnValue(mockLanguages.uk);

    render(<ActiveLocale lang="uk" />);

    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(langCode, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', src);
  });
});

import { render, screen } from '@testing-library/react';

import LocaleListItem from './LocaleListItem';

const mockUsePathname = jest.fn();
const mockUseParams = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },

  useParams() {
    return mockUseParams();
  },
}));

const props = [
  { locale: 'en', langCode: 'EN', name: 'English' },
  { locale: 'uk', langCode: 'UA', name: "Укра'їнська" },
  { locale: 'pl', langCode: 'PL', name: 'Polski' },
] as const;

describe.each(props)('<LocaleListItem />', ({ locale, langCode, name }) => {
  const defaultProps = {
    src: `/icons/country-flag-${locale}.svg`,
    name,
    langCode,
    locale,
  };

  function renderComponent() {
    render(<LocaleListItem {...defaultProps} />);
  }

  function setup() {
    mockUsePathname.mockImplementation(() => `/${locale}/blog`);
    mockUseParams.mockImplementation(() => ({ lang: locale }));

    renderComponent();
  }

  test('should render the component', () => {
    setup();

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  test('should properly render a link component', () => {
    setup();

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent(langCode);
    expect(link).toHaveAttribute('href', `/${locale}/blog`);
  });

  test('should properly render an image component', () => {
    setup();

    const image = screen.getByRole('img');
    const src = `${defaultProps.src}`;

    expect(image).toHaveAttribute('alt', name);
    expect(image).toHaveAttribute('src', src);
  });
});

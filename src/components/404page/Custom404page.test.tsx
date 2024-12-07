import { usePathname } from 'next/navigation';
import { render, screen, fireEvent } from '@testing-library/react';
import Custom404 from 'src/components/404page';
import translate from 'src/i18n/lang';

const links = [
  { target: '', label: 'Home' },
  { target: 'shop', label: 'MenuItemShop' },
  { target: 'blog', label: 'MenuItemBlog' },
];

const locale = 'uk';
const testUrl = `/${locale}/test`;

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Custom404 Component', () => {
  beforeEach(() => {
    const { usePathname } = jest.requireMock('next/navigation');
    usePathname.mockReturnValue(testUrl);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the 404 image', () => {
    render(<Custom404 />);

    const image = screen.getByAltText('Oops!');
    expect(image).toBeInTheDocument();
  });

  it('should display the translated title', () => {
    render(<Custom404 />);

    const title = screen.getByText(translate('PageNotFound', locale));
    expect(title).toBeInTheDocument();
  });

  it('calls window.history.back when "Go Back" button is clicked', () => {
    (usePathname as jest.Mock).mockReturnValue(`/${locale}/test-page`);
    const mockBack = jest.fn();
    Object.defineProperty(window, 'history', {
      value: { back: mockBack },
      writable: true,
    });

    render(<Custom404 />);

    const button = screen.getByRole('button', {
      name: translate('GoBack', locale),
    });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('should render all links with correct href and text', () => {
    render(<Custom404 />);

    links.forEach(({ target, label }) => {
      const linkElement = screen.getByText(translate(label, locale));
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute(
        'href',
        target ? `/${locale}/${target}` : `/${locale}`
      );
    });
  });

  it('should default to English when an invalid language is present', () => {
    const defaultLocale = 'en';

    const { usePathname } = jest.requireMock('next/navigation');
    usePathname.mockReturnValue('/invalid/test');

    render(<Custom404 />);

    const title = screen.getByText(translate('PageNotFound', defaultLocale));
    expect(title).toBeInTheDocument();

    links.forEach(({ label }) => {
      const linkElement = screen.getByText(translate(label, defaultLocale));
      expect(linkElement).toBeInTheDocument();
    });
  });
});

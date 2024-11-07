import { screen, render } from '@testing-library/react';

import BreadcrumbsNav from './Breadcrumbs';

jest.mock('src/i18n/lang', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('<BreadcrumbsNav />', () => {
  const mockLang = require('src/i18n/lang').default;

  const mockVM = {
    breadcrumbs: [
      { name: 'Home', src: '/home' },
      { name: 'Shop', src: '/shop' },
    ],
  };

  const language = 'en';

  beforeEach(() => {
    mockLang.mockImplementation((name, language) => `${name}-${language}`);
  });

  test('should render component', () => {
    render(<BreadcrumbsNav vm={mockVM} language={language} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('renders the correct number of breadcrumbs', () => {
    render(<BreadcrumbsNav vm={mockVM} language={language} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(
      mockVM.breadcrumbs.length
    );
  });

  test('renders breadcrumbs correctly', () => {
    render(<BreadcrumbsNav vm={mockVM} language={language} />);

    const homeLink = screen.getByRole('link', {
      name: /home-en/i,
    });
    const shopLink = screen.getByRole('link', {
      name: /shop-en/i,
    });

    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/en/home');
    expect(shopLink).toHaveAttribute('href', '/en/shop');
  });
});

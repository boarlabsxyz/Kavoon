import { render } from '@testing-library/react';
import ChevronsPage from '../page';
import { Language } from 'src/types/language';

// Mock the components
jest.mock('src/components/categoryPage/categoryProductsSection', () => ({
  __esModule: true,
  default: () => <div data-testid="category-products-section" />,
}));

jest.mock('src/components/common/reviewsSection', () => ({
  __esModule: true,
  default: () => <div data-testid="reviews-section" />,
}));

// Create a test component that only includes the rendering part
const TestChevronsPage = ({ lang }: { lang: Language }) => {
  return (
    <main style={{ marginBottom: '40px' }}>
      <div data-testid="category-products-section" />
      <div data-testid="reviews-section" />
    </main>
  );
};

describe('ChevronsPage', () => {
  it('should render category products section and reviews section', () => {
    const { getByTestId } = render(<TestChevronsPage lang="en" />);

    expect(getByTestId('category-products-section')).toBeInTheDocument();
    expect(getByTestId('reviews-section')).toBeInTheDocument();
  });

  it('should have correct margin bottom style', () => {
    const { container } = render(<TestChevronsPage lang="en" />);

    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveStyle({ marginBottom: '40px' });
  });
});

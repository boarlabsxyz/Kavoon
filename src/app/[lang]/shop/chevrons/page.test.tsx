/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import ChevronsPage from './page';
import { Language } from 'src/types/language';
import { CHEVRONS } from 'src/data/constants';

// Mock Next.js metadata
jest.mock('next/navigation', () => ({
  usePathname: () => '/test-path',
}));

// Mock the components
jest.mock('src/components/categoryPage/categoryProductsSection', () => ({
  __esModule: true,
  default: ({ categoryId, lang }: { categoryId: string; lang: Language }) => (
    <div
      data-testid="category-products-section"
      data-category={categoryId}
      data-lang={lang}
    />
  ),
}));

jest.mock('src/components/common/reviewsSection', () => ({
  __esModule: true,
  default: () => <div data-testid="reviews-section" />,
}));

describe('ChevronsPage', () => {
  const renderPage = (lang: Language = 'en') => {
    return render(<ChevronsPage params={{ lang }} />);
  };

  it('should render category products section and reviews section', () => {
    const { getByTestId } = renderPage();

    const categorySection = getByTestId('category-products-section');
    const reviewsSection = getByTestId('reviews-section');

    expect(categorySection).toBeInTheDocument();
    expect(reviewsSection).toBeInTheDocument();
    expect(categorySection).toHaveAttribute('data-category', CHEVRONS);
    expect(categorySection).toHaveAttribute('data-lang', 'en');
  });

  it('should have correct margin bottom style', () => {
    const { container } = renderPage();

    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveStyle({ marginBottom: '40px' });
  });
});

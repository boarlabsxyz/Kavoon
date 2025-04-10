/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ChevronsPage, { generateMetadata } from './page';
import { Language } from 'src/types/language';
import { CHEVRONS } from 'src/data/constants';

// Mock Next.js metadata
jest.mock('next/navigation', () => ({
  usePathname: () => '/test-path',
}));

// Mock the components
jest.mock('src/components/categoryPage/categoryProductsSection', () => {
  const mockComponent = ({
    categoryId,
    lang,
  }: {
    categoryId: string;
    lang: Language;
  }) => (
    <div data-testid="category-products-section">
      Category Products Section - {categoryId} - {lang}
    </div>
  );
  mockComponent.displayName = 'CategoryProductsSection';
  return {
    __esModule: true,
    default: mockComponent,
  };
});

jest.mock('src/components/common/reviewsSection', () => {
  const mockComponent = () => (
    <div data-testid="reviews-section">Reviews Section</div>
  );
  mockComponent.displayName = 'ReviewsSection';
  return {
    __esModule: true,
    default: mockComponent,
  };
});

describe('ChevronsPage', () => {
  it('renders the page with correct components', () => {
    const lang: Language = 'en';
    render(<ChevronsPage params={{ lang }} />);

    const categoryProductsSection = screen.getByTestId(
      'category-products-section'
    );
    const reviewsSection = screen.getByTestId('reviews-section');

    expect(categoryProductsSection).toBeInTheDocument();
    expect(categoryProductsSection).toHaveTextContent(CHEVRONS);
    expect(categoryProductsSection).toHaveTextContent(lang);
    expect(reviewsSection).toBeInTheDocument();
  });

  it('generates correct metadata', async () => {
    const lang: Language = 'en';
    const metadata = await generateMetadata({ params: { lang } });

    expect(metadata).toEqual({
      alternates: {
        canonical: `https://kavoon.com.ua/${lang}/shop/chevrons`,
        languages: {
          en: 'https://kavoon.com.ua/en/shop/chevrons',
          uk: 'https://kavoon.com.ua/uk/shop/chevrons',
          pl: 'https://kavoon.com.ua/pl/shop/chevrons',
        },
      },
    });
  });

  it('renders with different languages', () => {
    const languages: Language[] = ['en', 'uk', 'pl'];

    languages.forEach((lang) => {
      const { unmount } = render(<ChevronsPage params={{ lang }} />);

      const categoryProductsSection = screen.getByTestId(
        'category-products-section'
      );
      expect(categoryProductsSection).toHaveTextContent(lang);

      unmount();
    });
  });
});

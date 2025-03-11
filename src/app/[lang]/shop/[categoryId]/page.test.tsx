import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryPage, { generateMetadata } from './page';
import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';

jest.mock('src/components/categoryPage/categoryProductsSection', () => () => (
  <div data-testid="category-products-section" />
));

jest.mock('src/components/common/reviewsSection', () => () => (
  <div data-testid="reviews-section" />
));

describe('CategoryPage Component', () => {
  const validParams = {
    categoryId: 'electronics' as Category,
    lang: 'en' as Language,
  };

  it('renders CategoryProductsSection and ReviewsSection', () => {
    render(<CategoryPage params={validParams} />);

    expect(screen.getByTestId('category-products-section')).toBeInTheDocument();
    expect(screen.getByTestId('reviews-section')).toBeInTheDocument();
  });

  it('renders without crashing when missing parameters', () => {
    expect(() =>
      render(
        <CategoryPage
          params={{ categoryId: '' as Category, lang: '' as Language }}
        />
      )
    ).not.toThrow();
  });
});

describe('generateMetadata', () => {
  const testCases: {
    categoryId: Category;
    lang: Language;
    expectedUrl: string;
  }[] = [
    {
      categoryId: 'electronics' as Category,
      lang: 'en' as Language,
      expectedUrl: 'https://kavoon.com.ua/en/shop/electronics',
    },
    {
      categoryId: 'books' as Category,
      lang: 'uk' as Language,
      expectedUrl: 'https://kavoon.com.ua/uk/shop/books',
    },
    {
      categoryId: 'clothes' as Category,
      lang: 'pl' as Language,
      expectedUrl: 'https://kavoon.com.ua/pl/shop/clothes',
    },
  ];

  testCases.forEach(({ categoryId, lang, expectedUrl }) => {
    it(`generates correct metadata for category "${categoryId}" and language "${lang}"`, async () => {
      const metadata = await generateMetadata({ params: { categoryId, lang } });

      expect(metadata.alternates?.canonical).toBe(expectedUrl);
      expect(metadata.alternates?.languages).toEqual({
        en: `https://kavoon.com.ua/en/shop/${categoryId}`,
        uk: `https://kavoon.com.ua/uk/shop/${categoryId}`,
        pl: `https://kavoon.com.ua/pl/shop/${categoryId}`,
      });
    });
  });

  it('handles missing parameters gracefully', async () => {
    const metadata = await generateMetadata({
      params: { categoryId: '' as Category, lang: '' as Language },
    });

    expect(metadata.alternates?.canonical).toBe('https://kavoon.com.ua/shop');
  });
});

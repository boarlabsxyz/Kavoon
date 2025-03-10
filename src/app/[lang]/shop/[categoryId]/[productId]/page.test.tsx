import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPage, { generateMetadata } from './page';
import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';

jest.mock('src/components/productPage/breadcrumbsWithCart', () => () => (
  <div data-testid="breadcrumbs-with-cart" />
));

jest.mock('src/components/productPage/productDetailsSection', () => () => (
  <div data-testid="product-details-section" />
));

describe('ProductPage Component', () => {
  const validParams = {
    categoryId: 'electronics' as Category,
    productId: '12345',
    lang: 'en' as Language,
  };

  it('renders BreadcrumbsWithCart and ProductDetailsSection', () => {
    render(<ProductPage params={validParams} />);

    expect(screen.getByTestId('breadcrumbs-with-cart')).toBeInTheDocument();
    expect(screen.getByTestId('product-details-section')).toBeInTheDocument();
  });

  it('renders without crashing when missing parameters', () => {
    expect(() =>
      render(
        <ProductPage
          params={{
            categoryId: '' as Category,
            productId: '',
            lang: '' as Language,
          }}
        />
      )
    ).not.toThrow();
  });
});

describe('generateMetadata', () => {
  const testCases: {
    categoryId: Category;
    productId: string;
    lang: Language;
    expectedUrl: string;
  }[] = [
    {
      categoryId: 'electronics' as Category,
      productId: '12345',
      lang: 'en' as Language,
      expectedUrl: 'https://kavoon.com.ua/en/shop/electronics/12345',
    },
    {
      categoryId: 'books' as Category,
      productId: '67890',
      lang: 'uk' as Language,
      expectedUrl: 'https://kavoon.com.ua/uk/shop/books/67890',
    },
    {
      categoryId: 'clothes' as Category,
      productId: 'abcde',
      lang: 'pl' as Language,
      expectedUrl: 'https://kavoon.com.ua/pl/shop/clothes/abcde',
    },
  ];

  testCases.forEach(({ categoryId, productId, lang, expectedUrl }) => {
    it(`generates correct metadata for category "${categoryId}", product "${productId}" and language "${lang}"`, async () => {
      const metadata = await generateMetadata({
        params: { categoryId, productId, lang },
      });

      expect(metadata.alternates?.canonical).toBe(expectedUrl);
      expect(metadata.alternates?.languages).toEqual({
        en: `https://kavoon.com.ua/en/shop/${categoryId}/${productId}`,
        uk: `https://kavoon.com.ua/uk/shop/${categoryId}/${productId}`,
        pl: `https://kavoon.com.ua/pl/shop/${categoryId}/${productId}`,
      });
    });
  });

  it('handles missing parameters gracefully', async () => {
    const metadata = await generateMetadata({
      params: {
        categoryId: '' as Category,
        productId: '',
        lang: '' as Language,
      },
    });

    expect(metadata.alternates?.canonical).toBe(
      'https://kavoon.com.ua//shop//'
    );
  });
});

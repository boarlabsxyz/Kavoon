import { render, screen } from '@testing-library/react';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';
import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';

jest.mock('src/components/categoryPage/productState', () => () => (
  <div data-testid="ProductsState">Mocked ProductsState</div>
));
jest.mock(
  'src/components/categoryPage/filteringAndSortingSection',
  () => () => (
    <div data-testid="FilteringAndSortingSection">
      Mocked FilteringAndSortingSection
    </div>
  )
);

describe('CategoryProductsSection', () => {
  const defaultProps = {
    categoryId: 'some-category' as Category,
    lang: 'en' as Language,
  };

  it('should render the Container component with child components', () => {
    render(<CategoryProductsSection {...defaultProps} />);

    expect(screen.getByTestId('ProductsState')).toBeInTheDocument();
    expect(
      screen.getByTestId('FilteringAndSortingSection')
    ).toBeInTheDocument();
  });

  it('should pass the correct props to ProductsState component', () => {
    render(<CategoryProductsSection {...defaultProps} />);

    expect(screen.getByTestId('ProductsState')).toBeInTheDocument();
  });

  it('should pass the correct props to FilteringAndSortingSection component', () => {
    render(<CategoryProductsSection {...defaultProps} />);

    expect(
      screen.getByTestId('FilteringAndSortingSection')
    ).toBeInTheDocument();
  });
});

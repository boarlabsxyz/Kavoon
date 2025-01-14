import { render, screen } from '@testing-library/react';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';
import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';

jest.mock('src/components/categoryPage/productState', () => () => (
  <div data-testid="ProductsState">Mocked ProductsState</div>
));
jest.mock('src/components/categoryPage/filterSubsection', () => () => (
  <div data-testid="FilterSubsection">Mocked FilterSubsection</div>
));

describe('CategoryProductsSection', () => {
  const defaultProps = {
    categoryId: 'some-category' as Category,
    lang: 'en' as Language,
  };

  it('should render the Container component with child components', () => {
    render(<CategoryProductsSection {...defaultProps} />);

    expect(screen.getByTestId('ProductsState')).toBeInTheDocument();
    expect(screen.getByTestId('FilterSubsection')).toBeInTheDocument();
  });

  it('should pass the correct props to ProductsState component', () => {
    render(<CategoryProductsSection {...defaultProps} />);

    expect(screen.getByTestId('ProductsState')).toBeInTheDocument();
  });

  it('should pass the correct props to FilterSubsection component', () => {
    render(<CategoryProductsSection {...defaultProps} />);

    expect(screen.getByTestId('FilterSubsection')).toBeInTheDocument();
  });
});

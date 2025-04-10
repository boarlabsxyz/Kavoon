import { render, screen } from '@testing-library/react';
import PlacingOrder from './PlacingOrder';
import Product from 'src/types/product';
import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CHEVRONS,
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  CITY_COLLECTION,
} from 'src/data/constants';

// Mock the translations
jest.mock('src/i18n/lang', () => ({
  __esModule: true,
  default: (key: string) => key,
}));

// Mock PlacingOrderDetails component
jest.mock('./PlacingOrderDetails', () => {
  const mockComponent = ({ text }: { text: string }) => (
    <div data-testid="placing-order-details">{text}</div>
  );
  mockComponent.displayName = 'PlacingOrderDetails';
  return {
    __esModule: true,
    default: mockComponent,
  };
});

describe('PlacingOrder', () => {
  const mockProduct = {
    id: 'test-product',
    name: 'Test Product',
    category: BICYCLE_EQUIPMENT,
    subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
    volume: '1L',
    size: '10x10x10',
    weight: 100,
    material: 'Test Material',
    description: {
      short: 'Test description',
      main: 'Main description',
      conclusion: 'Conclusion',
    },
    gallery: 1,
    price: {
      UAH: 1000,
      EUR: 30,
    },
    fabrics: [],
    createdAt: '2024-01-01',
    embedVideo: null,
    productKit: null,
  };

  it('renders section with correct title', () => {
    render(<PlacingOrder language="en" product={mockProduct} />);

    const title = screen.getByText('PlacingOrder');
    expect(title).toBeInTheDocument();
  });

  it('renders PlacingOrderDetails component', () => {
    render(<PlacingOrder language="en" product={mockProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });

  it('passes correct content to PlacingOrderDetails based on product category', () => {
    render(<PlacingOrder language="en" product={mockProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toHaveTextContent('PlacingOrderDetails');
  });

  it('handles different language versions', () => {
    render(<PlacingOrder language="uk" product={mockProduct} />);

    const title = screen.getByText('PlacingOrder');
    expect(title).toBeInTheDocument();
  });

  it('handles different product categories', () => {
    const cityProduct = {
      ...mockProduct,
      category: CITY_COLLECTION,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={cityProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });

  it('handles products without subcategory', () => {
    const productWithoutSubcategory = {
      ...mockProduct,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={productWithoutSubcategory} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });

  it('handles different subcategories', () => {
    const frameBagProduct = {
      ...mockProduct,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
    };

    render(<PlacingOrder language="en" product={frameBagProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });
});

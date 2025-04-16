jest.mock('src/i18n/lang', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((key: string) => key),
}));

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

describe('PlacingOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockProduct: Product = {
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
    const cityProduct: Product = {
      ...mockProduct,
      category: CITY_COLLECTION,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={cityProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });

  it('handles products without subcategory', () => {
    const productWithoutSubcategory: Product = {
      ...mockProduct,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={productWithoutSubcategory} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });

  it('handles different subcategories', () => {
    const frameBagProduct: Product = {
      ...mockProduct,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
    };

    render(<PlacingOrder language="en" product={frameBagProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
  });

  it('handles chevrons category correctly', () => {
    const chevronProduct: Product = {
      ...mockProduct,
      category: CHEVRONS,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={chevronProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
    expect(detailsComponent).toHaveTextContent('PlacingOrderForChevron');
  });

  it('handles in stock category correctly', () => {
    const inStockProduct: Product = {
      ...mockProduct,
      category: IN_STOCK,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={inStockProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
    expect(detailsComponent).toHaveTextContent('PlacingOrderInStockDetails');
  });

  it('handles mounts subcategory correctly', () => {
    const mountProduct: Product = {
      ...mockProduct,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
    };

    render(<PlacingOrder language="en" product={mountProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
    expect(detailsComponent).toHaveTextContent('PlacingOrderForMounts');
  });

  it('handles bag accessories category correctly', () => {
    const bagAccessoriesProduct: Product = {
      ...mockProduct,
      category: BAG_ACCESSORIES,
      subcategory: null,
    };

    render(<PlacingOrder language="en" product={bagAccessoriesProduct} />);

    const detailsComponent = screen.getByTestId('placing-order-details');
    expect(detailsComponent).toBeInTheDocument();
    expect(detailsComponent).toHaveTextContent('PlacingOrderDetails');
  });

  it('applies correct CSS classes', () => {
    render(<PlacingOrder language="en" product={mockProduct} />);

    const section = screen.getByTestId('placing-order-section');
    const title = screen.getByText('PlacingOrder');

    expect(section).toHaveClass('section');
    expect(title).toHaveClass('title');
  });

  it('passes correct language to translations', () => {
    render(<PlacingOrder language="uk" product={mockProduct} />);

    const langMock = require('src/i18n/lang').default;
    expect(langMock).toHaveBeenCalledWith('PlacingOrder', 'uk');
    expect(langMock).toHaveBeenCalledWith('PlacingOrderDetails', 'uk');
  });
});

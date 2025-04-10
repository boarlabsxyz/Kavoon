import { render } from '@testing-library/react';
import PlacingOrder from './PlacingOrder';
import Product from 'src/types/product';
import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CHEVRONS,
  BAG_ACCESSORIES,
} from 'src/data/constants';

jest.mock('src/i18n/lang', () => ({
  __esModule: true,
  default: (key: string) => key,
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

describe('PlacingOrder', () => {
  const mockProduct: Product = {
    id: 'test-product',
    name: 'Test Product',
    price: { UAH: 100, EUR: 3 },
    category: BAG_ACCESSORIES,
    subcategory: null,
    gallery: 1,
    createdAt: '2023-01-01',
    description: {
      short: 'Test description',
      main: 'Test main description',
      conclusion: 'Test conclusion',
    },
    volume: null,
    size: '10/10',
    weight: null,
    material: null,
    fabrics: [],
    embedVideo: null,
    productKit: null,
  };

  it('should render correct content for mounts subcategory', () => {
    const mountProduct = {
      ...mockProduct,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
    };

    const { getByTestId } = render(
      <PlacingOrder language="en" product={mountProduct} />
    );

    expect(getByTestId('placing-order-details')).toHaveTextContent(
      'PlacingOrderForMounts'
    );
  });

  it('should render correct content for in stock category', () => {
    const inStockProduct = {
      ...mockProduct,
      category: IN_STOCK,
    };

    const { getByTestId } = render(
      <PlacingOrder language="en" product={inStockProduct} />
    );

    expect(getByTestId('placing-order-details')).toHaveTextContent(
      'PlacingOrderInStockDetails'
    );
  });

  it('should render correct content for chevrons category', () => {
    const chevronProduct = {
      ...mockProduct,
      category: CHEVRONS,
    };

    const { getByTestId } = render(
      <PlacingOrder language="en" product={chevronProduct} />
    );

    expect(getByTestId('placing-order-details')).toHaveTextContent(
      'PlacingOrderForChevron'
    );
  });

  it('should render default content for other categories', () => {
    const { getByTestId } = render(
      <PlacingOrder language="en" product={mockProduct} />
    );

    expect(getByTestId('placing-order-details')).toHaveTextContent(
      'PlacingOrderDetails'
    );
  });
});

import { of } from 'rxjs';

import { render, screen } from '@testing-library/react';

import ProductsList from './ProductsList';
import useRx from 'src/hooks/useRx';
import ProductListItemVm from 'src/data/viewModels/shop/productListItemVM';
import {
  Category,
  Subcategory,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
} from 'src/data/constants';
import { Price } from 'src/types/product';

jest.mock('src/components/categoryPage/productSubCategory', () => () => (
  <div>Mocked ProductSubCategory</div>
));

jest.mock('src/hooks/useRx');

describe('ProductsList Component', () => {
  const mockData: ProductListItemVm[] = [
    new ProductListItemVm({
      id: '1',
      name: 'Product 1',
      mainPropertyName: 'Color',
      mainPropertyValue: 'Red',
      unitNameOfMainProperty: 'pcs',
      category: 'Bicycle' as Category,
      subcategory: 'Mounts' as Subcategory,
      price: { UAH: 100, EUR: 10 } as Price,
    }),
    new ProductListItemVm({
      id: '2',
      name: 'Product 2',
      mainPropertyName: 'Size',
      mainPropertyValue: 'Medium',
      unitNameOfMainProperty: 'cm',
      category: 'Bicycle' as Category,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
      price: { UAH: 200, EUR: 20 } as Price,
    }),
  ];

  it('renders ProductSubCategory with goods when data is available', () => {
    (useRx as jest.Mock).mockReturnValue(mockData);

    render(<ProductsList vm={of(mockData)} />);

    expect(screen.getByText('Mocked ProductSubCategory')).toBeInTheDocument();
  });

  it('renders null when no data is available', () => {
    (useRx as jest.Mock).mockReturnValue(null);

    const { container } = render(<ProductsList vm={of(null)} />);

    expect(container.firstChild).toBeNull();
  });
});

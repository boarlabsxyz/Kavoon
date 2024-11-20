import { getAllProducts } from 'src/helpers/getProducts';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import Product from 'src/types/product';
import {
  BICYCLE_EQUIPMENT,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
} from 'src/data/constants';
import productDetailsSeeMoreVM from './productDetailsSeeMoreVM';

jest.mock('src/helpers/getProducts.ts');

describe('productDetailsSeeMoreVM', () => {
  const sharedProperties = {
    volume: null,
    size: null,
    weight: 150,
    material: 'testMaterial1',
    description: {
      short: 'testInfo1',
      main: 'testDescription1',
      conclusion: null,
    },
    gallery: 5,
    price: { UAH: 650, EUR: 20 },
    fabrics: null,
    embedVideo: null,
    category: BICYCLE_EQUIPMENT,
    subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HalfFrameBag,
    productKit: null,
  };

  const mockProducts: Product[] = [
    { id: 'testId1', name: 'testName1', ...sharedProperties },
    { id: 'testId2', name: 'testName1', ...sharedProperties },
    { id: 'testId3', name: 'testName3', ...sharedProperties },
    { id: 'testId4', name: 'testName3', ...sharedProperties },
    { id: 'testId5', name: 'testName5', ...sharedProperties },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    (getAllProducts as jest.Mock).mockReturnValue(mockProducts);
  });

  it('should return a list of 4 randomized ProductListItemVMs', () => {
    const result = productDetailsSeeMoreVM();

    expect(result).toHaveLength(4);
    expect(result[0]).toBeInstanceOf(ProductListItemVM);

    const resultIds = result.map((item) => item.id);
    const mockProductIds = mockProducts.map((product) => product.id);
    resultIds.forEach((id) => expect(mockProductIds).toContain(id));
  });

  it('should randomize the product order', () => {
    const result1 = JSON.stringify(productDetailsSeeMoreVM());
    const result2 = JSON.stringify(productDetailsSeeMoreVM());

    expect(result1).not.toEqual(result2);
  });
});

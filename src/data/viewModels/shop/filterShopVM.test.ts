import filterShopVM from './filterShopVM';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import {
  ALL_PRODUCTS,
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  CHEVRONS,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
} from 'src/data/constants';
import toKebabCase from 'src/helpers/toKebabCase';

describe('filterShopVM', () => {
  const mockProducts: ProductListItemVM[] = [
    new ProductListItemVM({
      id: 'product-1',
      name: 'Product 1',
      category: BAG_ACCESSORIES,
      subcategory: null,
      price: { UAH: 100, EUR: 3 },
      createdAt: '2023-01-01',
      mainPropertyName: 'Volume',
      mainPropertyValue: '10L',
      unitNameOfMainProperty: 'L',
    }),
    new ProductListItemVM({
      id: 'product-2',
      name: 'Product 2',
      category: BICYCLE_EQUIPMENT,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
      price: { UAH: 200, EUR: 6 },
      createdAt: '2023-01-02',
      mainPropertyName: 'Volume',
      mainPropertyValue: '20L',
      unitNameOfMainProperty: 'L',
    }),
    new ProductListItemVM({
      id: 'chevron-1',
      name: 'Chevron 1',
      category: CHEVRONS,
      subcategory: null,
      price: { UAH: 150, EUR: 4 },
      createdAt: '2023-01-03',
      mainPropertyName: 'Size',
      mainPropertyValue: '8/7',
      unitNameOfMainProperty: 'cm',
    }),
  ];

  it('should filter products by category', (done) => {
    const { filterAndLimitByCategory } = filterShopVM({
      productVMs: mockProducts,
    });

    filterAndLimitByCategory(BAG_ACCESSORIES).subscribe((filteredProducts) => {
      expect(filteredProducts).toHaveLength(1);
      expect(filteredProducts[0].id).toBe('product-1');
      done();
    });
  });

  it('should return all products when ALL_PRODUCTS category is selected', (done) => {
    const { filterByCategoryAndSubcategory } = filterShopVM({
      productVMs: mockProducts,
    });

    filterByCategoryAndSubcategory(ALL_PRODUCTS, null, 'name', 'asc').subscribe(
      (filteredProducts) => {
        expect(filteredProducts).toHaveLength(3);
        done();
      }
    );
  });

  it('should filter and limit products by category', (done) => {
    const { filterAndLimitByCategory } = filterShopVM({
      productVMs: mockProducts,
    });

    filterAndLimitByCategory(BAG_ACCESSORIES, 1).subscribe(
      (filteredProducts) => {
        expect(filteredProducts).toHaveLength(1);
        expect(filteredProducts[0].id).toBe('product-1');
        done();
      }
    );
  });

  it('should filter by category and subcategory', (done) => {
    const { filterByCategoryAndSubcategory } = filterShopVM({
      productVMs: mockProducts,
    });

    filterByCategoryAndSubcategory(
      BICYCLE_EQUIPMENT,
      [SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags],
      'name',
      'asc'
    ).subscribe((filteredProducts) => {
      expect(filteredProducts).toHaveLength(1);
      expect(filteredProducts[0].id).toBe('product-2');
      done();
    });
  });

  it('should sort products by name in descending order', (done) => {
    const { filterByCategoryAndSubcategory } = filterShopVM({
      productVMs: mockProducts,
    });

    filterByCategoryAndSubcategory(
      ALL_PRODUCTS,
      null,
      'name',
      'desc'
    ).subscribe((filteredProducts) => {
      expect(filteredProducts[0].id).toBe('product-2');
      expect(filteredProducts[1].id).toBe('product-1');
      expect(filteredProducts[2].id).toBe('chevron-1');
      done();
    });
  });

  it('should filter products by Chevrons category', (done) => {
    const { filterAndLimitByCategory } = filterShopVM({
      productVMs: mockProducts,
    });

    filterAndLimitByCategory(CHEVRONS).subscribe((filteredProducts) => {
      expect(filteredProducts).toHaveLength(1);
      expect(filteredProducts[0].id).toBe('chevron-1');
      expect(toKebabCase(filteredProducts[0].category)).toBe(
        toKebabCase(CHEVRONS)
      );
      done();
    });
  });
});

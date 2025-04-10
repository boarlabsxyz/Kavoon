import productDetailsWizardVM from './productDetailsWizardVM';
import Product from 'src/types/product';
import {
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CHEVRONS,
} from 'src/data/constants';

describe('productDetailsWizardVM', () => {
  const mockProducts: Product[] = [
    {
      id: 'product-1',
      name: 'Product 1',
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
    },
    {
      id: 'product-2',
      name: 'Product 2',
      price: { UAH: 200, EUR: 6 },
      category: BICYCLE_EQUIPMENT,
      subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
      gallery: 2,
      createdAt: '2023-01-02',
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
    },
  ];

  it('should return null for non-existent product', () => {
    const result = productDetailsWizardVM('non-existent-id', mockProducts);
    expect(result).toBeNull();
  });

  it('should return mount product details wizard for mounts subcategory', () => {
    const result = productDetailsWizardVM('product-2', mockProducts);
    expect(result).toEqual(
      expect.objectContaining({
        productDetailsWizardPickerVM: null,
        productDetailsWizardTitleVM: expect.any(Object),
        productDetailsOrderBtnVM: expect.any(Object),
        subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
      })
    );
  });

  it('should return in stock product details wizard for in stock category', () => {
    const inStockProduct = {
      ...mockProducts[0],
      category: IN_STOCK,
      fabrics: {
        name: 'test-fabric',
        color: 'black',
      },
      print: 'test-print',
    };
    const result = productDetailsWizardVM('product-1', [inStockProduct]);
    expect(result).toEqual(
      expect.objectContaining({
        productDetailsWizardPickerVM: expect.any(Object),
        productDetailsWizardTitleVM: expect.any(Object),
        productDetailsOrderBtnVM: expect.any(Object),
        subcategory: null,
      })
    );
  });

  it('should return chevron product details wizard for chevrons category', () => {
    const chevronProduct = {
      ...mockProducts[0],
      category: CHEVRONS,
    };
    const result = productDetailsWizardVM('product-1', [chevronProduct]);
    expect(result).toEqual(
      expect.objectContaining({
        productDetailsWizardPickerVM: null,
        productDetailsWizardTitleVM: expect.any(Object),
        productDetailsOrderBtnVM: expect.any(Object),
        subcategory: null,
      })
    );
  });

  it('should return standard product details wizard for other categories', () => {
    const result = productDetailsWizardVM('product-1', mockProducts);
    expect(result).toEqual(
      expect.objectContaining({
        productDetailsWizardPickerVM: expect.any(Object),
        productDetailsWizardTitleVM: expect.any(Object),
        productDetailsOrderBtnVM: expect.any(Object),
        addSizes: expect.any(Object),
        addSize: expect.any(Object),
        fixings: expect.any(Object),
        fixing: expect.any(Object),
        chooseZip: expect.any(Object),
        choosenZip: expect.any(Object),
        category: BAG_ACCESSORIES,
        subcategory: null,
      })
    );
  });
});

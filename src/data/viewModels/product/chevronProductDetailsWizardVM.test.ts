import chevronProductDetailsWizardVM from './chevronProductDetailsWizardVM';
import Product from 'src/types/product';
import { CHEVRONS } from 'src/data/constants';

describe('chevronProductDetailsWizardVM', () => {
  const mockProduct: Product = {
    id: 'test-chevron',
    name: 'Test Chevron',
    price: {
      UAH: 100,
      EUR: 3,
    },
    category: CHEVRONS,
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

  it('should return correct view model structure', () => {
    const result = chevronProductDetailsWizardVM(mockProduct);

    expect(result).toEqual({
      productDetailsWizardPickerVM: null,
      productDetailsWizardTitleVM: expect.any(Object),
      productDetailsOrderBtnVM: expect.any(Object),
      subcategory: null,
    });
  });

  it('should handle product with missing optional fields', () => {
    const minimalProduct: Product = {
      id: 'minimal-chevron',
      name: 'Minimal Chevron',
      price: {
        UAH: 100,
        EUR: 3,
      },
      category: CHEVRONS,
      subcategory: null,
      gallery: 1,
      createdAt: '2023-01-01',
      description: {
        short: 'Minimal description',
        main: 'Minimal main description',
        conclusion: 'Minimal conclusion',
      },
      volume: null,
      size: '10/10',
      weight: null,
      material: null,
      fabrics: [],
      embedVideo: null,
      productKit: null,
    };

    const result = chevronProductDetailsWizardVM(minimalProduct);

    expect(result).toEqual({
      productDetailsWizardPickerVM: null,
      productDetailsWizardTitleVM: expect.any(Object),
      productDetailsOrderBtnVM: expect.any(Object),
      subcategory: null,
    });
  });
});

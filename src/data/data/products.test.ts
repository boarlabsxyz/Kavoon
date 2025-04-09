import Products from './products';
import {
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CHEVRONS,
  CITY_COLLECTION,
} from 'src/data/constants';

describe('Products', () => {
  it('should return an array of products', () => {
    const products = Products();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('should have products with required properties', () => {
    const products = Products();
    const product = products[0];

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('subcategory');
    expect(product).toHaveProperty('gallery');
    expect(product).toHaveProperty('createdAt');
    expect(product).toHaveProperty('description');
  });

  it('should have products with valid categories', () => {
    const products = Products();
    const validCategories = [
      BAG_ACCESSORIES,
      BICYCLE_EQUIPMENT,
      IN_STOCK,
      CHEVRONS,
      CITY_COLLECTION,
    ];

    products.forEach((product) => {
      expect(validCategories).toContain(product.category);
    });
  });

  it('should have bicycle equipment products with valid subcategories', () => {
    const products = Products();
    const bicycleProducts = products.filter(
      (p) => p.category === BICYCLE_EQUIPMENT
    );
    const validSubcategories = Object.values(SUBCATEGORIES_BICYCLE_EQUIPMENT);

    bicycleProducts.forEach((product) => {
      if (product.subcategory) {
        expect(validSubcategories).toContain(product.subcategory);
      }
    });
  });

  it('should have products with valid price structure', () => {
    const products = Products();

    products.forEach((product) => {
      if ('cordura' in product.price) {
        expect(product.price.cordura).toHaveProperty('UAH');
        expect(product.price.cordura).toHaveProperty('EUR');
      } else {
        expect(product.price).toHaveProperty('UAH');
        expect(product.price).toHaveProperty('EUR');
      }
    });
  });

  it('should have products with valid description structure', () => {
    const products = Products();

    products.forEach((product) => {
      expect(product.description).toHaveProperty('short');
      expect(product.description).toHaveProperty('main');
      expect(product.description).toHaveProperty('conclusion');
    });
  });
});

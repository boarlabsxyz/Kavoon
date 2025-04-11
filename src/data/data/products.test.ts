import Products from './products';
import {
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  CITY_COLLECTION,
  CHEVRONS,
} from 'src/data/constants';

describe('Products', () => {
  it('returns an array of products', () => {
    const products = Products();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('contains products with correct structure', () => {
    const products = Products();
    const product = products[0];

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('gallery');
  });

  it('contains products from different categories', () => {
    const products = Products();
    const categories = products.map((p) => p.category);

    expect(categories).toContain(BAG_ACCESSORIES);
    expect(categories).toContain(BICYCLE_EQUIPMENT);
    expect(categories).toContain(CITY_COLLECTION);
    expect(categories).toContain(CHEVRONS);
  });

  it('contains products with valid price structure', () => {
    const products = Products();
    const product = products.find((p) => p.price);

    if (product) {
      const price = product.price;

      if ('UAH' in price) {
        // Currencies type
        expect(typeof price.UAH).toBe('number');
        expect(typeof price.EUR).toBe('number');
      } else {
        // FabricPrice type
        expect(price).toHaveProperty('cordura');
        expect(price).toHaveProperty('xpac');
        expect(typeof price.cordura.UAH).toBe('number');
        expect(typeof price.cordura.EUR).toBe('number');
        expect(typeof price.xpac.UAH).toBe('number');
        expect(typeof price.xpac.EUR).toBe('number');
      }
    }
  });

  it('contains products with valid description structure', () => {
    const products = Products();
    const product = products.find((p) => p.description);

    if (product) {
      expect(product.description).toHaveProperty('short');
      expect(product.description).toHaveProperty('main');
      expect(product.description).toHaveProperty('conclusion');
    }
  });

  it('contains products with valid gallery numbers', () => {
    const products = Products();
    const product = products.find((p) => p.gallery);

    if (product) {
      expect(typeof product.gallery).toBe('number');
      expect(product.gallery).toBeGreaterThan(0);
    }
  });

  it('contains products with valid createdAt dates', () => {
    const products = Products();
    const product = products.find((p) => p.createdAt);

    if (product) {
      expect(typeof product.createdAt).toBe('string');
      expect(new Date(product.createdAt).toString()).not.toBe('Invalid Date');
    }
  });

  it('contains products with valid fabric options', () => {
    const products = Products();
    const product = products.find((p) => p.fabrics && Array.isArray(p.fabrics));

    if (product && Array.isArray(product.fabrics)) {
      expect(product.fabrics.length).toBeGreaterThan(0);
      product.fabrics.forEach((fabric) => {
        expect(fabric).toHaveProperty('fabric');
      });
    }
  });

  it('contains products with valid embedVideo structure', () => {
    const products = Products();
    const product = products.find((p) => p.embedVideo);

    if (product?.embedVideo) {
      expect(product.embedVideo).toHaveProperty('id');
      expect(product.embedVideo).toHaveProperty('title');
    }
  });

  it('contains products with valid productKit structure', () => {
    const products = Products();
    const product = products.find((p) => p.productKit);

    if (product?.productKit) {
      expect(product.productKit).toHaveProperty('id');
      expect(product.productKit).toHaveProperty('name');
      expect(product.productKit).toHaveProperty('imgPath');
    }
  });
});

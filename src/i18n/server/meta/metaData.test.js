import metaData from './metaData.js';

describe('metaData', () => {
  test('should have all required locales for each product', () => {
    Object.keys(metaData).forEach((productKey) => {
      const product = metaData[productKey];
      expect(product).toHaveProperty('uk');
      expect(product).toHaveProperty('en');
      expect(product).toHaveProperty('pl');
    });
  });

  test('should have required fields for each translation', () => {
    Object.keys(metaData).forEach((productKey) => {
      const product = metaData[productKey];
      ['uk', 'en', 'pl'].forEach((locale) => {
        expect(product[locale]).toHaveProperty('title');
        expect(product[locale]).toHaveProperty('description');
      });
    });
  });

  test('should have correct structure for common translations', () => {
    expect(metaData['barrel-bag-without-valve']).toBe(
      metaData['barrel-bag-with-embroidery-blue']
    );
    expect(metaData['hamster']).toBe(
      metaData['hamster-cordura-navyblue-foxes']
    );
    expect(metaData['half-frame-bag']).toBe(
      metaData['half-frame-bag-xpac-orange']
    );
  });

  test('should have non-empty strings for titles and descriptions', () => {
    Object.keys(metaData).forEach((productKey) => {
      const product = metaData[productKey];
      ['uk', 'en', 'pl'].forEach((locale) => {
        expect(typeof product[locale].title).toBe('string');
        expect(typeof product[locale].description).toBe('string');
        expect(product[locale].title.length).toBeGreaterThan(0);
        expect(product[locale].description.length).toBeGreaterThan(0);
      });
    });
  });

  test('should have consistent structure across all products', () => {
    const firstProduct = Object.values(metaData)[0];
    const expectedStructure = {
      uk: { title: expect.any(String), description: expect.any(String) },
      en: { title: expect.any(String), description: expect.any(String) },
      pl: { title: expect.any(String), description: expect.any(String) },
    };

    Object.values(metaData).forEach((product) => {
      expect(product).toMatchObject(expectedStructure);
    });
  });

  test('should have unique product keys', () => {
    const keys = Object.keys(metaData);
    const uniqueKeys = new Set(keys);
    expect(keys.length).toBe(uniqueKeys.size);
  });

  test('should have consistent key format', () => {
    Object.keys(metaData).forEach((key) => {
      expect(key).toMatch(/^[a-z0-9-]+$/);
    });
  });
});

import plMeta from './plMeta.js';

describe('plMeta', () => {
  test('should contain Polish translations', () => {
    expect(plMeta['backpack-for-city'].title).toBe('Plecak miejski');
    expect(plMeta['backpack-for-city'].description).toContain(
      'Plecak - wygodny w codziennym użytkowaniu'
    );

    expect(plMeta['seat-bag-3l'].title).toBe('Torba podsiodłowa 3L');
    expect(plMeta['seat-bag-3l'].description).toContain(
      'Możesz regulować głośność'
    );
  });

  test('should have title and description for all products', () => {
    Object.keys(plMeta).forEach((productKey) => {
      expect(plMeta[productKey]).toHaveProperty('title');
      expect(plMeta[productKey]).toHaveProperty('description');
      expect(typeof plMeta[productKey].title).toBe('string');
      expect(typeof plMeta[productKey].description).toBe('string');
      expect(plMeta[productKey].title.length).toBeGreaterThan(0);
      expect(plMeta[productKey].description.length).toBeGreaterThan(0);
    });
  });

  test('should have correct Polish translations for common products', () => {
    expect(plMeta['barrel-bag-without-valve'].title).toBe(
      'Torba na kierownicę "Beczka na zamku błyskawicznym"'
    );
    expect(plMeta['hamster'].title).toBe(
      'Torba na kierownice na przekąski "Chomik"'
    );
    expect(plMeta['half-frame-bag'].title).toBe('Torba pod ramę "Połowa"');
  });

  test('should not contain translations for other languages', () => {
    Object.keys(plMeta).forEach((productKey) => {
      expect(plMeta[productKey]).not.toHaveProperty('uk');
      expect(plMeta[productKey]).not.toHaveProperty('en');
    });
  });
});

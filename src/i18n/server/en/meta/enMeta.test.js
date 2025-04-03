import enMeta from './enMeta.js';

describe('enMeta', () => {
  test('should contain English translations', () => {
    expect(enMeta['backpack-for-city'].title).toBe('Backpack for the city');
    expect(enMeta['backpack-for-city'].description).toContain(
      'Backpack - convenient for everyday use'
    );

    expect(enMeta['seat-bag-3l'].title).toBe('Seat Bag 3L');
    expect(enMeta['seat-bag-3l'].description).toContain(
      'You can adjust the volume'
    );
  });

  test('should have title and description for all products', () => {
    Object.keys(enMeta).forEach((productKey) => {
      expect(enMeta[productKey]).toHaveProperty('title');
      expect(enMeta[productKey]).toHaveProperty('description');
      expect(typeof enMeta[productKey].title).toBe('string');
      expect(typeof enMeta[productKey].description).toBe('string');
      expect(enMeta[productKey].title.length).toBeGreaterThan(0);
      expect(enMeta[productKey].description.length).toBeGreaterThan(0);
    });
  });

  test('should have correct English translations for common products', () => {
    expect(enMeta['barrel-bag-without-valve'].title).toBe(
      'Handlebar bag "Barrelbag without valve"'
    );
    expect(enMeta['hamster'].title).toBe('Stembag "Hamster"');
    expect(enMeta['half-frame-bag'].title).toBe('Framepack half');
  });

  test('should not contain translations for other languages', () => {
    Object.keys(enMeta).forEach((productKey) => {
      expect(enMeta[productKey]).not.toHaveProperty('uk');
      expect(enMeta[productKey]).not.toHaveProperty('pl');
    });
  });
});

import ukMeta from './ukMeta.js';

describe('ukMeta', () => {
  test('should contain Ukrainian translations', () => {
    expect(ukMeta['backpack-for-city'].title).toBe('Міський рюкзак');
    expect(ukMeta['backpack-for-city'].description).toContain(
      'Зручний у щоденному використанні'
    );

    expect(ukMeta['seat-bag-3l'].title).toBe('Підсідельна сумка 3л');
    expect(ukMeta['seat-bag-3l'].description).toContain(
      "Можна регулювати об'єм"
    );
  });

  test('should have title and description for all products', () => {
    Object.keys(ukMeta).forEach((productKey) => {
      expect(ukMeta[productKey]).toHaveProperty('title');
      expect(ukMeta[productKey]).toHaveProperty('description');
      expect(typeof ukMeta[productKey].title).toBe('string');
      expect(typeof ukMeta[productKey].description).toBe('string');
      expect(ukMeta[productKey].title.length).toBeGreaterThan(0);
      expect(ukMeta[productKey].description.length).toBeGreaterThan(0);
    });
  });

  test('should have correct Ukrainian translations for common products', () => {
    expect(ukMeta['barrel-bag-without-valve'].title).toBe(
      'Сумка на кермо "Бочонок на блискавці"'
    );
    expect(ukMeta['hamster'].title).toBe('Сумка на кермо для снеків "Хомʼяк"');
    expect(ukMeta['half-frame-bag'].title).toBe('Сумка під раму половинка');
  });

  test('should not contain translations for other languages', () => {
    Object.keys(ukMeta).forEach((productKey) => {
      expect(ukMeta[productKey]).not.toHaveProperty('en');
      expect(ukMeta[productKey]).not.toHaveProperty('pl');
    });
  });
});

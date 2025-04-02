import getMeta from './getMeta.js';

describe('getMeta', () => {
  test('should return Ukrainian translations for uk locale', () => {
    const result = getMeta('uk');

    expect(result['backpack-for-city'].title).toBe('Міський рюкзак');
    expect(result['backpack-for-city'].description).toContain(
      'Зручний у щоденному використанні'
    );

    expect(result['seat-bag-3l'].title).toBe('Підсідельна сумка 3л');
    expect(result['seat-bag-3l'].description).toContain(
      "Можна регулювати об'єм"
    );
  });

  test('should return English translations for en locale', () => {
    const result = getMeta('en');

    expect(result['backpack-for-city'].title).toBe('Backpack for the city');
    expect(result['backpack-for-city'].description).toContain(
      'Backpack - convenient for everyday use'
    );

    expect(result['seat-bag-3l'].title).toBe('Seat Bag 3L');
    expect(result['seat-bag-3l'].description).toContain(
      'You can adjust the volume'
    );
  });

  test('should return Polish translations for pl locale', () => {
    const result = getMeta('pl');

    expect(result['backpack-for-city'].title).toBe('Plecak miejski');
    expect(result['backpack-for-city'].description).toContain(
      'Plecak - wygodny w codziennym użytkowaniu'
    );

    expect(result['seat-bag-3l'].title).toBe('Torba podsiodłowa 3L');
    expect(result['seat-bag-3l'].description).toContain(
      'Możesz regulować objętość'
    );
  });

  test('should return empty object for unsupported locale', () => {
    const result = getMeta('fr');
    expect(result).toEqual({});
  });

  test('should return empty object for undefined locale', () => {
    const result = getMeta(undefined);
    expect(result).toEqual({});
  });

  test('should return empty object for null locale', () => {
    const result = getMeta(null);
    expect(result).toEqual({});
  });

  test('should handle common translations correctly', () => {
    const result = getMeta('uk');

    expect(result['barrel-bag-without-valve'].title).toBe(
      'Сумка на кермо "Бочонок на блискавці"'
    );
    expect(result['barrel-bag-with-embroidery-blue'].title).toBe(
      'Сумка на кермо "Бочонок на блискавці"'
    );

    expect(result['hamster'].title).toBe('Сумка на кермо для снеків "Хомяк"');
    expect(result['hamster-cordura-navyblue-foxes'].title).toBe(
      'Сумка на кермо для снеків "Хомяк"'
    );
  });
});

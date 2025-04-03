import getMeta from './getMeta.js';

const testTranslations = {
  uk: {
    'backpack-for-city': {
      title: 'Міський рюкзак',
      description: 'Зручний у щоденному використанні',
    },
    'seat-bag-3l': {
      title: 'Підсідельна сумка 3л',
      description: "Можна регулювати об'єм",
    },
    'barrel-bag-without-valve': {
      title: 'Сумка на кермо "Бочонок на блискавці"',
    },
    hamster: {
      title: 'Сумка на кермо для снеків "Хомʼяк"',
    },
  },
  en: {
    'backpack-for-city': {
      title: 'Backpack for the city',
      description: 'Backpack - convenient for everyday use',
    },
    'seat-bag-3l': {
      title: 'Seat Bag 3L',
      description: 'You can adjust the volume',
    },
    'barrel-bag-without-valve': {
      title: 'Handlebar bag "Barrelbag without valve"',
    },
    hamster: {
      title: 'Stembag "Hamster"',
    },
  },
  pl: {
    'backpack-for-city': {
      title: 'Plecak miejski',
      description: 'Plecak - wygodny w codziennym użytkowaniu',
    },
    'seat-bag-3l': {
      title: 'Torba podsiodłowa 3L',
      description: 'Możesz regulować głośność',
    },
    'barrel-bag-without-valve': {
      title: 'Torba na kierownicę "Beczka na zamku błyskawicznym"',
    },
    hamster: {
      title: 'Torba na kierownice na przekąski "Chomik"',
    },
  },
};

const verifyTranslations = (locale, productKey, expected) => {
  const result = getMeta(locale);
  expect(result[productKey].title).toBe(expected.title);
  if (expected.description) {
    expect(result[productKey].description).toContain(expected.description);
  }
};

describe('getMeta', () => {
  test('should return Ukrainian translations for uk locale', () => {
    verifyTranslations(
      'uk',
      'backpack-for-city',
      testTranslations.uk['backpack-for-city']
    );
    verifyTranslations('uk', 'seat-bag-3l', testTranslations.uk['seat-bag-3l']);
  });

  test('should return English translations for en locale', () => {
    verifyTranslations(
      'en',
      'backpack-for-city',
      testTranslations.en['backpack-for-city']
    );
    verifyTranslations('en', 'seat-bag-3l', testTranslations.en['seat-bag-3l']);
  });

  test('should return Polish translations for pl locale', () => {
    verifyTranslations(
      'pl',
      'backpack-for-city',
      testTranslations.pl['backpack-for-city']
    );
    verifyTranslations('pl', 'seat-bag-3l', testTranslations.pl['seat-bag-3l']);
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

    // Check barrel bag translations
    expect(result['barrel-bag-without-valve'].title).toBe(
      testTranslations.uk['barrel-bag-without-valve'].title
    );
    expect(result['barrel-bag-with-embroidery-blue'].title).toBe(
      testTranslations.uk['barrel-bag-without-valve'].title
    );

    // Check hamster translations
    expect(result['hamster'].title).toBe(testTranslations.uk['hamster'].title);
    expect(result['hamster-cordura-navyblue-foxes'].title).toBe(
      testTranslations.uk['hamster'].title
    );
  });
});

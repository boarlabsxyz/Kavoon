import { Language } from 'src/types/language';
import getActiveLocale from './getActiveLocale';

describe('getActiveLocale()', () => {
  it('should return the correct language object when the locale exists', () => {
    const locale = {
      src: '/icons/country-flag-ua.svg',
      name: 'Українська',
      langCode: 'UA',
      locale: 'uk',
    };
    const testedLocale = 'uk';

    expect(getActiveLocale(testedLocale)).toStrictEqual(locale);
  });

  it('should return "undefined" when pass unsupported locale', () => {
    const testedLocale = 'de' as Language;

    expect(getActiveLocale(testedLocale)).toBeUndefined();
  });
});

import { expect, test, describe } from '@jest/globals';
import lang from './lang';

describe('lang Function', () => {
  const en = 'en';
  const ua = 'uk';
  const pl = 'pl';
  const u = undefined;
  const n = null;
  const emptyString = '';
  const correctValue = 'CLickHere';
  const unexpectedValue = 'bla-bla';

  test('should return defined value', () => {
    expect(lang(u, ua)).toBeDefined();
    expect(lang(u, en)).toBeDefined();
    expect(lang(u, pl)).toBeDefined();
    expect(lang(n, ua)).toBeDefined();
    expect(lang(n, en)).toBeDefined();
    expect(lang(n, pl)).toBeDefined();
    expect(lang(n, u)).toBeDefined();
  });

  test('should return correct translation', () => {
    expect(lang(correctValue, ua)).toBe('Клікни сюди');
    expect(lang(correctValue, en)).toBe('Click here');
    expect(lang(correctValue, pl)).toBe('Kliknij tutaj');
  });

  test('should be a string', () => {
    expect(typeof lang(correctValue, en)).toBe('string');
    expect(typeof lang(correctValue, ua)).toBe('string');
    expect(typeof lang(correctValue, pl)).toBe('string');
    expect(typeof lang(unexpectedValue, en)).toBe('string');
    expect(typeof lang(unexpectedValue, ua)).toBe('string');
    expect(typeof lang(unexpectedValue, pl)).toBe('string');
  });

  test('should return an empty string', () => {
    expect(lang(u, ua)).toBe(emptyString);
    expect(lang(u, en)).toBe(emptyString);
    expect(lang(u, pl)).toBe(emptyString);
    expect(lang(n, ua)).toBe(emptyString);
    expect(lang(n, en)).toBe(emptyString);
    expect(lang(n, pl)).toBe(emptyString);
    expect(lang(emptyString, ua)).toBe(emptyString);
    expect(lang(emptyString, en)).toBe(emptyString);
    expect(lang(emptyString, pl)).toBe(emptyString);
    expect(lang(unexpectedValue, en)).toBe(emptyString);
    expect(lang(unexpectedValue, ua)).toBe(emptyString);
    expect(lang(unexpectedValue, pl)).toBe(emptyString);
  });
});

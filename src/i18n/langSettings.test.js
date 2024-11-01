import { expect, test, describe } from '@jest/globals';
import langSettings from './langSettings';

describe('test langSettings function', () => {
  const en = 'en';
  const ua = 'uk';
  const pl = 'pl';
  const folderName = 'products';

  test('should return an array', () => {
    expect(Array.isArray(langSettings(folderName, ua))).toBe(true);
    expect(Array.isArray(langSettings(folderName, en))).toBe(true);
    expect(Array.isArray(langSettings(folderName, pl))).toBe(true);
  });

  test('length should be equal to three', () => {
    expect(langSettings(folderName, ua)).toHaveLength(3);
    expect(langSettings(folderName, en)).toHaveLength(3);
    expect(langSettings(folderName, pl)).toHaveLength(3);
  });
});

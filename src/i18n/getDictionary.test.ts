import { Language } from 'src/types/language';
import getDictionary from './getDictionary';

jest.mock(
  'src/i18n/server/en/meta',
  () => ({
    default: { title: 'Title' },
  }),
  { virtual: true }
);

jest.mock(
  'src/i18n/server/uk/meta',
  () => ({
    default: { title: 'Заголовок' },
  }),
  { virtual: true }
);

describe('getDictionary', () => {
  const language: Language = 'en';
  const pageName = 'meta';

  const invalidLanguage = 'invalid' as Language;
  const invalidPageName = 'unknown';

  afterEach(() => {
    jest.resetModules();
  });

  it('should successfully import and return the dictionary for valid language and pageName', async () => {
    const result = await getDictionary(language, pageName);
    expect(result).toEqual({ default: { title: 'Title' } });
  });

  it('should handle import errors and throw the appropriate error', async () => {
    await expect(getDictionary(invalidLanguage, pageName)).rejects.toThrow();

    await expect(getDictionary(language, invalidPageName)).rejects.toThrow();
  });

  it('should log an error to the console when import fails', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await expect(
      getDictionary(invalidLanguage, invalidPageName)
    ).rejects.toThrow();

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});

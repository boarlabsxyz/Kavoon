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
    const consoleErrorMock = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    try {
      await expect(getDictionary(invalidLanguage, pageName)).rejects.toThrow();
      await expect(getDictionary(language, invalidPageName)).rejects.toThrow();
      await expect(
        getDictionary(invalidLanguage, invalidPageName)
      ).rejects.toThrow();

      expect(consoleErrorMock).toHaveBeenCalledTimes(3);
    } finally {
      consoleErrorMock.mockRestore();
    }
  });
});

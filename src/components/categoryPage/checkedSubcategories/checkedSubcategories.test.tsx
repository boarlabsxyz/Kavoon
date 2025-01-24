import { render, screen, fireEvent } from '@testing-library/react';
import CheckedSubcategories from './checkedSubcategories';
import { Subcategory } from 'src/data/constants';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

jest.mock('src/i18n/lang', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('CheckedSubcategories', () => {
  const mockSetSubcategories = jest.fn();
  const subcategories: Subcategory[] = ['HandlebarBags', 'SeatBags'];
  const language: Language = 'en';

  beforeEach(() => {
    jest.clearAllMocks();
    (translate as jest.Mock).mockImplementation((key) => key);
  });

  const setup = () => {
    render(
      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={mockSetSubcategories}
        language={language}
      />
    );
    return screen.getAllByTestId('uncheck-button');
  };

  const testKeyAction = (
    key: string,
    code: string,
    expectedSubcategories: Subcategory[]
  ) => {
    const uncheckButtons = setup();
    uncheckButtons[0].focus();
    fireEvent.keyDown(uncheckButtons[0], { key, code });
    expect(mockSetSubcategories).toHaveBeenCalledTimes(1);
    const setSubcategoriesCallback = mockSetSubcategories.mock.calls[0][0];
    const updatedSubcategories = setSubcategoriesCallback(subcategories);
    expect(updatedSubcategories).toEqual(expectedSubcategories);
  };

  it('renders the subcategories', () => {
    setup();

    subcategories.forEach((subcategory) => {
      expect(screen.getByText(subcategory)).toBeInTheDocument();
    });

    expect(translate).toHaveBeenCalledTimes(subcategories.length);
    subcategories.forEach((subcategory) => {
      expect(translate).toHaveBeenCalledWith(subcategory, language);
    });
  });

  it('calls setSubcategories with the correct value when uncheck button is clicked', () => {
    const uncheckButtons = setup();
    fireEvent.click(uncheckButtons[0]);

    expect(mockSetSubcategories).toHaveBeenCalledTimes(1);
    expect(mockSetSubcategories).toHaveBeenCalledWith(expect.any(Function));

    const setSubcategoriesCallback = mockSetSubcategories.mock.calls[0][0];
    const updatedSubcategories = setSubcategoriesCallback(subcategories);
    expect(updatedSubcategories).toEqual(['SeatBags']);
  });

  it('allows focus on uncheck button via tab key', () => {
    const uncheckButtons = setup();
    expect(uncheckButtons[0]).toHaveAttribute('tabIndex', '0');
  });

  it('triggers uncheck action when Enter key is pressed on a focused uncheck button', () => {
    testKeyAction('Enter', 'Enter', ['SeatBags']);
  });

  it('triggers uncheck action when Space key is pressed on a focused uncheck button', () => {
    testKeyAction(' ', 'Space', ['SeatBags']);
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import CheckedSubcategories from './checkedSubcategories';
import { Subcategory } from 'src/constants';
import translate from 'i18n/lang';
import { Language } from 'types/language';

jest.mock('i18n/lang', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('CheckedSubcategories', () => {
  const mockSetSubcategories = jest.fn();
  const subcategories: Subcategory[] = ['HandlebarBags', 'SeatBags'];
  const language: Language = 'en';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the subcategories', () => {
    (translate as jest.Mock).mockImplementation((key) => key);

    render(
      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={mockSetSubcategories}
        language={language}
      />
    );

    subcategories.forEach((subcategory) => {
      expect(screen.getByText(subcategory)).toBeInTheDocument();
    });

    expect(translate).toHaveBeenCalledTimes(subcategories.length);
    subcategories.forEach((subcategory) => {
      expect(translate).toHaveBeenCalledWith(subcategory, language);
    });
  });

  it('calls setSubcategories with the correct value when uncheck button is clicked', () => {
    (translate as jest.Mock).mockImplementation((key) => key);

    render(
      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={mockSetSubcategories}
        language={language}
      />
    );

    const uncheckButtons = screen.getAllByTestId('uncheck-button');

    fireEvent.click(uncheckButtons[0]);

    expect(mockSetSubcategories).toHaveBeenCalledTimes(1);
    expect(mockSetSubcategories).toHaveBeenCalledWith(expect.any(Function));

    const setSubcategoriesCallback = mockSetSubcategories.mock.calls[0][0];
    const updatedSubcategories = setSubcategoriesCallback(subcategories);
    expect(updatedSubcategories).toEqual(['SeatBags']);
  });
});

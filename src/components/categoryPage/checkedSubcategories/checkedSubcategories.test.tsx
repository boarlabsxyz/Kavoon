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

  it('allows focus on uncheck button via tab key', () => {
    (translate as jest.Mock).mockImplementation((key) => key);

    render(
      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={mockSetSubcategories}
        language={language}
      />
    );

    const uncheckButtons = screen.getAllByTestId('uncheck-button');

    expect(uncheckButtons[0]).toHaveAttribute('tabIndex', '0');
  });

  it('triggers uncheck action when Enter key is pressed on a focused uncheck button', () => {
    (translate as jest.Mock).mockImplementation((key) => key);

    render(
      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={mockSetSubcategories}
        language={language}
      />
    );

    const uncheckButtons = screen.getAllByTestId('uncheck-button');

    uncheckButtons[0].focus();
    fireEvent.keyDown(uncheckButtons[0], { key: 'Enter', code: 'Enter' });

    expect(mockSetSubcategories).toHaveBeenCalledTimes(1);
    const setSubcategoriesCallback = mockSetSubcategories.mock.calls[0][0];
    const updatedSubcategories = setSubcategoriesCallback(subcategories);
    expect(updatedSubcategories).toEqual(['SeatBags']);
  });

  it('triggers uncheck action when Space key is pressed on a focused uncheck button', () => {
    (translate as jest.Mock).mockImplementation((key) => key);

    render(
      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={mockSetSubcategories}
        language={language}
      />
    );

    const uncheckButtons = screen.getAllByTestId('uncheck-button');

    uncheckButtons[0].focus();
    fireEvent.keyDown(uncheckButtons[0], { key: ' ', code: 'Space' });

    expect(mockSetSubcategories).toHaveBeenCalledTimes(1);
    const setSubcategoriesCallback = mockSetSubcategories.mock.calls[0][0];
    const updatedSubcategories = setSubcategoriesCallback(subcategories);
    expect(updatedSubcategories).toEqual(['SeatBags']);
  });
});

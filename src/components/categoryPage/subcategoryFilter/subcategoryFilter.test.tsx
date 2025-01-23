import { render, screen, fireEvent } from '@testing-library/react';
import SubcategoryFilter from 'src/components/categoryPage/subcategoryFilter';
import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  Subcategory,
} from 'src/data/constants';
import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

jest.mock('src/hooks/useOutsideClick', () => jest.fn());
jest.mock('src/icons/filterIcon', () => (props: any) => (
  <svg {...props}>FilterIcon</svg>
));

describe('SubcategoryFilter', () => {
  const defaultProps = {
    subcategories: [],
    setSubcategories: jest.fn(),
    language: 'en' as Language,
  };

  const allSubcategories = Object.keys(
    SUBCATEGORIES_BICYCLE_EQUIPMENT
  ) as Subcategory[];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(<SubcategoryFilter {...defaultProps} />);
    expect(
      screen.getByText(translate('FilterByType', defaultProps.language))
    ).toBeInTheDocument();
  });

  it('should display all subcategories in the list', () => {
    render(<SubcategoryFilter {...defaultProps} />);
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );
    allSubcategories.forEach((subcategory) => {
      expect(
        screen.getByLabelText(translate(subcategory, defaultProps.language))
      ).toBeInTheDocument();
    });
  });

  it('should call setSubcategories with the correct updated value when a checkbox is clicked', () => {
    const setSubcategoriesMock = jest.fn();
    render(
      <SubcategoryFilter
        {...defaultProps}
        setSubcategories={setSubcategoriesMock}
      />
    );
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );
    const firstCheckbox = screen.getByLabelText(
      translate(allSubcategories[0], defaultProps.language)
    );
    fireEvent.click(firstCheckbox);
    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    const updateFunction = setSubcategoriesMock.mock.calls[0][0];
    const updatedSubcategories = updateFunction([]);
    expect(updatedSubcategories).toEqual([allSubcategories[0]]);
  });

  it('should uncheck a checkbox and remove the subcategory from selected when unchecked', () => {
    const setSubcategoriesMock = jest.fn();
    const checkedSubcategories = [allSubcategories[0]];
    render(
      <SubcategoryFilter
        {...defaultProps}
        subcategories={checkedSubcategories}
        setSubcategories={setSubcategoriesMock}
      />
    );
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );
    const firstCheckbox = screen.getByLabelText(
      translate(allSubcategories[0], defaultProps.language)
    );
    fireEvent.click(firstCheckbox);
    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    const updatedSubcategories =
      setSubcategoriesMock.mock.calls[0][0](checkedSubcategories);
    expect(updatedSubcategories).toEqual([]);
  });

  it('should navigate the list using the ArrowDown key', () => {
    render(<SubcategoryFilter {...defaultProps} />);
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key: 'ArrowDown' }
    );
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[0], defaultProps.language),
      })
    ).toHaveFocus();

    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key: 'ArrowDown' }
    );
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[1], defaultProps.language),
      })
    ).toHaveFocus();
  });

  it('should navigate the list using the ArrowUp key', () => {
    render(<SubcategoryFilter {...defaultProps} />);
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key: 'ArrowDown' }
    );
    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key: 'ArrowDown' }
    );

    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key: 'ArrowUp' }
    );
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[0], defaultProps.language),
      })
    ).toHaveFocus();
  });

  it('should select an item when Enter is pressed on a focused item', async () => {
    const setSubcategoriesMock = jest.fn();
    render(
      <SubcategoryFilter
        {...defaultProps}
        setSubcategories={setSubcategoriesMock}
      />
    );

    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    const firstItem = screen.getByText(
      translate(allSubcategories[0], defaultProps.language)
    );
    fireEvent.keyDown(firstItem, { key: 'Enter' });

    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    expect(setSubcategoriesMock).toHaveBeenCalledWith(expect.any(Function));
    const enterUpdate = setSubcategoriesMock.mock.calls[0][0]([]);
    expect(enterUpdate).toEqual([allSubcategories[0]]);
  });

  it('should select an item when Space is pressed on a focused item', async () => {
    const setSubcategoriesMock = jest.fn();
    render(
      <SubcategoryFilter
        {...defaultProps}
        setSubcategories={setSubcategoriesMock}
      />
    );

    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    const firstItem = screen.getByText(
      translate(allSubcategories[0], defaultProps.language)
    );

    fireEvent.keyDown(firstItem, { key: ' ' });

    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    expect(setSubcategoriesMock).toHaveBeenCalledWith(expect.any(Function));
    const enterUpdate = setSubcategoriesMock.mock.calls[0][0]([]);
    expect(enterUpdate).toEqual([allSubcategories[0]]);
  });

  it('should close the dropdown when Escape is pressed', () => {
    render(<SubcategoryFilter {...defaultProps} />);
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key: 'Escape' }
    );
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should trap focus within dropdown when open', () => {
    render(<SubcategoryFilter {...defaultProps} />);

    // Open dropdown
    const filterButton = screen.getByText(
      translate('FilterByType', defaultProps.language)
    );
    fireEvent.click(filterButton);

    // Verify aria attributes
    expect(filterButton).toHaveAttribute('aria-expanded', 'true');

    // Try to Tab out
    const lastOption = screen.getByRole('option', {
      name: translate(
        allSubcategories[allSubcategories.length - 1],
        defaultProps.language
      ),
    });
    fireEvent.keyDown(lastOption, { key: 'Tab' });

    // Should cycle back to first option
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[0], defaultProps.language),
      })
    ).toHaveFocus();
  });
});

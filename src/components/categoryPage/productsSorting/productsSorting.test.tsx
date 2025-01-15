import { render, screen, fireEvent, waitFor } from '@testing-library/react';

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

  it('should toggle className for the subcategory list when clicking the title', () => {
    render(<SubcategoryFilter {...defaultProps} />);

    const listElement = screen.getByRole('list');

    expect(listElement).toHaveClass('hiddenList');

    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    expect(listElement).not.toHaveClass('hiddenList');

    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );

    expect(listElement).toHaveClass('hiddenList');
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

    const updateFunction = setSubcategoriesMock.mock.calls[0][0];

    const updatedSubcategories = updateFunction([]);
    expect(updatedSubcategories).toEqual([]);
  });
});

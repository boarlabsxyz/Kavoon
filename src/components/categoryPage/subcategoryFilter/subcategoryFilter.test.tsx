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

  const renderComponent = (props = defaultProps) => {
    render(<SubcategoryFilter {...props} />);
  };

  const clickFilterButton = () => {
    fireEvent.click(
      screen.getByText(translate('FilterByType', defaultProps.language))
    );
  };

  const toggleCheckbox = (subcategory: Subcategory, checked = true) => {
    fireEvent.click(
      screen.getByLabelText(translate(subcategory, defaultProps.language))
    );
  };

  const pressKey = (key: string) => {
    fireEvent.keyDown(
      screen.getByText(translate('FilterByType', defaultProps.language)),
      { key }
    );
  };

  const setupWithSubcategories = (subcategories = []) => {
    const setSubcategoriesMock = jest.fn();
    renderComponent({
      ...defaultProps,
      subcategories,
      setSubcategories: setSubcategoriesMock,
    });
    clickFilterButton();
    return { setSubcategoriesMock };
  };

  const pressKeyAndCheckSelection = (key: string) => {
    const { setSubcategoriesMock } = setupWithSubcategories();
    const firstItem = screen.getByText(
      translate(allSubcategories[0], defaultProps.language)
    );
    fireEvent.keyDown(firstItem, { key });
    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    expect(setSubcategoriesMock).toHaveBeenCalledWith(expect.any(Function));
    const updateFunction = setSubcategoriesMock.mock.calls[0][0];
    const updatedSubcategories = updateFunction([]);
    expect(updatedSubcategories).toEqual([allSubcategories[0]]);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    renderComponent();
    expect(
      screen.getByText(translate('FilterByType', defaultProps.language))
    ).toBeInTheDocument();
  });

  it('should display all subcategories in the list', () => {
    renderComponent();
    clickFilterButton();
    allSubcategories.forEach((subcategory) => {
      expect(
        screen.getByLabelText(translate(subcategory, defaultProps.language))
      ).toBeInTheDocument();
    });
  });

  it('should call setSubcategories with the correct updated value when a checkbox is clicked', () => {
    const { setSubcategoriesMock } = setupWithSubcategories();
    toggleCheckbox(allSubcategories[0]);
    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    const updateFunction = setSubcategoriesMock.mock.calls[0][0];
    const updatedSubcategories = updateFunction([]);
    expect(updatedSubcategories).toEqual([allSubcategories[0]]);
  });

  it('should uncheck a checkbox and remove the subcategory from selected when unchecked', () => {
    const checkedSubcategories = [allSubcategories[0]];
    const { setSubcategoriesMock } =
      setupWithSubcategories(checkedSubcategories);
    toggleCheckbox(allSubcategories[0], false);
    expect(setSubcategoriesMock).toHaveBeenCalledTimes(1);
    const updatedSubcategories =
      setSubcategoriesMock.mock.calls[0][0](checkedSubcategories);
    expect(updatedSubcategories).toEqual([]);
  });

  it('should navigate the list using the ArrowDown key', () => {
    renderComponent();
    clickFilterButton();
    pressKey('ArrowDown');
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[0], defaultProps.language),
      })
    ).toHaveFocus();
    pressKey('ArrowDown');
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[1], defaultProps.language),
      })
    ).toHaveFocus();
  });

  it('should navigate the list using the ArrowUp key', () => {
    renderComponent();
    clickFilterButton();
    pressKey('ArrowDown');
    pressKey('ArrowDown');
    pressKey('ArrowUp');
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[0], defaultProps.language),
      })
    ).toHaveFocus();
  });

  it('should select an item when Enter is pressed on a focused item', () => {
    pressKeyAndCheckSelection('Enter');
  });

  it('should select an item when Space is pressed on a focused item', () => {
    pressKeyAndCheckSelection(' ');
  });

  it('should close the dropdown when Escape is pressed', () => {
    renderComponent();
    clickFilterButton();
    pressKey('Escape');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should trap focus within dropdown when open', () => {
    renderComponent();
    const filterButton = screen.getByText(
      translate('FilterByType', defaultProps.language)
    );
    fireEvent.click(filterButton);
    expect(filterButton).toHaveAttribute('aria-expanded', 'true');
    const lastOption = screen.getByRole('option', {
      name: translate(
        allSubcategories[allSubcategories.length - 1],
        defaultProps.language
      ),
    });
    fireEvent.keyDown(lastOption, { key: 'Tab' });
    expect(
      screen.getByRole('option', {
        name: translate(allSubcategories[0], defaultProps.language),
      })
    ).toHaveFocus();
  });
});

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FilteringAndSortingSection from './filteringAndSortingSection';
import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';
import { of } from 'rxjs';
import vmFactory from 'src/data/viewModels/shopListVM';
import translate from 'src/i18n/lang';

jest.mock('src/data/viewModels/shopListVM', () => jest.fn());
jest.mock('src/helpers/getSortingOptions', () => ({
  getSortingOptions: jest.fn(() => [
    { label: 'mostPopular' },
    { label: 'newest' },
  ]),
}));

describe('FilteringAndSortingSection Component', () => {
  const categoryId = 'bicycle-equipment' as Category;
  const lang = 'en' as Language;
  let mockFilterByCategoryAndSubcategory: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockFilterByCategoryAndSubcategory = jest.fn(() => of([]));
    (vmFactory as jest.Mock).mockImplementation(() => ({
      productsListVM: {
        filterByCategoryAndSubcategory: mockFilterByCategoryAndSubcategory,
      },
    }));
  });

  const renderComponent = () =>
    render(<FilteringAndSortingSection categoryId={categoryId} lang={lang} />);

  it('should render FilteringAndSortingSection component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(translate('ProductsShown2', lang))
    ).toBeInTheDocument();
    expect(
      screen.getByText(translate('FilterByType', lang))
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Sort products')).toBeInTheDocument();
  });

  it('should call filterByCategoryAndSubcategory with correct parameters', async () => {
    renderComponent();

    const sortingButton = screen.getByLabelText('Sort products');
    fireEvent.click(sortingButton);

    await waitFor(() => {
      expect(mockFilterByCategoryAndSubcategory).toHaveBeenCalledTimes(1);
      expect(mockFilterByCategoryAndSubcategory).toHaveBeenCalledWith(
        'bicycle-equipment',
        null,
        'hasTopBadge',
        'desc'
      );
    });
  });
});

import React from 'react';
import { of } from 'rxjs';

import { render, screen, fireEvent } from '@testing-library/react';

import FilterSubsection from './filterSubsection';
import vmFactory from 'src/data/viewModels/shopListVM';
import { BICYCLE_EQUIPMENT, Category } from 'src/data/constants';
import translate from 'src/i18n/lang';
import toKebabCase from 'src/helpers/toKebabCase';

jest.mock('data/viewModels/shopListVM');

const mockProductsListVM = {
  filterByCategoryAndSubcategory: jest.fn().mockReturnValue(of([])),
};

const language = 'en';

describe('FilterSubsection', () => {
  beforeEach(() => {
    (vmFactory as jest.Mock).mockReturnValue({
      productsListVM: mockProductsListVM,
    });
  });

  it('should correct render for Bycycle equipment', () => {
    render(
      <FilterSubsection
        lang={language}
        categoryId={toKebabCase(BICYCLE_EQUIPMENT) as Category}
      />
    );

    expect(
      screen.getByText(translate('ProductsShown2', language))
    ).toBeInTheDocument();
    expect(
      screen.getByText(translate('FilterByType', language))
    ).toBeInTheDocument();
  });

  it('should update subcategories when a subcategory is selected', () => {
    render(
      <FilterSubsection
        lang="en"
        categoryId={toKebabCase(BICYCLE_EQUIPMENT) as Category}
      />
    );

    fireEvent.click(screen.getByRole('checkbox', { name: 'Seat Bags' }));

    expect(
      mockProductsListVM.filterByCategoryAndSubcategory
    ).toHaveBeenCalledWith(toKebabCase(BICYCLE_EQUIPMENT), ['SeatBags']);
  });
});

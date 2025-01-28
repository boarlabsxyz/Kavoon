'use client';

import { useState } from 'react';

import { Observable } from 'rxjs';

import ProductsList from 'src/components/categoryPage/productsList';
import ShopPageStatus from 'src/components/shopPage/shopPageStatus';
import CheckedSubcategories from 'src/components/categoryPage/checkedSubcategories';
import SubcategoryFilter from 'src/components/categoryPage/subcategoryFilter';

import vmFactory from 'src/data/viewModels/shopListVM';
import ProductListItemVm from 'src/data/viewModels/shop/productListItemVM';
import {
  BICYCLE_EQUIPMENT,
  Category,
  IN_STOCK,
  ALL_PRODUCTS,
  Subcategory,
  INITIAL_SORTING_OPTION,
} from 'src/data/constants';
import { Language } from 'src/types/language';
import { SortingDirection } from 'src/types/sorting';
import toKebabCase from 'src/helpers/toKebabCase';

import st from './filteringAndSortingSection.module.css';
import ProductsSorting from 'src/components/categoryPage/productsSorting';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';

type Props = {
  categoryId: Category;
  lang: Language;
};

function FilteringAndSortingSection({ lang, categoryId }: Props) {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>(
    INITIAL_SORTING_OPTION
  );

  const handleSortChange = (option: string) => {
    try {
      const [field, direction] = option.split('-');
      if (!isSortField(field) || !isSortDirection(direction)) {
        // eslint-disable-next-line no-console
        console.error(
          `Invalid sort option: ${option}, falling back to default`
        );
        setSelectedOption(INITIAL_SORTING_OPTION);
        return;
      }
      setSelectedOption(option);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error processing sort option:', error);
    }
  };

  const [field, direction] = selectedOption.split('-');
  if (!isSortField(field) || !isSortDirection(direction)) {
    throw new Error(`Invalid sort option: ${selectedOption}`);
  }

  function isSortField(field: string): field is keyof ProductListItemVM {
    return ['hasTopBadge', 'createdAt', 'priceEURO', 'priceUAH'].includes(
      field
    );
  }

  function isSortDirection(direction: string): direction is SortingDirection {
    return ['asc', 'desc'].includes(direction);
  }

  const vm = vmFactory();
  const filteredVm = vm.productsListVM.filterByCategoryAndSubcategory(
    categoryId,
    subcategories.length > 0 ? subcategories : null,
    field,
    direction as SortingDirection
  ) as Observable<ProductListItemVm[]>;

  const isFilterApplicableForCategory =
    categoryId === toKebabCase(BICYCLE_EQUIPMENT) ||
    categoryId === toKebabCase(IN_STOCK) ||
    categoryId === toKebabCase(ALL_PRODUCTS);
  return (
    <>
      <div className={st.wrapper}>
        <ShopPageStatus language={lang} vm={filteredVm} />
        {isFilterApplicableForCategory && (
          <SubcategoryFilter
            subcategories={subcategories}
            setSubcategories={setSubcategories}
            language={lang}
          />
        )}
        <ProductsSorting handleSortChange={handleSortChange} language={lang} />
      </div>

      <CheckedSubcategories
        subcategories={subcategories}
        setSubcategories={setSubcategories}
        language={lang}
      />

      <ProductsList vm={filteredVm} />
    </>
  );
}

export default FilteringAndSortingSection;

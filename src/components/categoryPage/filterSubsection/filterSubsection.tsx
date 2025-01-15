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
} from 'src/data/constants';
import { Language } from 'src/types/language';
import toKebabCase from 'src/helpers/toKebabCase';

import st from './filterSubsection.module.css';
import ProductsSorting from '../productsSorting';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import { getSortingOptions } from 'src/helpers/getSortingOptions';

type Props = {
  categoryId: Category;
  lang: Language;
};

function FilterSubsection({ lang, categoryId }: Props) {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>(
    getSortingOptions(lang).at(0).label
  );

  const handleSortChange = (option: string) => {
    setSelectedOption(option);
  };

  const [sortField, sortDirection] = selectedOption.split('-') as [
    keyof ProductListItemVM,
    'asc' | 'desc',
  ];

  const vm = vmFactory();
  const filteredVm = vm.productsListVM.filterByCategoryAndSubcategory(
    categoryId,
    subcategories.length > 0 ? subcategories : null,
    sortField,
    sortDirection
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

export default FilterSubsection;

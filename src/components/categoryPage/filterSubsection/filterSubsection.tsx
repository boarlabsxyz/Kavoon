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
  Subcategory,
} from 'src/data/constants';
import { Language } from 'src/types/language';
import toKebabCase from 'src/helpers/toKebabCase';

import st from './filterSubsection.module.css';

type Props = {
  categoryId: Category;
  lang: Language;
};

function FilterSubsection({ lang, categoryId }: Props) {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const vm = vmFactory();
  const filteredVm = vm.productsListVM.filterByCategoryAndSubcategory(
    categoryId,
    subcategories.length > 0 ? subcategories : null
  ) as Observable<ProductListItemVm[]>;

  // const isEquipmentOrStockCategory =
  //   categoryId === toKebabCase(BICYCLE_EQUIPMENT) ||
  //   categoryId === toKebabCase(IN_STOCK);
  return (
    <>
      <div className={st.wrapper}>
        <ShopPageStatus language={lang} vm={filteredVm} />
        {
          /*isEquipmentOrStockCategory &&*/ <SubcategoryFilter
            subcategories={subcategories}
            setSubcategories={setSubcategories}
            language={lang}
          />
        }
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

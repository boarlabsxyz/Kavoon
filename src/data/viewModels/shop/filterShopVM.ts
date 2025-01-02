import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import toKebabCase from 'src/helpers/toKebabCase';
import { Category, Subcategory } from 'src/data/constants';

const filterShopVM = ({ productVMs: productList }) => {
  const productData: Observable<ProductListItemVM[]> = of(productList);

  const filterByCategory = (filterValue: Category) =>
    combineLatest([of(filterValue), productData]).pipe(
      switchMap(([category, products]) =>
        of(products).pipe(
          map((data) => data.filter((bag) => bag.category === category))
        )
      )
    );

  const filterByCategoryAndSubcategory = (
    categoryValue: Category,
    subcategories: Subcategory[] | null
  ) =>
    combineLatest([of(categoryValue), productData]).pipe(
      switchMap(([category, products]) =>
        of(products).pipe(
          map((data) =>
            data.filter((bag) => toKebabCase(bag.category) === category)
          ),
          map((filteredByCategory) =>
            subcategories
              ? filteredByCategory.filter((bag) =>
                  subcategories.includes(bag.subcategory)
                )
              : filteredByCategory
          )
        )
      )
    );

  const filterAndLimitByCategory = (filterValue: Category) =>
    filterByCategory(filterValue).pipe(
      map((filteredProducts) => filteredProducts.slice(0, 4))
    );

  return {
    filterByCategoryAndSubcategory,
    filterAndLimitByCategory,
  };
};

export default filterShopVM;

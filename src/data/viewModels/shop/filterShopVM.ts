import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import toKebabCase from 'src/helpers/toKebabCase';
import { Category, Subcategory } from 'src/data/constants';
import sortProducts from 'src/helpers/sortProducts';

const filterShopVM = ({
  productVMs: productList,
}: {
  productVMs: ProductListItemVM[];
}) => {
  const productData: Observable<ProductListItemVM[]> = of(productList);

  const filterByCategory = (filterValue: Category) => {
    return combineLatest([of(filterValue), productData]).pipe(
      switchMap(([category, products]) =>
        of(products).pipe(
          map((data) => data.filter((bag) => bag.category === category))
        )
      )
    );
  };

  const filterByCategoryAndSubcategory = (
    categoryValue: Category,
    subcategories: Subcategory[] | null,
    sortField: keyof ProductListItemVM = 'hasTopBadge',
    sortDirection: 'asc' | 'desc' = 'desc'
  ) =>
    combineLatest([of(categoryValue), productData]).pipe(
      switchMap(([category, products]) =>
        of(products).pipe(
          map((data) => {
            const nonAllProductsIndex = data.findIndex(
              (product) => toKebabCase(product.category) === category
            );
            if (nonAllProductsIndex === -1) {
              return data;
            }
            return data.filter((bag) => toKebabCase(bag.category) === category);
          }),
          map((filteredByCategory) =>
            subcategories
              ? filteredByCategory.filter((bag) =>
                  subcategories.includes(bag.subcategory)
                )
              : filteredByCategory
          ),
          map((filteredAndSubcategories) =>
            sortProducts(filteredAndSubcategories, sortField, sortDirection)
          )
        )
      )
    );

  const filterAndLimitByCategory = (filterValue: Category, limit = 4) =>
    filterByCategory(filterValue).pipe(
      map((filteredProducts) => filteredProducts.slice(0, limit))
    );

  return {
    filterByCategoryAndSubcategory,
    filterAndLimitByCategory,
  };
};

export default filterShopVM;

import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import toKebabCase from 'src/helpers/toKebabCase';
import { Category, Subcategory, ALL_PRODUCTS } from 'src/data/constants';
import sortProducts from 'src/helpers/sortProducts';
import { SortingDirection } from 'src/types/sorting';

const filterProductsByCategory = (
  products: ProductListItemVM[],
  category: Category
) =>
  products.filter(
    (product) => toKebabCase(product.category) === toKebabCase(category)
  );

const filterProductsBySubcategory = (
  products: ProductListItemVM[],
  subcategories: Subcategory[] | null
) =>
  subcategories
    ? products.filter((product) => subcategories.includes(product.subcategory))
    : products;

const filterShopVM = ({
  productVMs: productList,
}: {
  productVMs: ProductListItemVM[];
}) => {
  const productData: Observable<ProductListItemVM[]> = of(productList);

  const filterByCategory = (filterValue: Category) => {
    return combineLatest([of(filterValue), productData]).pipe(
      switchMap(([category, products]) =>
        of(filterProductsByCategory(products, category))
      )
    );
  };

  const filterByCategoryAndSubcategory = (
    categoryValue: Category,
    subcategories: Subcategory[] | null,
    sortField: keyof ProductListItemVM,
    sortDirection: SortingDirection = 'desc'
  ) =>
    combineLatest([of(categoryValue), productData]).pipe(
      switchMap(([category, products]) => {
        const filteredByCategory =
          toKebabCase(category) === toKebabCase(ALL_PRODUCTS)
            ? products
            : filterProductsByCategory(products, category);

        const filteredBySubcategory = filterProductsBySubcategory(
          filteredByCategory,
          subcategories
        );
        const sortedProducts = sortProducts(
          filteredBySubcategory,
          sortField,
          sortDirection
        );

        return of(sortedProducts);
      })
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

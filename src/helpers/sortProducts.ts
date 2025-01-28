import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';
import { SortingDirection } from 'src/types/sorting';

function sortProducts(
  products: ProductListItemVM[],
  field: keyof ProductListItemVM,
  direction: SortingDirection = 'asc'
): ProductListItemVM[] {
  if (products.length > 0 && typeof products[0][field] === 'undefined') {
    throw new Error(
      `Field ${String(field)} does not exist in ProductListItemVM`
    );
  }

  return [...products].sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (valueA === undefined || valueA === null) return 1;
    if (valueB === undefined || valueB === null) return -1;

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      if (
        !Number.isNaN(Date.parse(valueA)) &&
        !Number.isNaN(Date.parse(valueB))
      ) {
        const dateA = new Date(valueA).getTime();
        const dateB = new Date(valueB).getTime();
        return direction === 'asc' ? dateA - dateB : dateB - dateA;
      }
      return direction === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }

    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      return direction === 'asc'
        ? Number(valueA) - Number(valueB)
        : Number(valueB) - Number(valueA);
    }

    return 0;
  });
}

export default sortProducts;

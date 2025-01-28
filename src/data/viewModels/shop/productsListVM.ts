import Product from 'src/types/product';
import ProductListItemVM from './productListItemVM';

const productsListVM = (productsData: Product[]) => ({
  productVMs: productsData.map(
    (productData) =>
      new ProductListItemVM({
        name: productData.name,
        mainPropertyName: 'Volume',
        mainPropertyValue: productData.volume,
        unitNameOfMainProperty: 'Liters',
        id: productData.id,
        category: productData.category,
        subcategory: productData.subcategory,
        price: productData.price,
        createdAt: productData.createdAt,
      })
  ),
});
export default productsListVM;

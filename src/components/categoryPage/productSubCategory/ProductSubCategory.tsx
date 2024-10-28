import ProductCard from 'src/components/common/productCard';

import ProductListItemVm from 'src/data/viewModels/shop/productListItemVM';

import styles from './ProductSubCategory.module.css';

type Props = {
  products: ProductListItemVm[];
};

function ProductSubCategory({ products }: Props) {
  return (
    <div className={styles.categoryWrapper}>
      <ul className={styles.productsList}>
        {products.map((product) => (
          <ProductCard vm={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProductSubCategory;

import Container from 'src/components/common/container';
import ProductPreviewSlider from 'src/components/productPage/productDetailsSection/ProductPreviewSlider';
import ProductDetailsWizard from './ProductDetailsWizard';

import productDetailsPrevSliderVM from 'src/data/viewModels/product/productDetailsPrevSliderVM';
import { getAllProduct, getProductById } from 'src/helpers/getProducts';

import st from './ProductDetailsSection.module.css';

type ProductPreviewSliderProps = {
  productId: string;
};

function ProductDetailsSection({ productId }: ProductPreviewSliderProps) {
  const product = getProductById(productId);
  const products = getAllProduct();
  const vm = productDetailsPrevSliderVM(product);

  return (
    <section className={st.section}>
      <Container>
        <div className={st.wrapper}>
          <ProductPreviewSlider vm={vm} name={product.name} />
          <ProductDetailsWizard products={products} />
        </div>
      </Container>
    </section>
  );
}

export default ProductDetailsSection;

import Container from 'src/components/common/container';
import ProductDetailsStatus from 'src/components/productPage/productDetailsStatus';

import { getProductById } from 'src/helpers/getProducts';

import st from './BreadcrumbsWithCart.module.css';

type BreadcrumbsWithCartProps = {
  productId: string;
};

function BreadcrumbsWithCart({ productId }: BreadcrumbsWithCartProps) {
  const product = getProductById(productId);

  if (!product) return null;

  const { name } = product;

  return (
    <section className={st.section}>
      <Container>
        <ProductDetailsStatus productName={name} />
      </Container>
    </section>
  );
}

export default BreadcrumbsWithCart;

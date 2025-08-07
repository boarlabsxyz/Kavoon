import Container from 'src/components/common/container';
import ProductDetailsSpecification from 'src/components/productPage/productDetailsSpecification';
import PlacingOrder from 'src/components/productPage/placingOrder';
import EmbedVideo from 'src/components/productPage/embedVideo';

import { getProductById } from 'src/helpers/getProducts';
import InfoSectionVM from 'src/data/viewModels/shop/infoSectionVM';

import { Language } from 'src/types/language';

import st from './InfoSection.module.css';

type Props = {
  productId: string;
  language: Language;
};

function InfoSection({ productId, language }: Props) {
  const product = getProductById(productId);
  if (!product) return null;

  const embedVideo = product.embedVideo;

  const vm = new InfoSectionVM(product);
  return (
    <section className={st.section}>
      <Container>
        <>
          <div className={st.specificationAndPlacingOrderWrapper}>
            <ProductDetailsSpecification vm={vm} language={language} />
            <PlacingOrder language={language} product={product} />
          </div>
          {embedVideo && (
            <div className={st.equipmentVideoWrapper}>
              <EmbedVideo language={language} embedVideo={embedVideo} />
            </div>
          )}
        </>
      </Container>
    </section>
  );
}

export default InfoSection;

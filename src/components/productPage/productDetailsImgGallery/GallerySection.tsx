import Link from 'next/link';

import Container from 'src/components/common/container';
import ProductDetailsImgGallery from './ProductDetailsImgGallery';

import detailsImgGallery from 'src/data/detailsImgGallery';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './GallerySection.module.css';

type Props = {
  lang: Language;
};

const NUMBER_OF_IMAGES = 46;

function GallerySection({ lang: locale }: Props) {
  const images = detailsImgGallery(NUMBER_OF_IMAGES);

  return (
    <section className={st.section}>
      <Container>
        <h2 className={st.title}>{lang('GalleryTitle', locale)}?</h2>
        <Link href={`/${locale}/blog`} className={st.subTitle} prefetch={false}>
          {lang('GallerySubTitle', locale)}
        </Link>
        <ProductDetailsImgGallery images={images} />
      </Container>
    </section>
  );
}

export default GallerySection;

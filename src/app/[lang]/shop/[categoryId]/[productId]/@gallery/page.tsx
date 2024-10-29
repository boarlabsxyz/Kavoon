import { Language } from 'src/types/language';
import GallerySection from 'src/components/productPage/productDetailsImgGallery/GallerySection';
import { Category } from 'src/data/constants';

type Props = {
  params: { categoryId: Category; productId: string; lang: Language };
};

function Gallery({ params }: Props) {
  return <GallerySection lang={params.lang} />;
}

export default Gallery;

import SeeMoreSection from 'src/components/productPage/seeMoreSection';

import productDetailsSeeMoreVM from 'src/data/viewModels/product/ProductDetailsSeeMoreVM';

import type { Language } from 'src/types/language';
import { Category } from 'src/data/constants';

type Props = {
  params: {
    categoryId: Category;
    productId: string;
    lang: Language;
  };
};

function SeeMore({ params }: Props) {
  const vm = productDetailsSeeMoreVM();

  return <SeeMoreSection vm={vm} language={params.lang} />;
}

export default SeeMore;

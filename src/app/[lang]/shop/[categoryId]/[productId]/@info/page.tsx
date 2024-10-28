import InfoSection from 'src/components/productPage/infoSection';
import { Category } from 'src/data/constants';

import { Language } from 'src/types/language';

type InfoProps = {
  params: { categoryId: Category; productId: string; lang: Language };
};

function Info({ params }: InfoProps) {
  const { productId, lang } = params;

  return <InfoSection productId={productId} language={lang} />;
}

export default Info;

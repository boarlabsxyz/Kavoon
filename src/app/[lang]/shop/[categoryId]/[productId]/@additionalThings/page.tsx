import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';

import EquipmentWeTakeSection from 'src/components/productPage/equipmentWeTake';

type Props = {
  params: { categoryId: Category; productId: string; lang: Language };
};

function AdditionalThings({ params }: Props) {
  const { lang: language } = params;

  return <EquipmentWeTakeSection language={language} />;
}

export default AdditionalThings;

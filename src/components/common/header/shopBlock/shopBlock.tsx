import { Language } from 'src/types/language';
import DropdownListForHeaderNav from '../../dropdownListForHeaderNav/dropdownListForHeaderNav';

import st from './shopBlock.module.css';

type Props = {
  lang: Language;
};

const pages = [
  { target: 'shop/all-products', label: 'AllProducts' },
  { target: 'shop/bicycle-equipment', label: 'BicycleEquipment' },
  { target: 'shop/bag-accessories', label: 'BagAccessories' },
  { target: 'shop/city-collection', label: 'CityCollection' },
  { target: 'shop/in-stock', label: 'InStock' },
];

function ShopBlock({ lang }: Props) {
  return (
    <div className={st.wrapper}>
      <DropdownListForHeaderNav pages={pages} lang={lang} title="Shop" />
    </div>
  );
}

export default ShopBlock;

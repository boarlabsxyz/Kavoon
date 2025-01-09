import { Language } from 'src/types/language';
import DropdownListForHeaderNav from '../../dropdownListForHeaderNav/dropdownListForHeaderNav';

type Props = {
  lang: Language;
};

const pages = [
  { target: 'shop/all-products', label: 'AllProducts' },
  { target: 'shop/bicycle-equipment', label: 'BicycleEquipment' },
  { target: 'shop/bag-accessories', label: 'BagAccessories' },
  { target: 'shop/city-collection', label: 'CityCollection' },
];

function ShopBlock({ lang }: Props) {
  return <DropdownListForHeaderNav pages={pages} lang={lang} title="Shop" />;
}

export default ShopBlock;

import { Language } from 'src/types/language';
import DropdownListForHeaderNav from '../../dropdownListForHeaderNav/dropdownListForHeaderNav';

type Props = {
  lang: Language;
};

const pages = [
  { target: 'about-us', label: 'MenuItemAboutUs' },
  { target: 'blog', label: 'MenuItemBlog' },
  { target: 'delivery-and-payment', label: 'DeliveryAndPayment' },
];

function InformationBlock({ lang }: Props) {
  return (
    <DropdownListForHeaderNav pages={pages} lang={lang} title="Information" />
  );
}

export default InformationBlock;

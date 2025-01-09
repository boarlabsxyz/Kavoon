import { Language } from 'src/types/language';
import DropdownListForHeaderNav from '../../dropdownListForHeaderNav/dropdownListForHeaderNav';

import st from './informationBlock.module.css';

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
    <div className={st.wrapper}>
      <DropdownListForHeaderNav pages={pages} lang={lang} title="Information" />
    </div>
  );
}

export default InformationBlock;

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './SubcategoryStatus.module.css';

type Props = {
  language: Language;
  quantity: number;
};

function SubcategoryStatus({ language, quantity }: Props) {
  return (
    <div className={st.wrapper}>
      <span>{lang('ProductsShown1', language)}</span>
      <span className={st.quantity}>{quantity}</span>
      <span>{lang('ProductsShown2', language)}</span>
    </div>
  );
}

export default SubcategoryStatus;

import { FC } from 'react';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './PageTitle.module.css';

interface IProps {
  language: Language;
}

const PageTitle: FC<IProps> = ({ language }) =>
  language === 'en' ? (
    <div className={st.wrap}>
      <h3 className={st.title}>
        <strong className={st.accentText}>{lang('Custom', language)}</strong>{' '}
        {lang('BikeEquipment', language)} {lang('Shop', language)}
      </h3>
      <p className={st.description}>
        {lang('CustomSewingDescription', language)}
      </p>
    </div>
  ) : (
    <div className={st.wrap}>
      <h3 className={st.title}>
        {lang('Shop', language)}{' '}
        <strong className={st.accentText}>{lang('Custom', language)}</strong>{' '}
        {lang('BikeEquipment', language)}
      </h3>
      <p className={st.description}>
        {lang('CustomSewingDescription', language)}
      </p>
    </div>
  );

export default PageTitle;

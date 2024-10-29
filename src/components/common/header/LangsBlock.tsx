import ActiveLocale from 'src/components/common/activeLocale';
import LocaleList from 'src/components/common/localeList';

import { Language } from 'src/types/language';

import st from './LangsBlock.module.css';

type LangsBlockProps = {
  lang: Language;
};

function LangsBlock({ lang }: LangsBlockProps) {
  return (
    <div className={st.wrapper}>
      <ActiveLocale lang={lang} />
      <LocaleList />
    </div>
  );
}

export default LangsBlock;

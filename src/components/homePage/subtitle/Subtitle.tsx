import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './Subtitle.module.css';

type Props = {
  language: Language;
};

function Subtitle({ language }: Props) {
  const subtitle = lang('CustomSewing', language);

  return <h2 className={st.subtitle}>{subtitle}</h2>;
}

export default Subtitle;

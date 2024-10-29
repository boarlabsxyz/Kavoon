import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './SuccessScreen.module.css';

type Props = {
  language: Language;
};

function SuccessScreen({ language }: Props) {
  return (
    <p className={st.wrapper}>{translate('ChatSuccessMessage', language)}</p>
  );
}

export default SuccessScreen;

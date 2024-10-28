import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

import st from './ContactUs.module.css';

type Props = {
  language: Language;
};

function ContactUs({ language }: Props) {
  return (
    <p className={st.notificationText}>{translate('LeaveMessage', language)}</p>
  );
}

export default ContactUs;

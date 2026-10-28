import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

import st from './ContactUs.module.css';

type Props = {
  language: Language;
};

function ContactUs({ language }: Props) {
  return (
    <p className={st.notificationText} data-cy="contact-us-bubble">
      {translate('LeaveMessage', language)}
    </p>
  );
}

export default ContactUs;

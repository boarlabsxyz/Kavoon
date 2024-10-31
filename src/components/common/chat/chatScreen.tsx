import { Field } from 'formik';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './ChatScreen.module.css';

type Props = {
  language: Language;
};

function ChatScreen({ language }: Props) {
  return (
    <>
      <div className={st.chat}>
        <p className={st.greeting}>{translate('Greeting', language)}</p>
      </div>
      <Field
        name="message"
        type="text"
        placeholder={translate('WriteMessage', language)}
        className={st.input}
      />
    </>
  );
}

export default ChatScreen;

import { Dispatch } from 'react';

import { Field } from 'formik';

import ContactsMessengerPicker from 'src/components/common/contactsMessengerPicker';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './ContactsScreen.module.css';

type Props = {
  onMessengerChange: Dispatch<string>;
  language: Language;
};

function ContactsScreen({ onMessengerChange, language }: Props) {
  return (
    <div className={st.wrapper}>
      <p className={st.title}>{translate('WaitForAnswer', language)}</p>
      <div className={st.fields}>
        <div className={st.row}>
          <label className={st.label} htmlFor="userName">
            {translate('Name', language)}
          </label>
          <Field
            name="userName"
            type="text"
            placeholder={translate('EnterName', language)}
            className={st.input}
          />
        </div>
        <div className={st.row}>
          <ContactsMessengerPicker
            language={language}
            // @ts-ignore
            input={{
              onMessengerChange,
            }}
            // @ts-ignore
            remarkText
          />
        </div>
      </div>
    </div>
  );
}
export default ContactsScreen;

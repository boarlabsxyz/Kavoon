import { useState } from 'react';

import { FormikValues } from 'formik';
import * as Yup from 'yup';

import FormikStepper from 'src/components/common/chat/formikStepper';
import ContactsScreen from 'src/components/common/chat/contactsScreen';
import ChatScreen from 'src/components/common/chat/chatScreen';

import IFormikStepProps from 'src/types/formikStepProps';
import { Language } from 'src/types/language';

type Props = {
  language: Language;
  handleFormSubmit: (values: FormikValues, messenger: string | null) => void;
};

function FormikStep({ children }: IFormikStepProps) {
  return <>{children}</>;
}

function MultiStepForm({ handleFormSubmit, language }: Props) {
  const [messenger, setMessenger] = useState<string | null>(null);

  return (
    <FormikStepper
      initialValues={{
        message: '',
        userName: '',
        numTel: '',
      }}
      onSubmit={async (values) => handleFormSubmit(values, messenger)}
      language={language}
    >
      <FormikStep
        validationSchema={Yup.object().shape({
          message: Yup.string().required(),
        })}
        label="Chat message"
      >
        <ChatScreen language={language} />
      </FormikStep>
      <FormikStep
        validationSchema={Yup.object().shape({
          userName: Yup.string().required(),
          numTel: Yup.string().required(),
        })}
        label="Contacts"
      >
        <ContactsScreen onMessengerChange={setMessenger} language={language} />
      </FormikStep>
    </FormikStepper>
  );
}

export default MultiStepForm;

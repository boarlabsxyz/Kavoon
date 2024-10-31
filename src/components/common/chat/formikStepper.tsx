import React, { useState } from 'react';

import { Formik, Form } from 'formik';

import TelegramIcon from 'src/icons/telegramIcon';
import translate from 'src/i18n/lang';
import IFormikStepperProps from 'src/types/formikStepperProps';

import st from './FormikStepper.module.css';

function FormikStepper({ children, ...props }: IFormikStepperProps) {
  const childrenArray: any[] = React.Children.toArray(children);

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  const isWrittenStep = () => {
    return step === 0;
  };
  const { language } = props;

  return (
    <>
      <Formik
        {...props}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, helpers) => {
          if (!isWrittenStep()) {
            await props.onSubmit(values, helpers);
          } else {
            setStep((s) => s + 1);
            helpers.setTouched({});
          }
        }}
      >
        {({ isSubmitting, values }) => (
          <Form autoComplete="off" className={st.chatForm}>
            {currentChild}
            {isWrittenStep() ? (
              <button
                type="submit"
                disabled={isSubmitting || !values.message}
                aria-label="send-message-button"
                className={st.sendMessageBtn}
              >
                <TelegramIcon width="26" height="22" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !values.userName || !values.numTel}
                aria-label="send-contacts-button"
                className={st.sendContactsBtn}
              >
                {translate('SendBtn', language)}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormikStepper;

import { useState } from 'react';

import { FormikValues } from 'formik';

import telegramApi from 'src/services/telegram-bot-api';
import MultiStepForm from 'src/components/common/chat/multiStepForm';
import SuccessScreen from 'src/components/common/chat/successScreen';
import Spinner from 'src/components/common/spinner';

import { Language } from 'src/types/language';

import st from './PopupContent.module.css';

type Props = {
  language: Language;
};

function PopupContent({ language }: Props) {
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (
    values: FormikValues,
    messenger: string | null
  ) => {
    try {
      setIsLoading(true);
      const { userName, numTel, message } = values;
      await telegramApi.sendChatMessage(userName, numTel, messenger, message);
      setCompleted(true);
    } catch (e) {
      console.log('e :>> ', e); // eslint-disable-line no-console
    }
    setIsLoading(false);
  };

  const renderComponent = () => {
    if (completed) {
      return <SuccessScreen language={language} />;
    }

    return (
      <MultiStepForm handleFormSubmit={handleFormSubmit} language={language} />
    );
  };

  return (
    <div className={st.wrapper}>
      <Spinner loading={isLoading} />
      {!isLoading && renderComponent()}
    </div>
  );
}

export default PopupContent;

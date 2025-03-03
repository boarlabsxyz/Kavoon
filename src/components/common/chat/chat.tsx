'use client';

import { useEffect, useState } from 'react';

import Popup from 'src/components/common/chat/popup';
import ContactUs from 'src/components/common/chat/contactUs';
import ChatButton from 'src/components/common/chat/chatButton';

import { Language } from 'src/types/language';

import st from './Chat.module.css';

type Props = {
  language: Language;
};

function Chat({ language }: Props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [hideContactUs, setHideContactUs] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setTimeout(() => {
      setHideContactUs(true);
    }, 5000);
  }, []);

  useEffect(() => {
    const renderContactUs = !showPopup && !hideContactUs;
    setShowContactUs(renderContactUs);
  }, [hideContactUs, showPopup]);

  return (
    <div className={st.wrapper}>
      {showContactUs && <ContactUs language={language} />}
      {/* <ChatButton togglePopup={togglePopup} showPopup={showPopup} /> */}
      {showPopup && (
        <Popup
          togglePopup={togglePopup}
          isPopupOpened={showPopup}
          language={language}
        />
      )}
    </div>
  );
}

export default Chat;

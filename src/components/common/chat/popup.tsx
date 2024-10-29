import { useEffect, useRef } from 'react';

import PopupMainContent from 'src/components/common/chat/PopupContent';
import pageScrollService from 'src/helpers/pageScrollService';

import CancelIcon from 'src/icons/cancelIcon';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import RespScreenWidth from 'src/data/mediaConst';
import useOutsideClick from 'src/hooks/useOutsideClick';
import useWindowWidth from 'src/hooks/useWindowWidth';

import st from './Popup.module.css';

type Props = {
  togglePopup: () => void;
  isPopupOpened: boolean;
  language: Language;
};

function Popup({ togglePopup, isPopupOpened, language }: Props) {
  const ref = useRef();
  const isFullScreenChat =
    useWindowWidth() <= RespScreenWidth.chatScreenWidthMobile;

  useEffect(() => {
    isFullScreenChat && pageScrollService.blockScroll();
    return () => {
      isFullScreenChat && pageScrollService.unblockScroll();
    };
  }, [isPopupOpened, isFullScreenChat]);

  useOutsideClick(ref, () => {
    togglePopup();
  });

  return (
    <div
      ref={ref}
      className={st.wrapper}
      // blocks page scrolling on iOS mobile phones
      onPointerMove={(e) => e.preventDefault()}
    >
      <div className={st.header}>
        <p className={st.supportText}>{translate('Support', language)}</p>
        {isFullScreenChat && (
          <button
            type="button"
            className={st.closeBtn}
            aria-label="close-chat-button"
            onClick={togglePopup}
          >
            <CancelIcon width="16" height="16" />
          </button>
        )}
      </div>
      <PopupMainContent language={language} />
    </div>
  );
}
export default Popup;

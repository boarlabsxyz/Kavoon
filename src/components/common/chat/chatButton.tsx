import ChatIcon from 'src/icons/chatIcon';
import CancelIcon from 'src/icons/cancelIcon';

import st from './ChatButton.module.css';

type Props = {
  togglePopup: () => void;
  showPopup: boolean;
};

function ChatButton({ togglePopup, showPopup }: Props) {
  return (
    <>
      {!showPopup ? (
        <button
          type="button"
          className={st.chatBtn}
          aria-label="chat-button"
          onClick={togglePopup}
        >
          <ChatIcon width="24" height="24" />
        </button>
      ) : (
        <button
          type="button"
          className={st.chatBtn}
          aria-label="chat-button"
          onClick={togglePopup}
        >
          <CancelIcon width="18" height="18" />
        </button>
      )}
    </>
  );
}

export default ChatButton;

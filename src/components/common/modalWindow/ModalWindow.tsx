import { type MouseEvent, useEffect } from 'react';

import st from './ModalWindow.module.css';

type Props = {
  children: React.ReactElement;
  onClose: () => void;
};

function ModalWindow({ children, onClose }: Props) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div
      data-testid="overlay"
      className={st.overlay}
      onClick={handleBackdropClick}
    >
      <div className={st.modal}>
        <div
          data-testid="close-button"
          className={st.closeButton}
          onClick={() => onClose()}
        >
          <div className={st.pseudo} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;

import ModalWindow from 'src/components/common/modalWindow/SecondModalWindow';

import QuestionMarkIcon from 'public/icons/question-mark.svg';
import lang from 'src/i18n/lang';
import useToggle from 'src/hooks/useToggle';

import st from './ChooseFabric.module.css';

export default function ChooseFabric({ language }) {
  const [showModal, toggleModal] = useToggle();

  return (
    <div className={st.wrapper}>
      <p className={st.title}>{lang('FabricDescriptionTitle', language)}</p>
      <button
        type="button"
        onClick={toggleModal}
        aria-label="hint-about-fabrics"
        className={st.hintBtn}
      >
        <QuestionMarkIcon style={{ width: '16', height: '16' }} />
      </button>

      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <div className={st.popupContent}>
            <div className={st.corduraWrapper}>
              <p className={st.fabricName}>{lang('Cordura', language)}</p>
              <p>{lang('CorduraDescription', language)}</p>
            </div>
            <div className={st.xpacWrapper}>
              <p className={st.fabricName}>{lang('Xpac', language)}</p>
              <p>{lang('XpacDescription', language)}</p>
            </div>
          </div>
        </ModalWindow>
      )}
    </div>
  );
}

import lang from 'src/i18n/lang';

import st from './ShowOriginalBtn.module.css';

type Props = {
  onClick: () => void;
  showOriginalReview: boolean;
  language: string;
};

function ShowOriginalBtn({ onClick, showOriginalReview, language }: Props) {
  const title = showOriginalReview
    ? lang('Translate', language)
    : lang('ShowOriginal', language);

  return (
    <button
      type="button"
      onClick={onClick}
      className={st.wrapper}
      id="ShowOriginalBtn"
    >
      {title}
    </button>
  );
}

export default ShowOriginalBtn;

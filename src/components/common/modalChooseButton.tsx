import React, { FC } from 'react';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

type ButtonProps = {
  onButtonClick: () => void;
  language: Language;
};

const ModalChooseButton: FC<ButtonProps> = ({ onButtonClick, language }) => (
  <>
    <button className="btn-submit" type="submit" onClick={onButtonClick}>
      {lang('Select', language)}
    </button>
    <style jsx>
      {`
        .btn-submit {
          display: var(--is-show);
          margin: 0 auto;
          width: 138px;
          height: 40px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25px;
          letter-spacing: 0.75px;
          outline: none;
          border: none;
          border-radius: 25px;
          color: var(--white);
          background-color: var(--primary-color);
          cursor: pointer;
        }
      `}
    </style>
  </>
);

export default ModalChooseButton;

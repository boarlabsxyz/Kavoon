import React from 'react';

import { Observable } from 'rxjs';

import CustomImage from 'src/components/common/customImage';
import FabricsModalContent from 'src/components/productPage/fabricsModalContent';
import ModalWindow from 'src/components/common/modalWindow';

import useRx from 'src/hooks/useRx';
import useToggle from 'src/hooks/useToggle';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './ProductDetailsWizardPicker.module.css';

type Props = {
  vm: {
    colorForSmallPreview$: Observable<{ smallImgSrc: string; name: string }>;
    fabricsModalContentVM: any;
    isOnlyOneFabricColor: boolean;
  };
  language: Language;
};

function ProductDetailsWizardPicker({ vm, language }: Props) {
  const { colorForSmallPreview$, fabricsModalContentVM, isOnlyOneFabricColor } =
    vm;
  const selectedItem = useRx(colorForSmallPreview$);

  const [showModal, toggleModal] = useToggle();

  if (isOnlyOneFabricColor) {
    return (
      <div>
        <p className={`${st.mainTitle} ${st.disabled}`}>
          {lang('ChooseFabric', language)}
        </p>
        <button
          type="button"
          aria-label="choose fabric"
          className={`${st.status} ${st.disabledStatus}`}
          disabled
        >
          <div className={st.img}>
            <CustomImage
              src={selectedItem.smallImgSrc}
              alt={selectedItem.name}
              width={35}
              height={35}
            />
          </div>
          <p className={`${st.statusTitle} ${st.disabled}`}>
            {lang(selectedItem.name, language)}
          </p>
          <div className={`${st.statusMore} ${st.statusMoreDisabled}`} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className={st.mainTitle}>{lang('ChooseFabric', language)}</p>
      <button
        type="button"
        aria-label="choose fabric"
        className={st.status}
        onClick={() => {
          toggleModal();
        }}
      >
        <div className={st.img}>
          <CustomImage
            src={selectedItem.smallImgSrc}
            alt={selectedItem.name}
            width={35}
            height={35}
          />
        </div>
        <p className={st.statusTitle}>{lang(selectedItem.name, language)}</p>
        <div className={st.statusMore} />
      </button>
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <FabricsModalContent
            vm={fabricsModalContentVM}
            language={language}
            onClose={toggleModal}
          />
        </ModalWindow>
      )}
    </div>
  );
}
export default ProductDetailsWizardPicker;

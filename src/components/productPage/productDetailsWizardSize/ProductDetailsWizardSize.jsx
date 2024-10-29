import { useState, useRef } from 'react';

import ModalWindow from 'src/components/common/modalWindow/SecondModalWindow';
import CustomImage from 'src/components/common/customImage';

import useRx from 'src/hooks/useRx';
import useOutsideClick from 'src/hooks/useOutsideClick';
import lang from 'src/i18n/lang';

import st from './ProductDetailsWizardSize.module.css';

function ProductDetailsWizardSize({ vm, language }) {
  const addSizes = useRx(vm.items);
  const selectedSize = useRx(vm.selected);

  const [isOpened, setIsOpened] = useState(false);
  const [currentSize, setCurrentSize] = useState(selectedSize);
  const [isOpenedPopup, setOpenedPopup] = useState(false);

  const closeModal = () => setOpenedPopup(false);

  const ref = useRef();
  useOutsideClick(ref, () => {
    setIsOpened(false);
  });

  return (
    <div className={st.wrapper}>
      <span>{lang(vm.mainTheme, language)}</span>
      <div
        className={isOpened ? `${st.status} ${st.statusOpened}` : st.status}
        ref={ref}
      >
        <div className={st.statusMain}>
          <span className={st.text}>{`${
            currentSize === 'customSize'
              ? lang('CustomSize', language)
              : currentSize
          } ${
            currentSize !== 'customSize' ? lang('Santimeters', language) : ''
          }`}</span>
          <button
            className={
              isOpened ? `${st.chooseBtn} ${st.chooseBtnOpened}` : st.chooseBtn
            }
            type="button"
            aria-label="Mute volume"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          />
        </div>
        <ul className={st.list}>
          {addSizes.map((item, index) => (
            <li
              onClick={() => {
                setCurrentSize(addSizes[index]);
                vm.selected.next(addSizes[index]);
                setIsOpened(false);
              }}
              key={item}
              className={
                item === currentSize ? `${st.item} ${st.activeItem}` : st.item
              }
            >
              <p>{`${
                item === 'customSize' ? lang('CustomSize', language) : item
              } ${
                item !== 'customSize' ? lang('Santimeters', language) : ''
              }`}</p>
              {item === 'customSize' && (
                <>
                  <button
                    type="button"
                    className={st.hintBtn}
                    onClick={() => {
                      setOpenedPopup(true);
                      setTimeout(closeModal, 5000);
                    }}
                  >
                    <CustomImage
                      src="/img/icons/question-mark.svg"
                      alt="question-mark"
                      width={16}
                      height={16}
                    />
                  </button>
                  {isOpenedPopup && (
                    <ModalWindow onClose={closeModal}>
                      <div className={st.modalContent}>
                        <div className={st.questionMark}> </div>
                        <div className={st.hintContent}>
                          {lang('HintDescription', language)}
                        </div>
                      </div>
                    </ModalWindow>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ProductDetailsWizardSize;

import React, { useEffect, useRef, useState } from 'react';

import Notification from 'src/components/common/notification';

import isFooterVisible from 'src/helpers/isFooterVisible';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './ProductDetailsOrderBtn.module.css';

type Props = {
  vm: { addProduct: () => void; name: string };
  language: Language;
};

function ProductDetailsOrderBtn({ vm, language }: Props) {
  const controls = useRef<HTMLDivElement>(null);
  const [isFixedPosition, setIsFixedPosition] = useState(false);

  const [isShowNotification, setIsShowNotification] = useState(false);

  const handleScroll = () => {
    const { heightOfScreen, isFooterOnPage } = isFooterVisible();

    const btnInitialTop = (initialTopBtnControls) => {
      if (initialTopBtnControls.current !== null) {
        return initialTopBtnControls.current.getBoundingClientRect().top;
      }
      return 0;
    };

    const marginTop = 70;

    marginTop + btnInitialTop(controls) <= heightOfScreen && !isFooterOnPage
      ? setIsFixedPosition(true)
      : setIsFixedPosition(false);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const delay = 4000;

  const handler = () => {
    vm.addProduct();
    setIsShowNotification(true);
    setTimeout(() => {
      setIsShowNotification(false);
    }, delay);
  };

  const messageArray = [
    '😊',
    lang(vm.name, language),
    lang('CartAddSuccess', language),
  ];

  return (
    <div ref={controls} className={st.wrapper}>
      <div
        className={isFixedPosition ? st.fixed : st.disabled}
        data-cy="add-to-cart-btn"
      >
        <button
          className={st.button}
          type="submit"
          onClick={() => {
            handler();
          }}
        >
          {lang('AddToCart', language)}
        </button>
        {isShowNotification && (
          <Notification messageArray={messageArray} delay={delay} />
        )}
      </div>
    </div>
  );
}

export default ProductDetailsOrderBtn;

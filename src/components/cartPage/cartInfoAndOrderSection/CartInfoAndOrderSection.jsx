'use client';

import { useEffect, useState } from 'react';

import CartInfoChooseProducts from 'src/components/cartPage/cartInfoChooseProducts';
import CartOrderForm from 'src/components/cartPage/cartOrderForm';
import Notification from 'src/components/common/notification';

import CartInfoAndOrderSectionVM from 'src/data/viewModels/cart/CartInfoAndOrderSectionVM';
import useRx from 'src/hooks/useRx';
import translate from 'src/i18n/lang';

import st from './CartInfoAndOrderSection.module.css';

function CartInfoAndOrderSection({ children, language }) {
  const [isShowNotification, setIsShowNotification] = useState(false);
  const vm = CartInfoAndOrderSectionVM();
  const statusOfOrder = useRx(vm.statusOfOrder);

  const messageArray = [
    '🎉',
    translate('ThankYou', language),
    translate('OrderSent', language),
  ];
  const delay = 4000;

  useEffect(() => {
    if (statusOfOrder === true) {
      setIsShowNotification(statusOfOrder);
      setTimeout(() => {
        setIsShowNotification(false);
      }, delay);
    }
  }, [statusOfOrder]);

  return (
    <>
      <div className={st.wrapper}>
        <div className={st.content}>
          <CartInfoChooseProducts vm={vm} language={language} />
          {children}
        </div>
        <CartOrderForm vm={vm} language={language} />
      </div>
      {isShowNotification && (
        <Notification messageArray={messageArray} delay={delay} />
      )}
    </>
  );
}

export default CartInfoAndOrderSection;

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import ProductDiscountInComplect from 'src/components/productPage/productDiscountInComplect';
import ModalWindow from 'src/components/common/modalWindow';
import Notification from 'src/components/common/notification';
import allKitDiscount from 'src/data/data/allKitDiscount';
import applyDiscount from 'src/helpers/applyDiscount';
import productDetailsThingsTookVM from 'src/data/viewModels/product/productDetailsThingsTookVM';
import lang from 'src/i18n/lang';
import {
  getFormattedPrice,
  getLocalPrice,
} from 'src/helpers/priceLocalization';
import { Language } from 'src/types/language';

import st from './ComplectModal.module.css';

type Props = {
  onClose: () => void;
};

function ComplectModal({ onClose }: Props) {
  const { lang: language } = useParams<{ lang: Language }>();
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [messageArray, setMessageArray] = useState<string[]>([]);

  const vm = productDetailsThingsTookVM({ allKitDiscount });
  const { discount } = allKitDiscount();

  const totalSum = applyDiscount(
    getLocalPrice(vm.totalSum, language),
    discount
  );
  const formattedTotalSum = getFormattedPrice(totalSum, language);

  const delay = 4000;

  let totalAddedProducts = '';

  const handleClick = () => {
    vm.kitForCart.forEach((product) => {
      const productName = product.name;
      if (!totalAddedProducts) {
        totalAddedProducts = lang(productName, language);
      } else {
        totalAddedProducts =
          totalAddedProducts + ', ' + lang(productName, language);
      }
      setMessageArray([
        '😊',
        totalAddedProducts,
        lang('CartAddSuccess', language),
      ]);
      return vm.addProduct({ ...product, cartId: uuidv4() });
    });

    setIsShowNotification(true);
    setTimeout(() => {
      onClose();
      setIsShowNotification(false);
    }, delay);
  };

  return (
    <ModalWindow onClose={onClose}>
      <div className={st.modalContent}>
        <h2 className={st.title}>{lang('AllAtOnce', language)}</h2>
        {vm.kitVMs.map((productVM) => (
          <ProductDiscountInComplect
            vm={productVM}
            key={productVM.name}
            language={language}
            howMany={vm.kitVMs.length}
            discount={discount}
          />
        ))}
        <div className={st.priceInfo}>
          <div className={st.priceWrapper}>
            <span className={st.priceText}>{lang('Sum', language)}</span>
            <span className={st.price}>{formattedTotalSum}</span>
          </div>
          <button type="submit" className={st.button} onClick={handleClick}>
            {lang('MakeAnOrder', language)}
          </button>
          {isShowNotification && (
            <Notification messageArray={messageArray} delay={delay} />
          )}
        </div>
      </div>
    </ModalWindow>
  );
}

export default ComplectModal;

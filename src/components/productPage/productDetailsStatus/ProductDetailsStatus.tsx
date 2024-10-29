'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import CartStatus from 'src/components/common/cartStatus';
import BreadcrumbsNav from 'src/components/common/breadcrumbs';
import Notification from 'src/components/common/notification';

import productDetailsStatusVM from 'src/data/viewModels/product/productDetailsStatusVM';
import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';
import useRx from 'src/hooks/useRx';

import st from './ProductDetailsStatus.module.css';

type ProductDetailsStatusProps = {
  productName: string;
};

type UseParamsType = {
  lang: Language;
  productId: string;
};

function ProductDetailsStatus({ productName }: ProductDetailsStatusProps) {
  const { lang } = useParams<UseParamsType>();

  const vm = productDetailsStatusVM(productName);
  const isEmptyCart = useRx(vm.cartNotificationsVM.isEmptyCart$);
  const [isShowNotification, setIsShowNotification] = useState(isEmptyCart);

  useEffect(() => {
    setIsShowNotification(isEmptyCart);
  }, [isEmptyCart]);

  const messageArray = [translate('ThouEmptyCart', lang), '😩'];
  const delay = 6000;

  setTimeout(() => {
    setIsShowNotification(false);
  }, delay);

  return (
    <>
      <div className={st.wrapper}>
        <BreadcrumbsNav vm={vm.breadcrumbsNavVM} language={lang} />
        <CartStatus language={lang} />
      </div>
      {isShowNotification && (
        <Notification messageArray={messageArray} delay={delay} />
      )}
    </>
  );
}

export default ProductDetailsStatus;

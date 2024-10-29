import React from 'react';

import { Observable } from 'rxjs';

import {
  getLocalPrice,
  getFormattedPrice,
} from 'src/helpers/priceLocalization';
import lang from 'src/i18n/lang';
import useRx from 'src/hooks/useRx';
import { Language } from 'src/types/language';

import st from './ProductDetailsWizardTitle.module.css';

type Props = {
  vm: {
    priceEURO: Observable<number>;
    priceUAH: Observable<number>;
    name: string;
  };
  language: Language;
};

function ProductDetailsWizardTitle({ vm, language }: Props) {
  const priceEURO = useRx(vm.priceEURO);
  const priceUAH = useRx(vm.priceUAH);

  const currentPrice = getLocalPrice({ priceEURO, priceUAH }, language);
  const formattedCurrentPrice = getFormattedPrice(currentPrice, language);

  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>{lang(vm.name, language)}</h1>
      <span>{formattedCurrentPrice}</span>
    </div>
  );
}

export default ProductDetailsWizardTitle;

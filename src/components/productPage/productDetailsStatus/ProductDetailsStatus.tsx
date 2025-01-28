'use client';

import { useParams } from 'next/navigation';

import BreadcrumbsNav from 'src/components/common/breadcrumbs';

import productDetailsStatusVM from 'src/data/viewModels/product/productDetailsStatusVM';
import { Language } from 'src/types/language';

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

  return (
    <>
      <div className={st.wrapper}>
        <BreadcrumbsNav vm={vm.breadcrumbsNavVM} language={lang} />
      </div>
    </>
  );
}

export default ProductDetailsStatus;

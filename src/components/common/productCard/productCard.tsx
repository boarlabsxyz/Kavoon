'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import CustomImage from 'src/components/common/customImage';
import shimmerUrl from 'src/helpers/shimmerUrl';
import {
  getLocalPrice,
  getFormattedPrice,
} from 'src/helpers/priceLocalization';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';

import st from './productCard.module.css';

type Props = {
  vm: ProductListItemVM;
};

function ProductCard({ vm }: Props) {
  const { lang: language } = useParams<{ lang: Language }>();
  const { priceEURO, priceUAH } = vm;
  const currentPrice = getLocalPrice({ priceEURO, priceUAH }, language);
  const formattedCurrentPrice = getFormattedPrice(currentPrice, language);

  return (
    <Link
      href={`/${language}${vm.href}`}
      className={st.link}
      rel="noreferrer"
      data-cy="product-card"
    >
      {vm.allowColorOptionBlock && (
        <div className={st.colors}>
          <span className={`${st.color} ${st.customRed}`} />
          <span className={`${st.color} ${st.customGreen}`} />
          <span className={`${st.color} ${st.customBlue}`} />
          <span className={`${st.color} ${st.customYellow}`} />
          <span className={`${st.color} ${st.customViolet}`} />
        </div>
      )}
      <div className={st.imgWrapper}>
        <CustomImage
          src={vm.mainImgPath}
          alt={vm.name}
          width={284}
          height={284}
          placeholder="blur"
          blurDataURL={shimmerUrl}
        />
      </div>
      <div className={st.contentWrapper}>
        <p className={st.title} data-cy="product-title">
          {lang(vm.name, language)}{' '}
        </p>
        <div className={st.description}>
          <div className={st.price}>{formattedCurrentPrice}</div>
          {vm.mainPropertyValue && (
            <div className={st.property}>
              <span className={st.propertyName}>
                {`${lang(vm.mainPropertyName, language)}:`}&nbsp;
              </span>
              {`${vm.mainPropertyValue}${lang(
                vm.unitNameOfMainProperty,
                language
              )}`}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

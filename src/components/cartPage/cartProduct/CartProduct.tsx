import CustomImage from 'src/components/common/customImage';
import MinusIcon from 'src/icons/minusIcon';
import PlusIcon from 'src/icons/plusIcon';
import shimmerUrl from 'src/helpers/shimmerUrl';
import { makeFieldsForCart } from 'src/helpers/makeFields';
import { formatDimensions, formatValueWithUnit } from 'src/helpers/format';
import lang from 'src/i18n/lang';
import {
  getLocalPrice,
  getFormattedPrice,
} from 'src/helpers/priceLocalization';
import { ProductInCart } from 'src/types/product';
import { Language } from 'src/types/language';

import st from './CartProduct.module.css';

type ExtendedProductInCart = ProductInCart & {
  decrease: (id: string) => void;
  increase: (id: string) => void;
};

type Props = {
  vm: ExtendedProductInCart;
  language: Language;
};

function CartProduct({ vm, language }: Props) {
  const amount = vm.count;
  const fields = makeFieldsForCart(language);

  const formattedDimensions = formatDimensions(vm, language);

  const price = getLocalPrice(
    { priceEURO: vm.priceEURO, priceUAH: vm.priceUAH },
    language
  );

  const formattedCurrentPrice = getFormattedPrice(price, language);

  const formattedDimensionsProduct = { ...vm, dimensions: formattedDimensions };

  const mainProductDescription = fields
    .filter(({ field }) => vm[field])
    .map(({ name, field, unitOfMeasure }) => {
      if (name === lang('Sum', language)) {
        return (
          <div key={name} className={st.parameter}>
            {name}:{' '}
            {unitOfMeasure === `${lang('Currency', language)}` ? ' ' : ''}
            <span className={st.value}>{formattedCurrentPrice}</span>
          </div>
        );
      }

      return (
        <div key={name} className={st.parameter}>
          {`${name}: `}
          <span className={st.value}>
            {formatValueWithUnit(
              formattedDimensionsProduct[field],
              unitOfMeasure,
              language
            )}
          </span>
        </div>
      );
    });

  return (
    <div className={st.wrapper}>
      <CustomImage
        src={vm.picture}
        alt={vm.name}
        width={120}
        height={120}
        placeholder="blur"
        blurDataURL={shimmerUrl}
        priority
        className={st.img}
      />

      <div className={st.info}>
        <div className={st.name}>{lang(vm.name, language)}</div>
        <div className={st.controls}>
          <button
            type="button"
            aria-label="reduce-amount-button"
            disabled={amount <= 1}
            onClick={() => (amount > 1 ? vm.decrease(vm.cartId) : null)}
            className={st.amountBtn}
          >
            <MinusIcon width="40%" height="40%" />
          </button>
          <div className={st.amount}>{amount}</div>
          <button
            type="button"
            aria-label="reduce-amount-button"
            onClick={() => vm.increase(vm.cartId)}
            className={st.amountBtn}
          >
            <PlusIcon width="40%" height="40%" />
          </button>
          <div className={st.amountText}>{`${amount}${lang(
            'Pieces',
            language
          )}`}</div>
        </div>
        <div className={st.description}>{mainProductDescription}</div>
      </div>
    </div>
  );
}

export default CartProduct;

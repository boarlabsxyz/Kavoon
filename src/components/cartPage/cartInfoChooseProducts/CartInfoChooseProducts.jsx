import CartProduct from 'src/components/cartPage/cartProduct';

import CancelIcon from 'src/icons/cancelIcon';
import { getLocalPrice, getFormattedPrice } from 'src/helpers/priceLocalization';
import lang from 'src/i18n/lang';
import useRx from 'src/hooks/useRx';

import st from './CartInfoChooseProducts.module.css';

function CartInfoChooseProducts({ vm, language }) {
  const totalSum = getLocalPrice(useRx(vm.totalSum), language);
  const productVMs = useRx(vm.productVMs);
  const countValue = useRx(vm.count);

  const formattedTotalSum = getFormattedPrice(totalSum, language);

  return (
    <div className={st.wrapper}>
      <h1 className={st.status}>
        {lang('BreadcrumbCart', language)}
        {countValue !== 0 && (
          <span className={st.statusAmount}>
            {`(${countValue} ${lang('EndingOfWord', language)(
              countValue,
              lang('Product', language)
            )})`}
          </span>
        )}
      </h1>
      <div className={st.products}>
        {countValue === 0 ? (
          <span className={st.emptyCart}>
            🤔 {lang('YourEmptyCart', language)}
          </span>
        ) : (
          <>
            {productVMs.map((productVM) => (
              <div className={st.product} key={productVM.cartId}>
                <CartProduct vm={productVM} language={language} />
                <button
                  type="button"
                  className={st.cancelBtn}
                  aria-label="cancel-button"
                  onClick={() => vm.deleteProduct(productVM.cartId)}
                >
                  <CancelIcon width="14" height="14" />
                </button>
              </div>
            ))}
            <div className={st.totalSum}>
              <span className={st.totalSumText}>
                {lang('Total', language)}:
              </span>
              <span className={st.totalSumNum}>{formattedTotalSum}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartInfoChooseProducts;

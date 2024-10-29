import React from 'react';

import CustomImage from 'src/components/common/customImage';
import RespScreenWidth from 'src/data/mediaConst';
import applyDiscount from 'src/helpers/applyDiscount';
import shimmerUrl from 'src/helpers/shimmerUrl';
import lang from 'src/i18n/lang';

function ProductDiscountInComplect({ vm, language, howMany, discount }) {
  const currentPrice = applyDiscount(
    language === 'en' || language === 'pl' ? vm.priceEURO : vm.priceUAH,
    discount
  );
  const marginBottom = howMany > 3 ? '10px' : '18px';

  return (
    <>
      <div className="product-wrapper">
        <div className="image-wrapper">
          <CustomImage
            src={vm.image}
            alt={vm.name}
            fill
            sizes="100% 100%"
            placeholder="blur"
            blurDataURL={shimmerUrl}
          />
        </div>
        <div className="product-main-content">
          <span className="title">
            {vm.count > 1
              ? `${lang(vm.name, language)} x${vm.count}`
              : lang(vm.name, language)}
          </span>
          <span className="volume">
            {lang('Volume', language)}
            <span className="numerical-value">
              {vm.volume}
              {lang('Liters', language)}
            </span>
          </span>
          <span className="numerical-value">
            {currentPrice * vm.count}
            {lang('Currency', language)}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .product-wrapper {
            display: flex;
            margin-bottom: ${marginBottom};
          }
          .image-wrapper {
            position: relative;
            width: 120px;
            height: 120px;
            flex-shrink: 0;
          }
          .image-wrapper img {
            object-fit: cover;
          }
          .product-main-content {
            display: flex;
            flex-direction: column;
            margin-left: 19px;
            padding-top: 14px;
            letter-spacing: 0.89px;
            line-height: 20px;
          }
          .product-main-content span {
            margin-bottom: 16px;
          }
          .numerical-value {
            font-weight: 500;
            margin-left: 4px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .image-wrapper {
              width: 100px;
              height: 100px;
            }
            .product-wrapper {
              margin-bottom: 10px;
            }
            .product-main-content {
              font-size: 14px;
            }
            .product-main-content span {
              margin-bottom: 10px;
            }
            .product-main-content {
              margin-left: 10px;
              padding-top: 6px;
            }
          }
        `}
      </style>
    </>
  );
}
export default ProductDiscountInComplect;

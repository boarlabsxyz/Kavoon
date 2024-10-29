import lang from 'src/i18n/lang';
import { CUSTOMER_PARAMETERS } from 'src/data/constants';
import { ProductInCart } from 'src/types/product';
import { Language } from 'src/types/language';

export function formatDimensions(
  product: ProductInCart,
  language: Language
): string {
  const { dimensions, size, addSize } = product;
  let currentDimensions = '';
  if (dimensions) {
    const dimensionsArray = Object.entries(dimensions);

    const dimensionsString =
      typeof dimensions === 'string'
        ? lang(dimensions, language)
        : dimensionsArray.reduce((acc, item, index) => {
            const value = item[1] || `\u2014`;
            return index === 0
              ? `${item[0]}(${value}${lang('Santimeters', language)})`
              : `${acc} x ${item[0]}(${value}${lang('Santimeters', language)})`;
          }, '');

    if (size === CUSTOMER_PARAMETERS) {
      currentDimensions = dimensionsString;
    } else if (size) {
      currentDimensions = `${size} ${lang('Santimeters', language)}`;
    } else if (addSize === 'customSize') {
      currentDimensions = lang('CustomSize', language);
    } else {
      currentDimensions = addSize;
    }
  } else {
    currentDimensions = `${size} ${lang('Santimeters', language)}`;
  }

  return currentDimensions;
}

export const formatValueWithUnit = (
  value: string,
  unitOfMeasure: string | undefined,
  lan: Language
): string => {
  if (unitOfMeasure === undefined) {
    return lang(value, lan) || value;
  }
  return `${value} ${lang(unitOfMeasure, lan)}`;
};

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

type PriceType = { priceEURO: number; priceUAH: number };

export function getLocalPrice(
  { priceEURO, priceUAH }: PriceType,
  language: Language
) {
  return language === 'uk' ? priceUAH : priceEURO;
}

export const getFormattedPrice = (
  price: number,
  language: Language
): string => {
  const locale = language === 'uk' ? 'uk-UA' : 'pl-PL';

  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return `${formatter.format(price)} ${lang('Currency', language)}`;
};

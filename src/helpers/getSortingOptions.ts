import { MOST_POPULAR } from 'src/data/constants';
import { Language } from 'src/types/language';

export type SortingLabel =
  | 'mostPopular'
  | 'newest'
  | 'lowestPrice'
  | 'highestPrice';

export type SortingOption = {
  value: string;
  label: SortingLabel;
};

export const getSortingOptions = (
  language: Language,
  label: SortingLabel
): SortingOption[] => {
  const currentPrice = language === 'uk' ? 'priceUAH' : 'priceEURO';
  return [
    { value: `${MOST_POPULAR}-desc`, label: 'mostPopular' as SortingLabel },
    { value: 'createdAt-desc', label: 'newest' as SortingLabel },
    { value: `${currentPrice}-asc`, label: 'lowestPrice' as SortingLabel },
    { value: `${currentPrice}-desc`, label: 'highestPrice' as SortingLabel },
  ].filter((option) => option.label !== label);
};

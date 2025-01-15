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
  label: SortingLabel = 'mostPopular'
): SortingOption[] => {
  const currentPrice = language === 'uk' ? 'priceUAH' : 'priceEURO';
  return [
    { value: 'hasTopBadge-desc', label: 'mostPopular' as SortingLabel },
    { value: 'createdAt-desc', label: 'newest' as SortingLabel },
    { value: `${currentPrice}-asc`, label: 'lowestPrice' as SortingLabel },
    { value: `${currentPrice}-desc`, label: 'highestPrice' as SortingLabel },
  ].filter((option) => option.label !== label);
};

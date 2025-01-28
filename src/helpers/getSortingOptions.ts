import { INITIAL_SORTING_OPTION } from 'src/data/constants';
import { Language } from 'src/types/language';
import { SortingLabel, SortingOption } from 'src/types/sorting';

export const getSortingOptions = (
  language: Language,
  label: SortingLabel
): SortingOption[] => {
  const currentPrice = language === 'uk' ? 'priceUAH' : 'priceEURO';
  return [
    { value: INITIAL_SORTING_OPTION, label: 'mostPopular' as SortingLabel },
    { value: 'createdAt-desc', label: 'newest' as SortingLabel },
    { value: `${currentPrice}-asc`, label: 'lowestPrice' as SortingLabel },
    { value: `${currentPrice}-desc`, label: 'highestPrice' as SortingLabel },
  ].filter((option) => option.label !== label);
};

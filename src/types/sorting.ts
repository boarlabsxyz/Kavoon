export type SortingLabel =
  | 'mostPopular'
  | 'newest'
  | 'lowestPrice'
  | 'highestPrice';

export type SortingOption = {
  value: string;
  label: SortingLabel;
};

export type SortingDirection = 'asc' | 'desc';

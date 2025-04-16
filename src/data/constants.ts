export const SECONDS_IN_DAY = 86400;
export const FIVE_SECONDS = 5;

// Status Dev Work Page
export const FLOWERS_WAY_PROJECT_ID = 15562078;
export const SALES_MAP_PROJECT_ID = 37520450;
export const PER_PAGE = '100';
export const SIX_MONTHS_AGO = new Date(new Date().setMonth(-6)).toISOString();
export const BASE_URL = 'https://gitlab.com/api/v4/projects';

// Types of products
const BICYCLE_EQUIPMENT_STRING = 'BicycleEquipment';
const BAG_ACCESSORIES_STRING = 'BagAccessories';
const CITY_COLLECTION_STRING = 'CityCollection';
const IN_STOCK_STRING = 'InStock';
const ALL_PRODUCTS_STRING = 'AllProducts';
const CHEVRONS_STRING = 'Chevrons';

export type Category =
  | typeof BICYCLE_EQUIPMENT_STRING
  | typeof BAG_ACCESSORIES_STRING
  | typeof CITY_COLLECTION_STRING
  | typeof IN_STOCK_STRING
  | typeof ALL_PRODUCTS_STRING
  | typeof CHEVRONS_STRING;

export const BICYCLE_EQUIPMENT: Category = BICYCLE_EQUIPMENT_STRING;
export const BAG_ACCESSORIES: Category = BAG_ACCESSORIES_STRING;
export const CITY_COLLECTION: Category = CITY_COLLECTION_STRING;
export const IN_STOCK: Category = IN_STOCK_STRING;
export const CHEVRONS: Category = CHEVRONS_STRING;
export const ALL_PRODUCTS: Category = ALL_PRODUCTS_STRING;

// Categories of bicycle equipment

const HANDLEBAR_BAGS_STRING = 'HandlebarBags';
const SEAT_BAGS_STRING = 'SeatBags';
const FRAME_BAG_STRING = 'FrameBag';
const MOUNTS_STRING = 'Mounts';

export type Subcategory =
  | typeof HANDLEBAR_BAGS_STRING
  | typeof SEAT_BAGS_STRING
  | typeof FRAME_BAG_STRING
  | typeof MOUNTS_STRING;

export const SUBCATEGORIES_BICYCLE_EQUIPMENT: Record<string, Subcategory> = {
  HandlebarBags: HANDLEBAR_BAGS_STRING,
  SeatBags: SEAT_BAGS_STRING,
  FrameBag: FRAME_BAG_STRING,
  Mounts: MOUNTS_STRING,
};

export const PRODUCT_CATEGORIES: Category[] = [
  BICYCLE_EQUIPMENT,
  CITY_COLLECTION,
  BAG_ACCESSORIES,
  CHEVRONS,
  IN_STOCK,
  ALL_PRODUCTS,
];

export type ProductKit = {
  id: string;
  name: string;
  imgPath: string;
};

export const PRODUCT_KIT: ProductKit = {
  id: 'handlebar-mount',
  name: 'HandlebarMount',
  imgPath: '/products/handlebar-mount/handlebar-mount_120x120@3x.png',
};

const CUSTOMER_PARAMETERS_STRING = 'CustomerParameters';
export type CustomerParameters = typeof CUSTOMER_PARAMETERS_STRING;
export const CUSTOMER_PARAMETERS: CustomerParameters =
  CUSTOMER_PARAMETERS_STRING;

export const [INCREASE, DECREASE, STORAGE, CART_DATA] = [
  'increase',
  'decrease',
  'storage',
  'cartData',
] as const;

export const INITIAL_SORTING_OPTION = 'hasTopBadge-desc';

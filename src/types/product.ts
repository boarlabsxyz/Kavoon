import {
  CustomerParameters,
  Category,
  Subcategory,
  ProductKit,
} from 'src/data/constants';

import { FabricColor, Fabric } from 'src/data/data/fabrics/fabrics';

export interface IVideo {
  videoTitle: string;
  embedVideoId: string;
}

type ProductSmallDesc = {
  init: object;
  id: string;
  name: string;
  subcategory?: string;
  volume?: string;
  priceEURO: number;
  priceUAH: number;
  productDetailsWizardVM?: object;
  productDetailsThingsTookVM?: object;
  productDetailsImgGalleryVM?: object;
  productDetailsSeeMoreVM: object;
  metaImgPath: string;
  embedVideoId?: string;
  productDetailsVideoVM?: IVideo;
};

export interface ProductWeightData {
  fabric: string;
  weight: number | string;
}

export interface ProductFabricData {
  fabric: FabricColor;
}
export type Weight = ProductWeightData[] | CustomerParameters | number;

export type Currencies = {
  UAH: number;
  EUR: number;
};

export type FabricPrice = {
  cordura: Currencies;
  xpac: Currencies;
};

export type Price = Currencies | FabricPrice;

type CustomSizeParameter = {
  scheme_id: string;
  schemeImageSrc: string;
  parameters: string[];
};

type Product = {
  id: string;
  name: string;
  volume: string;
  size: string;
  sizeOfTheClosedBag?: boolean;
  weight: Weight;
  material: string;
  description: { short: string; main: string; conclusion: string };
  gallery: number;
  price: Price;
  fabrics: ProductFabricData[] | Fabric;
  print?: string;
  addSizes?: string[];
  fixings?: string[];
  zip?: string[];
  customSizeParameters?: CustomSizeParameter[];
  embedVideo: { id: string; title: string };
  category: Category;
  subcategory: Subcategory;
  productKit: ProductKit;
};

export type ProductInCart = {
  name?: string;
  id: string;
  cartId: string;
  count: number;
  priceUAH: number;
  priceEURO: number;
  dimensions?: string;
  size?: string;
  addSize?: string;
  volume?: string;
  sizeOfTheClosedBag?: boolean;
  fabric?: string;
  color?: string;
  materialPrint?: string;
  picture?: string;
  additionProductData?: {
    count: number;
  };
  fixing?: string;
  choosenZip?: string;
};

export default Product;

export type Field = { name: string; field: string; unitOfMeasure?: string };

import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  Category,
  Subcategory,
} from 'src/data/constants';
import { Price, FabricPrice, Currencies } from 'src/types/product';
import toKebabCase from 'src/helpers/toKebabCase';
import productIDCollectionForTopSalesBadge from 'src/data/data/productsIDsArrayForTopSaleBadge';

interface IProductListItemVM {
  name: string;
  mainPropertyName: string;
  mainPropertyValue: string;
  unitNameOfMainProperty: string;
  id: string;
  category: Category;
  subcategory: Subcategory;
  price: Price;
  createdAt: string;
}

export default class ProductListItemVM {
  id: string;

  name: string;

  mainPropertyName?: string;

  mainPropertyValue?: string;

  unitNameOfMainProperty?: string;

  priceEURO: number;

  priceUAH: number;

  mainImgPath: string;

  href: string;

  allowColorOptionBlock: boolean;

  category: Category;

  subcategory: Subcategory;

  hasTopBadge: boolean;

  createdAt: string;

  constructor({
    name,
    mainPropertyName,
    mainPropertyValue,
    unitNameOfMainProperty,
    id,
    category,
    subcategory,
    price,
    createdAt,
  }: IProductListItemVM) {
    this.id = id;
    this.name = name;
    this.mainPropertyName = mainPropertyName;
    this.mainPropertyValue = mainPropertyValue;
    this.unitNameOfMainProperty = unitNameOfMainProperty;
    this.mainImgPath = `/products/${id}/${id}_255x230@3x.png`;
    this.href = `/${'shop'}/${toKebabCase(category)}/${id}`;
    this.allowColorOptionBlock =
      subcategory !== SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts &&
      category !== 'InStock';
    this.category = category;
    this.subcategory = subcategory;
    this.hasTopBadge = productIDCollectionForTopSalesBadge.includes(id);
    this.createdAt = createdAt;
    if (ProductListItemVM.isFabricPrice(price)) {
      this.setFabricPrice(price);
    } else {
      this.setPrice(price);
    }
  }

  static isFabricPrice(price: Price): price is FabricPrice {
    return 'cordura' in price || 'xpac' in price;
  }

  private setFabricPrice(price: FabricPrice): void {
    this.priceUAH = price.cordura.UAH;
    this.priceEURO = price.cordura.EUR;
  }

  private setPrice(price: Currencies): void {
    this.priceUAH = price.UAH;
    this.priceEURO = price.EUR;
  }
}

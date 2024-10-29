import { BehaviorSubject, Observable } from 'rxjs';

export type PriceEURO = number;
export type PriceUAH = number;

export interface IColor {
  largeImgSrc: string;
  name: string;
  smallImgSrc: string;
}

export interface IFabricField {
  name: string;
  colors: IColor[];
}

export interface IFabric {
  fabric: IFabricField;
  priceEURO: PriceEURO;
  priceUAH: PriceUAH;
}

export interface IMappedColor extends IColor {
  selected: boolean;
}

export interface IMappedFabric {
  name: string;
  colors: IMappedColor[];
  priceEURO: PriceEURO;
  priceUAH: PriceUAH;
}

export type ColorForPreview = Omit<IColor, 'smallImgSrc'>;

export type ColorForSmallPreview = Omit<IColor, 'largeImgSrc'>;

export type ColorForSmallPreview$ = Observable<ColorForSmallPreview>;

export type ColorForPreview$ = Observable<ColorForPreview>;

export type MappedFabric$ = BehaviorSubject<IMappedFabric>;

export type SelectedColors$ = Observable<IMappedColor[]>;

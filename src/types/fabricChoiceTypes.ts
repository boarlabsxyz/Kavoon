import { BehaviorSubject, Observable } from 'rxjs';
import {
  IMappedFabric,
  ColorForSmallPreview$,
  MappedFabric$,
  SelectedColors$,
  ColorForPreview$,
} from './fabricChoice';

export interface IColorPreviewVM {
  fabric$: MappedFabric$;
  colorForPreview$: ColorForPreview$;
  priceEUR$: Observable<number>;
  priceUAH$: Observable<number>;
}

export interface IModalContentParams {
  fabrics: IMappedFabric[];
  fabric$: MappedFabric$;
  selectedColors$: SelectedColors$;
}

export type IModalControlsVM = Omit<IModalContentParams, 'selectedColors$'>;

export interface IColorListVM {
  fabric$: MappedFabric$;
  selectedColorName$: Observable<string>;
}

export interface IModalContentVM {
  fabricModalControlsVM: IModalControlsVM;
  modalColorPreviewVM: IColorPreviewVM;
  colorListVM: IColorListVM;
  colors$: SelectedColors$;
}

export interface IWizardPickerParameters {
  fabric$: BehaviorSubject<IMappedFabric>;
  fabrics: IMappedFabric[];
  isOnlyOneFabricColor?: boolean;
}

export interface IWizardPickerVM {
  colorForSmallPreview$: ColorForSmallPreview$;
  fabricModalContentVM: IModalContentVM;
}

export type IColorPreviewParams = Omit<IModalContentParams, 'fabrics'>;

export type ColorListParams = IColorPreviewParams;

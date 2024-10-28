import { map } from 'rxjs';

import {
  IModalContentParams,
  IModalContentVM,
} from 'src/types/fabricChoiceTypes';
import colorListVM from './colorListVM';
import fabricModalControlsVM from './fabricModalControlsVM';
import modalColorPreviewVM from './modalColorPreviewVM';

function fabricsModalContentVM(params: IModalContentParams): IModalContentVM {
  const { fabric$, fabrics, selectedColors$ } = params;

  const colors$ = fabric$.pipe(map(({ colors }) => colors));

  const modalControlsVMArgs = { fabrics, fabric$ };
  const colorPreviewVMArgs = { fabric$, selectedColors$ };
  const colorListVMArgs = { fabric$, selectedColors$ };

  return {
    fabricModalControlsVM: fabricModalControlsVM(modalControlsVMArgs),
    modalColorPreviewVM: modalColorPreviewVM(colorPreviewVMArgs),
    colorListVM: colorListVM(colorListVMArgs),
    colors$,
  };
}

export default fabricsModalContentVM;

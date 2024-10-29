import { map } from 'rxjs';

import { IWizardPickerParameters } from 'src/types/fabricChoiceTypes';
import fabricsModalContentVM from './fabricsModalContentVM';

function productDetailsWizardPickerVM(params: IWizardPickerParameters) {
  const { fabric$, fabrics, isOnlyOneFabricColor } = params;

  const selectedColors$ = fabric$.pipe(
    map((fabric) => fabric.colors),
    map((colors) => colors.filter((color) => color.selected))
  );

  const colorForSmallPreview$ = selectedColors$.pipe(
    map((colors) =>
      colors.map(({ name, smallImgSrc }) => ({ name, smallImgSrc }))
    ),
    map((mappedColors) => {
      const [colorForPreview] = mappedColors.slice(-1);
      return colorForPreview;
    })
  );

  const modalContentVMParams = { fabric$, selectedColors$, fabrics };

  return {
    colorForSmallPreview$,
    fabricsModalContentVM: fabricsModalContentVM(modalContentVMParams),
    isOnlyOneFabricColor,
  };
}

export default productDetailsWizardPickerVM;

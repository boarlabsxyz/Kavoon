import { map } from 'rxjs';
import {
  IColorPreviewParams,
  IColorPreviewVM,
} from 'src/types/fabricChoiceTypes';

function modalColorPreviewVM(params: IColorPreviewParams): IColorPreviewVM {
  const { fabric$, selectedColors$ } = params;
  const priceEUR$ = fabric$.pipe(map((fabricValue) => fabricValue.priceEURO));
  const priceUAH$ = fabric$.pipe(map((fabricValue) => fabricValue.priceUAH));
  const colorForPreview$ = selectedColors$.pipe(
    map((colors) =>
      colors.map(({ name, largeImgSrc }) => ({ name, largeImgSrc }))
    ),
    map((mappedColors) => {
      const [lastChoice] = mappedColors.slice(-1);
      return lastChoice;
    })
  );

  return {
    fabric$,
    colorForPreview$,
    priceEUR$,
    priceUAH$,
  };
}

export default modalColorPreviewVM;

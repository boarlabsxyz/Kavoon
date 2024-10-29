import { map } from 'rxjs';

import { ColorListParams, IColorListVM } from 'src/types/fabricChoiceTypes';

function colorListVM(params: ColorListParams): IColorListVM {
  const { fabric$, selectedColors$ } = params;

  const selectedColorName$ = selectedColors$.pipe(
    map(([selectedColor]) => selectedColor.name)
  );

  return {
    selectedColorName$,
    fabric$,
  };
}

export default colorListVM;

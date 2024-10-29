import { IModalControlsVM } from 'src/types/fabricChoiceTypes';

function fabricModalControlsVM(params: IModalControlsVM): IModalControlsVM {
  const { fabric$, fabrics } = params;

  return {
    fabric$,
    fabrics,
  };
}

export default fabricModalControlsVM;

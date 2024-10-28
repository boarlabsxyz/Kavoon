import { BehaviorSubject } from 'rxjs';

function productDetailsKitCheckboxVM() {
  const isChecked$ = new BehaviorSubject(false);

  function toggleChecked(checked: boolean) {
    isChecked$.next(!checked);
  }

  return {
    label: 'AddToComplect',
    isChecked$,
    toggleChecked,
  };
}

export default productDetailsKitCheckboxVM;

import { useParams } from 'next/navigation';

import useRx from 'src/hooks/useRx';
import lang from 'src/i18n/lang';

import type { ICheckboxVM } from './ProductKit';
import { Language } from 'src/types/language';

import st from './Checkbox.module.css';

type Props = {
  vm: ICheckboxVM;
};

function Checkbox({ vm }: Props) {
  const { lang: locale } = useParams<{ lang: Language }>();
  const checked = useRx(vm.isChecked$);
  const label = lang(vm.label, locale);

  return (
    <label className={st.label}>
      <input
        className={st.input}
        type="checkbox"
        checked={checked}
        onChange={() => vm.toggleChecked(checked)}
      />
      <span className={st.checkbox} />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;

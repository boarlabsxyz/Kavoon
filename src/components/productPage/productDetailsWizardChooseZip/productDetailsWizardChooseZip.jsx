import { useState } from 'react';

import useRx from 'src/hooks/useRx';
import lang from 'src/i18n/lang';

import st from './ProductDetailsWizardChooseZip.module.css';

function ProductDetailsWizardChooseZip({ vm, language }) {
  const zip = useRx(vm.items);
  const selectedZip = useRx(vm.selected);
  const [currentZip, setCurrentZip] = useState(selectedZip);

  return (
    <div className={st.wrapper}>
      <span className={st.title}>{`${lang(vm.mainTheme, language)}`}</span>
      <ul className={st.list}>
        {zip.map((item) => (
          <li key={item} className={st.item}>
            <input
              checked={item === currentZip ? 'checked' : ''}
              onChange={() => {
                setCurrentZip(item);
                vm.selected.next(item);
              }}
              type="radio"
              id={item}
              name={lang(item, language)}
              key={item}
            />
            <label htmlFor={item}>{lang(item, language)}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductDetailsWizardChooseZip;

import React, { useState } from 'react';

import useRx from 'src/hooks/useRx';
import lang from 'src/i18n/lang';

import st from './ProductDetailsWizardFixing.module.css';

function ProductDetailsWizardFixing({ vm, language }) {
  const fixings = useRx(vm.items);
  const selectedFixing = useRx(vm.selected);

  const [currentFixing, setCurrentFixing] = useState(selectedFixing);

  return (
    <div>
      <span className={st.title}>{`${lang(vm.mainTheme, language)}:`}</span>
      <ul className={st.list}>
        {fixings.map((item) => (
          <li key={item} className={st.item}>
            <input
              checked={item === currentFixing ? 'checked' : ''}
              onChange={() => {
                setCurrentFixing(item);
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
export default ProductDetailsWizardFixing;

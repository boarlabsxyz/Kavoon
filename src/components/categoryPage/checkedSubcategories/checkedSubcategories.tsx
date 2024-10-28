import { Dispatch, SetStateAction } from 'react';

import { Subcategory } from 'src/data/constants';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './checkedSubcategories.module.css';

type Props = {
  subcategories: Subcategory[];
  setSubcategories: Dispatch<SetStateAction<Subcategory[]>>;
  language: Language;
};
function CheckedSubcategories({
  subcategories,
  setSubcategories,
  language,
}: Props) {
  const uncheck = (e: React.MouseEvent<HTMLDivElement>) => {
    const { value } = e.currentTarget.dataset;

    setSubcategories((prevSubcategories) =>
      prevSubcategories.filter((sub) => sub !== value)
    );
  };

  return (
    <ul className={st.subcategories}>
      {subcategories.map((subcategory) => (
        <li key={subcategory}>
          <span>{translate(subcategory, language)}</span>
          <div
            data-testid="uncheck-button"
            className={st.uncheckButton}
            onClick={uncheck}
            data-value={subcategory}
          >
            <div />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CheckedSubcategories;

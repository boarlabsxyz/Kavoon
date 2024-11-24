import { Dispatch, SetStateAction, useMemo, useState, useRef } from 'react';

import {
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  Subcategory,
} from 'src/data/constants';
import useOutsideClick from 'src/hooks/useOutsideClick';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import FilterIcon from 'src/icons/filterIcon';

import st from './subcategoryFilter.module.css';

type Props = {
  subcategories: Subcategory[];
  setSubcategories: Dispatch<SetStateAction<Subcategory[]>>;
  language: Language;
};

function SubcategoryFilter({
  subcategories,
  setSubcategories,
  language,
}: Props) {
  const [isShowList, setIsShowList] = useState(false);
  const ref = useRef();
  const allSubcategories = useMemo(
    () => Object.keys(SUBCATEGORIES_BICYCLE_EQUIPMENT) as Subcategory[],
    []
  );

  const handleCheckboxChange = ({
    target: { value, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSubcategories((prevSubcategories) =>
      checked
        ? [...prevSubcategories, value as Subcategory]
        : prevSubcategories.filter((sub) => sub !== value)
    );
    setIsShowList(false);
  };

  useOutsideClick(ref, () => {
    setIsShowList(false);
  });

  const handleClick = () => {
    setIsShowList(!isShowList);
  };

  const noCheckedSubcategories = !subcategories.length;

  return (
    <div
      ref={ref}
      className={st.wrapper}
      onClick={handleClick}
      data-cy="subcategory-filter"
    >
      <div
        className={isShowList ? `${st.title} ${st.titleOfShowList}` : st.title}
        onClick={() => {
          setIsShowList(!isShowList);
        }}
      >
        {translate('FilterByType', language)}
        <FilterIcon
          width="18"
          height="12"
          className={noCheckedSubcategories ? st.svg : `${st.activeSvg}`}
          ariaLabelContent={isShowList ? "Close subcategory filter" : "Filter subcategory by type"}
        />
      </div>
      <ul className={isShowList ? st.list : st.hiddenList}>
        {allSubcategories.map((value) => (
          <li key={value}>
            <label className={st.label}>
              <input
                checked={subcategories.includes(value)}
                className={st.input}
                type="checkbox"
                value={value}
                onChange={handleCheckboxChange}
              />
              <span className={st.checkbox} />
              <span>{translate(value, language)}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubcategoryFilter;


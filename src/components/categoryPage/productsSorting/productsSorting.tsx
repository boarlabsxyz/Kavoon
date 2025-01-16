import { Dispatch, SetStateAction, useState, useRef } from 'react';

import useOutsideClick from 'src/hooks/useOutsideClick';
import { getSortingOptions, SortingLabel } from 'src/helpers/getSortingOptions';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import MoreIcon from 'src/icons/moreIcon';

import st from './productsSorting.module.css';

type Props = {
  handleSortChange: Dispatch<SetStateAction<string>>;
  language: Language;
};
function ProductsSorting({ handleSortChange, language }: Props) {
  const [isShowList, setIsShowList] = useState(false);
  const [selected, setSelected] = useState('mostPopular' as SortingLabel);
  const ref = useRef();

  const toggleDropdown = () => setIsShowList(!isShowList);

  const handleOptionClick = (option) => {
    handleSortChange(option.value);
    setIsShowList(false);
    setSelected(option.label);
  };

  useOutsideClick(ref, () => {
    setIsShowList(false);
  });
  const sortingOptions = getSortingOptions(language, selected);

  return (
    <div
      ref={ref}
      className={
        isShowList ? `${st.select} ${st.showOptionsSelect}` : st.select
      }
    >
      <div className={st.selected} onClick={toggleDropdown}>
        {translate(selected, language)}
        <MoreIcon
          width="16"
          height="10"
          color={isShowList ? '#11a0a9' : '#c0c6d0'}
        />
      </div>
      {isShowList && (
        <ul className={st.options}>
          {sortingOptions.map((option) => (
            <li
              key={option.value}
              className={st.option}
              onClick={() => handleOptionClick(option)}
            >
              {translate(option.label, language)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsSorting;

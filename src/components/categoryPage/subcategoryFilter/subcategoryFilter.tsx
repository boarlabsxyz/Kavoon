import {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

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
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  const allSubcategories = Object.keys(
    SUBCATEGORIES_BICYCLE_EQUIPMENT
  ) as Subcategory[];

  const handleOptionClick = useCallback(
    (option: Subcategory) => {
      setSubcategories((prevSubcategories) =>
        prevSubcategories.includes(option)
          ? prevSubcategories.filter((sub) => sub !== option)
          : [...prevSubcategories, option]
      );
      setIsShowList(false);
    },
    [setSubcategories]
  );

  const toggleDropdown = () => {
    setIsShowList((prev) => !prev);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isShowList) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev === allSubcategories.length - 1 ? 0 : prev + 1
          );
          break;

        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev <= 0 ? allSubcategories.length - 1 : prev - 1
          );
          break;

        case 'Tab':
          event.preventDefault();
          {
            const isShiftTab = event.shiftKey;
            if (isShiftTab) {
              setHighlightedIndex((prev) =>
                prev <= 0 ? allSubcategories.length - 1 : prev - 1
              );
            } else {
              setHighlightedIndex((prev) =>
                prev === allSubcategories.length - 1 ? 0 : prev + 1
              );
            }
          }

          break;

        case 'Escape':
          setIsShowList(false);
          break;

        default:
          break;
      }
    },
    [isShowList, allSubcategories]
  );

  const handleListItemFocus = useCallback((index: number) => {
    setHighlightedIndex(index);
  }, []);

  useOutsideClick(ref, () => {
    setIsShowList(false);
  });

  useEffect(() => {
    if (highlightedIndex >= 0 && isShowList) {
      const focusedElement = document.querySelector(
        `.${st.list} li:nth-child(${highlightedIndex + 1})`
      ) as HTMLElement;

      if (focusedElement) {
        focusedElement.focus();
      }
    }
  }, [highlightedIndex, isShowList]);

  return (
    <div
      ref={ref}
      className={st.wrapper}
      data-cy="subcategory-filter"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      <div
        className={isShowList ? `${st.title} ${st.titleOfShowList}` : st.title}
        onClick={toggleDropdown}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        aria-expanded={isShowList}
      >
        {translate('FilterByType', language)}
        <FilterIcon
          width="18"
          height="12"
          className={subcategories.length === 0 ? st.svg : `${st.activeSvg}`}
          ariaLabelContent={isShowList ? "Close subcategory filter" : "Filter subcategory by type"}
        />
      </div>
      {isShowList && (
        <ul
          className={isShowList ? st.list : st.hiddenList}
          role="listbox"
          aria-activedescendant={
            highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined
          }
        >
          {allSubcategories.map((value, index) => (
            <li
              key={value}
              id={`option-${index}`}
              role="option"
              aria-selected={highlightedIndex === index}
              className={highlightedIndex === index ? st.highlighted : ''}
              onClick={() => handleOptionClick(value)}
              onFocus={() => handleListItemFocus(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOptionClick(value);
                }
              }}
              tabIndex={0}
            >
              <label className={st.label}>
                <input
                  checked={subcategories.includes(value)}
                  className={st.input}
                  type="checkbox"
                  name="subcategory"
                  value={value}
                  tabIndex={-1}
                  readOnly
                />
                <span className={st.checkbox} />
                <span>{translate(value, language)}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubcategoryFilter;


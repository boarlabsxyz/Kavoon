import {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import useOutsideClick from 'src/hooks/useOutsideClick';
import { getSortingOptions } from 'src/helpers/getSortingOptions';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import MoreIcon from 'src/icons/moreIcon';

import st from './productsSorting.module.css';
import { SortingLabel } from 'src/types/sorting';

type Props = {
  handleSortChange: Dispatch<SetStateAction<string>>;
  language: Language;
};

function ProductsSorting({ handleSortChange, language }: Props) {
  const [isShowList, setIsShowList] = useState(false);
  const [selected, setSelected] = useState('mostPopular' as SortingLabel);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  const sortingOptions = getSortingOptions(language, selected);

  const toggleDropdown = () => {
    setIsShowList((prev) => !prev);
    setHighlightedIndex(-1);
  };

  const handleOptionClick = useCallback(
    (option: { value: string; label: SortingLabel }) => {
      handleSortChange(option.value);
      setSelected(option.label);
      setIsShowList(false);
    },
    [handleSortChange]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isShowList) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) => (prev + 1) % sortingOptions.length);
          break;

        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : sortingOptions.length - 1
          );
          break;

        case 'Enter':
        case ' ':
          event.preventDefault();
          if (highlightedIndex >= 0) {
            handleOptionClick(sortingOptions[highlightedIndex]);
          }
          break;

        case 'Escape':
          setIsShowList(false);
          break;

        default:
          break;
      }
    },
    [isShowList, highlightedIndex, sortingOptions, handleOptionClick]
  );

  useOutsideClick(ref, () => {
    setIsShowList(false);
  });

  useEffect(() => {
    if (highlightedIndex >= 0) {
      const focusedElement = document.querySelector(
        `.${st.options} li:nth-child(${highlightedIndex + 1})`
      ) as HTMLElement;

      if (focusedElement) {
        focusedElement.focus();
      }
    }
  }, [highlightedIndex]);

  useEffect(() => {
    const currentHandler = handleKeyDown;
    document.addEventListener('keydown', currentHandler);
    return () => {
      document.removeEventListener('keydown', currentHandler);
    };
  }, [isShowList, highlightedIndex, sortingOptions, handleKeyDown]);

  return (
    <div
      ref={ref}
      className={
        isShowList ? `${st.select} ${st.showOptionsSelect}` : st.select
      }
      aria-label="Sort products"
      aria-controls="sorting-options"
    >
      <div
        className={st.selected}
        onClick={toggleDropdown}
        tabIndex={0}
        aria-pressed={isShowList}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}
      >
        {translate(selected, language)}
        <MoreIcon
          width="16"
          height="10"
          color={isShowList ? '#11a0a9' : '#c0c6d0'}
          aria-hidden="true"
        />
      </div>
      <ul
        id="sorting-options"
        className={isShowList ? st.options : st.optionsHidden}
        role="listbox"
        aria-activedescendant={
          highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined
        }
      >
        {sortingOptions.map((option, index) => (
          <li
            key={option.label}
            id={`option-${index}`}
            role="option"
            aria-selected={highlightedIndex === index}
            className={`${st.option} ${
              highlightedIndex === index ? st.highlighted : ''
            }`}
            onClick={() => handleOptionClick(option)}
            onMouseEnter={() => setHighlightedIndex(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOptionClick(option);
              }
            }}
          >
            {translate(option.label, language)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsSorting;

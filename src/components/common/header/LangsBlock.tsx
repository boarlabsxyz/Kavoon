'use client';

import { useRef, useState } from 'react';
import useOutsideClick from 'src/hooks/useOutsideClick';
import ActiveLocale from 'src/components/common/activeLocale';
import LocaleList from 'src/components/common/localeList';

import { Language } from 'src/types/language';

import st from './LangsBlock.module.css';

type LangsBlockProps = {
  lang: Language;
};

function LangsBlock({ lang }: LangsBlockProps) {
  const [isShowList, setIsShowList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsShowList((prev) => !prev);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown();
    } else if (event.key === 'Escape' && isShowList) {
      setIsShowList(false);
    }
  };

  useOutsideClick(wrapperRef, () => setIsShowList(false));

  return (
    <div
      ref={wrapperRef}
      className={`${st.wrapper} ${isShowList ? st.open : ''}`}
      onClick={toggleDropdown}
      role="button"
      tabIndex={0}
      aria-expanded={isShowList}
      aria-haspopup="true"
      onKeyDown={handleKeyDown}
    >
      <ActiveLocale lang={lang} />
      <LocaleList />
    </div>
  );
}

export default LangsBlock;

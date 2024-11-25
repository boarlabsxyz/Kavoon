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

  useOutsideClick(wrapperRef, () => setIsShowList(false));

  return (
    <div
      ref={wrapperRef}
      className={`${st.wrapper} ${isShowList ? st.open : ''}`}
      onClick={toggleDropdown}
    >
      <ActiveLocale lang={lang} />
      <LocaleList />
    </div>
  );
}

export default LangsBlock;

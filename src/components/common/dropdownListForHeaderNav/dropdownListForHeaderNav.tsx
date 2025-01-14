import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { Language } from 'src/types/language';
import { Page } from 'src/types/page';
import translate from 'src/i18n/lang';
import RespScreenWidth from 'src/data/mediaConst';

import { getPathWithoutLocale } from 'src/helpers/getPathWithoutLocale';

import useOutsideClick from 'src/hooks/useOutsideClick';
import useHandleKeyDown from 'src/hooks/useHandleKeyDown';
import useDropdownHover from 'src/hooks/useDropdownHover';
import useWindowWidth from 'src/hooks/useWindowWidth';

import st from './dropdownListForHeaderNav.module.css';

interface DropdownListProps {
  pages: Page[];
  title: string;
  lang: Language;
}

const DropdownListForHeaderNav: React.FC<DropdownListProps> = ({
  pages,
  title,
  lang,
}) => {
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const [isShowList, setIsShowList] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  const widthScreen = useWindowWidth();
  const isMobile = widthScreen <= RespScreenWidth.screenWidthMobile;

  useEffect(() => {
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    setCurrentPath(pathWithoutLocale);
  }, [pathname]);

  useOutsideClick(wrapperRef, () => setIsShowList(false));

  const toggleDropdown = () => {
    setIsShowList((prev) => !prev);
  };

  const handleKeyDown = useHandleKeyDown(
    toggleDropdown,
    setIsShowList,
    isShowList
  );

  const { handleMouseEnter, handleMouseLeave } =
    useDropdownHover(setIsShowList);

  return (
    <button
      ref={wrapperRef}
      className={`${st.wrapper} ${isShowList ? st.open : ''}`}
      onClick={toggleDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-expanded={isShowList ? true : undefined}
      aria-haspopup="true"
      onKeyDown={handleKeyDown}
    >
      <p className={st.title}>{translate(title, lang)}</p>
      <ul
        className={isShowList || isMobile ? `${st.list}` : `${st.listDisabled}`}
      >
        {pages.map(({ target, label }) => (
          <li key={target} className={st.item} data-cy={`${target}-link`}>
            <Link
              className={
                target === currentPath
                  ? `${st.link} ${st.active}`
                  : `${st.link}`
              }
              href={`/${lang}/${target}`}
              prefetch={false}
            >
              {translate(label, lang)}
            </Link>
          </li>
        ))}
      </ul>
    </button>
  );
};

export default DropdownListForHeaderNav;

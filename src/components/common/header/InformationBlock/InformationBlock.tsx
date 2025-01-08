import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import RespScreenWidth from 'src/data/mediaConst';

import { getPathWithoutLocale } from 'src/helpers/getPathWithoutLocale';

import useDropdownHover from 'src/hooks/useDropdownHover';
import useHandleKeyDown from 'src/hooks/useHandleKeyDown';
import useOutsideClick from 'src/hooks/useOutsideClick';
import useWindowWidth from 'src/hooks/useWindowWidth';

import st from './InformationBlock.module.css';

type Props = {
  lang: Language;
};

function InformationBlock({ lang }: Props) {
  const [currentPath, setCurrentPath] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const wrapperRef = useRef<HTMLButtonElement>(null);

  const pages = [
    { target: 'about-us', label: 'MenuItemAboutUs' },
    { target: 'blog', label: 'MenuItemBlog' },
    { target: 'delivery-and-payment', label: 'DeliveryAndPayment' },
  ];

  const pathname = usePathname();

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

  const widthScreen = useWindowWidth();
  const isMobile = widthScreen <= RespScreenWidth.screenWidthMobile;

  return (
    <button
      ref={wrapperRef}
      className={`${st.wrapper} ${isShowList ? st.open : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-expanded={isShowList}
      aria-haspopup="true"
      onKeyDown={handleKeyDown}
    >
      <p className={st.title}>{translate('Information', lang)}</p>
      <ul className={isShowList || isMobile ? st.list : st.listDisabled}>
        {pages.map(({ target, label }) => (
          <li key={target} className={st.item} data-cy={`${target}-link`}>
            <Link
              className={
                target === currentPath ? `${st.link} ${st.active}` : st.link
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
}

export default InformationBlock;

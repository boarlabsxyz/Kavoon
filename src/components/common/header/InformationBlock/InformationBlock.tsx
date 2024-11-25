import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import useWindowWidth from 'src/hooks/useWindowWidth';
import RespScreenWidth from 'src/data/mediaConst';

import st from './InformationBlock.module.css';
import useOutsideClick from 'src/hooks/useOutsideClick';

type Props = {
  lang: Language;
};

function InformationBlock({ lang }: Props) {
  const [currentPath, setCurrentPath] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const pages = [
    { target: 'about-us', label: 'MenuItemAboutUs' },
    { target: 'blog', label: 'MenuItemBlog' },
    { target: 'delivery-and-payment', label: 'DeliveryAndPayment' },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const pathWithoutLocale = pathname.substring(4);
    setCurrentPath(pathWithoutLocale);
  }, [pathname]);

  useOutsideClick(wrapperRef, () => setIsShowList(false));

  const toggleDropdown = () => {
    setIsShowList((prev) => !prev);
  };

  const widthScreen = useWindowWidth();
  const isMobile = widthScreen <= RespScreenWidth.screenWidthMobile;

  return (
    <div
      ref={wrapperRef}
      className={`${st.wrapper} ${isShowList ? st.open : ''}`}
      onClick={toggleDropdown}
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
    </div>
  );
}

export default InformationBlock;

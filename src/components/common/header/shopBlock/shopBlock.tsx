import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import useWindowWidth from 'src/hooks/useWindowWidth';
import RespScreenWidth from 'src/data/mediaConst';

import st from './shopBlock.module.css';
import useOutsideClick from 'src/hooks/useOutsideClick';

type Props = {
  lang: Language;
};

function ShopBlock({ lang }: Props) {
  const [currentPath, setCurrentPath] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const pages = [
    { target: 'shop/all-products', label: 'AllProducts' },
    { target: 'shop/bicycle-equipment', label: 'BicycleEquipment' },
    { target: 'shop/bag-accessories', label: 'BagAccessories' },
    { target: 'shop/city-collection', label: 'CityCollection' },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const pathWithoutLocale = pathname.split('/').slice(2).join('/');
    setCurrentPath(pathWithoutLocale);
  }, [pathname]);

  useOutsideClick(wrapperRef, () => setIsShowList(false));

  const toggleDropdown = () => {
    setIsShowList((prev) => !prev);
  };

  const handleMouseEnter = () => setIsShowList(true);
  const handleMouseLeave = () => setIsShowList(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown();
    } else if (event.key === 'Escape' && isShowList) {
      setIsShowList(false);
    }
  };

  const widthScreen = useWindowWidth();
  const isMobile = widthScreen <= RespScreenWidth.screenWidthMobile;

  return (
    <div
      ref={wrapperRef}
      className={`${st.wrapper} ${isShowList ? st.open : ''}`}
      onClick={toggleDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-expanded={isShowList}
      aria-haspopup="true"
      onKeyDown={handleKeyDown}
    >
      <p className={st.title}>{translate('Shop', lang)}</p>
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

export default ShopBlock;

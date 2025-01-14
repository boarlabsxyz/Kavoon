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
    // { target: 'about-us', label: 'MenuItemAboutUs' },
    // { target: 'blog', label: 'MenuItemBlog' },
    // { target: 'delivery-and-payment', label: 'DeliveryAndPayment' },
    { target: 'shop/all-products', label: 'AllProducts' },
    { target: 'shop/bicycle-equipment', label: 'BicycleEquipment' },
    { target: 'shop/bag-accessories', label: 'BagAccessories' },
    { target: 'shop/city-collection', label: 'CityCollection' },
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
      // onClick={toggleDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onMouseOver={toggleDropdown}
      // role="button"
      role="menu"
      tabIndex={0}
      aria-expanded={isShowList}
      aria-haspopup="true"
      onKeyDown={handleKeyDown}
    >
      {/* <div className={st.hoverContainer}> */}
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
    // </div>
  );
}

export default ShopBlock;

// import { Language } from 'src/types/language';
// import DropdownList from '../../dropdownList';
// import { Messenger, Network } from 'src/types/pickersProps';

// type Props = {
//   lang: Language;
//   readonly optionsList: ReadonlyArray<Messenger | Network>;
//   readonly handleSelect: (item: Messenger | Network) => void;
//   readonly pickedItem: Messenger | Network;
// };

// function shopBlock({ lang, optionsList, handleSelect, pickedItem }: Props) {
//   return (
//     <DropdownList
//       optionsList={optionsList}
//       handleSelect={handleSelect}
//       pickedItem={pickedItem}
//     />
//   );
// }

// export default shopBlock;
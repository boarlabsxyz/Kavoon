'use client';

import { useEffect, useRef, ElementRef } from 'react';
import { usePathname } from 'next/navigation';

import NavMain from 'src/components/common/header/Navigation/NavMain';
import CartStatusForMenu from 'src/components/common/header/cartStatusForMenu';

import { Language } from 'src/types/language';

import st from './Navigation.module.css';

type Props = {
  children: React.ReactElement;
  lang: Language;
};

function Navigation({ children, lang }: Props) {
  const menuRef = useRef<ElementRef<'div'>>();
  const buttonRef = useRef<ElementRef<'button'>>();
  const pathname = usePathname();

  useEffect(() => {
    const onClick = () => {
      menuRef.current.classList.toggle(`${st.mobileMenuIsOpen}`);
      document.body.classList.toggle('no-scroll');
    };

    const menuButtonRef = buttonRef.current;

    menuButtonRef.addEventListener('click', onClick);

    return () => {
      menuButtonRef.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    menuRef.current.classList.remove(`${st.mobileMenuIsOpen}`);
    document.body.classList.remove('no-scroll');
  }, [pathname]);

  return (
    <div ref={menuRef} className={st.wrapper}>
      <button
        ref={buttonRef}
        className={st.mobileMenuButton}
        aria-label="mobile-menu-button"
        data-cy="mobile-menu-btn"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={st.content}>
        <NavMain language={lang} />
        <div className={st.statusAndLangAndSocial}>{children}</div>
      </div>
    </div>
  );
}

export default Navigation;

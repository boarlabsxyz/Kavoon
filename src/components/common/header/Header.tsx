'use client';

import { FC, useEffect, useRef, ElementRef } from 'react';

import Container from 'src/components/common/container';

import st from './Header.module.css';

type Props = {
  children: React.ReactElement;
};

const Header: FC<Props> = ({ children }) => {
  const headerRef = useRef<ElementRef<'header'>>();

  useEffect(() => {
    const onScroll = () => {
      const scrollThreshold = 2;
      const bodyScrollTop = document.body.scrollTop;
      const htmlScrollTop = document.documentElement.scrollTop;
      const force =
        bodyScrollTop > scrollThreshold || htmlScrollTop > scrollThreshold;

      headerRef.current?.classList.toggle(st.bottomBorder, force);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={st.wrapper} data-cy="header">
      <Container>{children}</Container>
    </header>
  );
};

export default Header;

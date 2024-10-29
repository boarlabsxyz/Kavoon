import { ReactElement } from 'react';
import Link from 'next/link';

import st from './IconLink.module.css';

type Props = {
  href: string;
  ariaLabel: string;
  background?: 'light' | 'dark';
  children: ReactElement;
};

function IconLink({ href, ariaLabel, children, background = 'light' }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`${st.link} ${st[background]}`}
    >
      {children}
    </Link>
  );
}

export default IconLink;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import InformationBlock from 'src/components/common/header/InformationBlock';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import styles from 'src/components/common/header/Navigation/Navigation.module.css';

type NavMainProps = {
  language: Language;
};

const pages = [
  { target: '', label: 'Home' },
  { target: 'shop', label: 'MenuItemShop' },
];

function NavMain({ language }: NavMainProps) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.substring(4);
  const pathSegments = pathWithoutLocale.split('/');

  return (
    <nav className={styles.navMain}>
      <ul className={styles.list}>
        {pages.map(({ target, label }) => (
          <li key={target} data-cy={`${target}-header-link`}>
            <Link
              className={
                pathSegments.includes(target.split('/')[0])
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              href={`/${language}/${target}`}
              prefetch={false}
            >
              {lang(label, language)}
            </Link>
          </li>
        ))}
      </ul>
      <InformationBlock lang={language} />
    </nav>
  );
}

export default NavMain;

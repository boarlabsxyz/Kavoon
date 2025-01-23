'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ShopBlock from '../shopBlock/shopBlock';
import InformationBlock from 'src/components/common/header/InformationBlock';
import CartStatus from '../../cartStatus';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import { getPathWithoutLocale } from 'src/helpers/getPathWithoutLocale';

import styles from 'src/components/common/header/Navigation/Navigation.module.css';

type NavMainProps = {
  language: Language;
};

const pages = [{ target: '', label: 'Home' }];

function NavMain({ language }: NavMainProps) {
  const pathname = usePathname();
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const pathSegments = pathWithoutLocale.split('/');

  return (
    <nav className={styles.navMain}>
      <ul className={styles.list}>
        {pages.map(({ target, label }) => {
          const isTargetActive =
            pathSegments[0] === target && pathWithoutLocale !== 'shop/cart';

          return (
            <li key={target} data-cy={`${target}-header-link`}>
              <Link
                className={
                  isTargetActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
                href={`/${language}/${target}`}
                prefetch={false}
              >
                {lang(label, language)}
              </Link>
            </li>
          );
        })}
      </ul>
      <ShopBlock lang={language} />
      <InformationBlock lang={language} />
      <div className={styles.cartStatus}>
        <CartStatus language={language} />
      </div>
    </nav>
  );
}

export default NavMain;

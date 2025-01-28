'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Language } from 'src/types/language';
import lang from 'src/i18n/lang';
import { getPathWithoutLocale } from 'src/helpers/getPathWithoutLocale';

import st from './FooterMenu.module.css';

type Props = {
  language: Language;
};

function FooterMenu({ language }: Props) {
  const pathname = usePathname();
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  const pages = [
    { target: 'about-us', label: 'MenuItemAboutUs' },
    { target: 'blog', label: 'MenuItemBlog' },
    { target: 'delivery-and-payment', label: 'DeliveryAndPayment' },
    { target: 'policy', label: 'PolicyTitle' },
  ];

  return (
    <ul className={st.list}>
      {pages.map(({ target, label }) => (
        <li key={target} className={st.item} data-cy={`${target}-footer-link`}>
          <Link
            className={
              target === pathWithoutLocale ? `${st.link} ${st.active}` : st.link
            }
            href={`/${language}/${target}`}
            prefetch={false}
          >
            {lang(label, language)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FooterMenu;

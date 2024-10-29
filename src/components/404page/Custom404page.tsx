'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import CustomImage from 'src/components/common/customImage';
import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './Custom404page.module.css';

export default function Custom404() {
  const path = usePathname();
  const segments = path.split('/');
  const locale = segments[1];
  const language = isLanguage(locale) ? locale : 'en';

  const links = [
    { target: '', label: 'Home' },
    { target: 'shop', label: 'MenuItemShop' },
    { target: 'blog', label: 'MenuItemBlog' },
  ];

  function goBack() {
    window.window.history.go(-2);
  }

  function isLanguage(value: string): value is Language {
    const languages: Language[] = ['en', 'pl', 'uk'];
    return languages.includes(value as Language);
  }

  return (
    <div className={st.wrapper}>
      <div className={st.main}>
        <CustomImage
          className={st.picture}
          src="/404/oops.svg"
          alt="Oops!"
          width={500}
          height={180}
        />
        <h1 className={st.title}>{translate('PageNotFound', language)}</h1>
        <button type="button" className={st.button} onClick={() => goBack()}>
          {translate('GoBack', language)}
        </button>
        <h2 className={st.subtitle}>{translate('SomeLinks', language)}</h2>
        <ul className={st.links}>
          {links.map(({ target, label }) => (
            <li
              key={target}
              className={st.link}
              data-cy={`${target}-from404-link`}
            >
              <Link href={`/${language}/${target}`} prefetch={false}>
                {translate(label, language)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

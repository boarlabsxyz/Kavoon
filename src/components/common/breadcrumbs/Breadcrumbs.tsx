import Link from 'next/link';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './Breadcrumbs.module.css';

type Props = {
  vm: { breadcrumbs: { name: string; src: string }[] };
  language: Language;
};

function BreadcrumbsNav({ vm, language }: Props) {
  return (
    <ul className={st.breadcrumbs}>
      {vm.breadcrumbs.map(({ src, name }) => (
        <li className={st.breadcrumb} key={name}>
          <Link
            href={`/${language}${src}`}
            className={st.link}
            prefetch={false}
          >
            {lang(name, language)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BreadcrumbsNav;

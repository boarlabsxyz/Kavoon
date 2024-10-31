import Link from 'next/link';

import lang from 'src/i18n/lang';

import st from './BreadcrumbsNavForBlog.module.css';

function BreadcrumbsNavForBlog({ vm, language }) {
  return (
    <ul className={st.wrapper}>
      {vm.breadcrumbs.map(({ src, name }) => (
        <li className={st.item} key={name}>
          <Link href={`/${language}${src}`}>
            {lang(name, language) || name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default BreadcrumbsNavForBlog;

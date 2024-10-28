'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';
import toKebabCase from 'src/helpers/toKebabCase';
import { Category } from 'src/data/constants';

import styles from './PureProductCategories.module.css';

interface ICategoriesItem {
  isActive: boolean;
  category: Category;
}

function CategoriesItem({ isActive, category }: ICategoriesItem) {
  const { lang: locale } = useParams<{ lang: Language }>();

  const className = ` ${isActive ? styles.active : styles.slide}`;

  return (
    <li className={styles.slideWrapper} data-category={category}>
      <Link href={`/${locale}/shop/${toKebabCase(category)}`}>
        <div className={className}>
          <p>{lang(category, locale)}</p>
        </div>
      </Link>
    </li>
  );
}

export default CategoriesItem;

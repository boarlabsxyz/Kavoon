'use client';

import CartStatus from 'src/components/common/cartStatus';
import CategoriesItem from './CategoriesItem';

import toKebabCase from 'src/helpers/toKebabCase';
import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';

import styles from './PureProductCategories.module.css';

interface IPureProductCategories {
  categories: Category[];
  activeCategory: Category;
  language: Language;
}

function PureProductCategories({
  categories,
  activeCategory,
  language,
}: IPureProductCategories) {
  return (
    <div className={styles.categoriesWrapper}>
      <ul className={styles.sliderWrapper}>
        {categories.map((category) => (
          <CategoriesItem
            key={category}
            isActive={activeCategory === toKebabCase(category)}
            category={category}
          />
        ))}
      </ul>

      <CartStatus language={language} />
    </div>
  );
}

export default PureProductCategories;

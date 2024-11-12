import Link from 'next/link';

import { Observable } from 'rxjs';

import CustomImage from 'src/components/common/customImage';
import ProductsRow from 'src/components/homePage/productsRow';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import toKebabCase from 'src/helpers/toKebabCase';
import { Category } from 'src/data/constants';
import ProductListItemVM from 'src/data/viewModels/shop/productListItemVM';

import st from './CategorySection.module.css';

type Props = {
  category: Category;
  language: Language;
  vm: Observable<ProductListItemVM[]>;
};

const CategorySection = ({ category, language, vm }: Props) => {
  const productTypeLink = `shop/${toKebabCase(category)}`;
  const content = (
    <CustomImage
      src="/icons/showAllArrow.svg"
      alt="arrow"
      width={24}
      height={24}
      className={st.image}
    />
  );

  return (
    <div>
      <div className={st.titleWrapper}>
        <div className={st.category}>
          <p>{translate(category, language)}</p>
        </div>
        <ProductsRow vm={vm} />
        <Link
          href={`/${language}/${productTypeLink}`}
          className={st.link}
          rel="noreferrer"
        >
          <p data-cy={`${toKebabCase(category)}-category-link`}>
            {translate('ViewAll', language)}
          </p>
          {content}
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;

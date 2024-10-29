import { useParams } from 'next/navigation';

import { BehaviorSubject } from 'rxjs';

import CustomImage from 'src/components/common/customImage';
import lang from 'src/i18n/lang';
import {
  getFormattedPrice,
  getLocalPrice,
} from 'src/helpers/priceLocalization';

import type { Language } from 'src/types/language';
import styles from './ProductKit.module.css';

import Checkbox from './Checkbox';

interface IKit {
  id: string;
  name: string;
  imgPath: string;
  price: {
    priceUAH: number;
    priceEURO: number;
  };
}

export interface ICheckboxVM {
  label: string;
  isChecked$: BehaviorSubject<boolean>;
  toggleChecked: (checked: boolean) => void;
}

interface IVM {
  kit: IKit;
  productDetailsKitCheckboxVM: ICheckboxVM;
}

interface IVM {
  vm: IVM;
}

function ProductKit({ vm }: IVM) {
  const { lang: locale } = useParams<{ lang: Language }>();
  const title = lang('AddToComplect', locale);
  const name = lang(vm.kit.name, locale);
  const localePrice = getLocalPrice(vm.kit.price, locale);
  const price = getFormattedPrice(localePrice, locale);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}:</p>
      <div className={styles.innerWrapper}>
        <CustomImage
          className={styles.image}
          src={vm.kit.imgPath}
          alt={name}
          width={100}
          height={100}
        />
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>{price}</p>
          <Checkbox vm={vm.productDetailsKitCheckboxVM} />
        </div>
      </div>
    </div>
  );
}

export default ProductKit;

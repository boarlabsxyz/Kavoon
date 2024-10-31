import { FC } from 'react';

import CustomImage from 'src/components/common/customImage';
import ModalChooseButton from 'src/components/common/modalChooseButton';

import lang from 'src/i18n/lang';
import useRx from 'src/hooks/useRx';
import { Language } from 'src/types/language';
import shimmerUrl from 'src/helpers/shimmerUrl';
import {
  getLocalPrice,
  getFormattedPrice,
} from 'src/helpers/priceLocalization';
import { IColorPreviewVM } from 'src/types/fabricChoiceTypes';
import { ColorForPreview } from 'src/types/fabricChoice';

import styles from './ModalColorPreview.module.css';

interface IProps {
  vm: IColorPreviewVM;
  language: Language;
  onClick: () => void;
}

const ModalColorPreview: FC<IProps> = (props) => {
  const { language, vm, onClick } = props;
  const { name, largeImgSrc }: ColorForPreview = useRx(vm.colorForPreview$);
  const priceEURO: number = useRx(vm.priceEUR$);
  const priceUAH: number = useRx(vm.priceUAH$);
  const currentPrice = getLocalPrice({ priceUAH, priceEURO }, language);
  const formattedCurrentPrice = getFormattedPrice(currentPrice, language);

  return (
    <div className={styles.previewWrapper}>
      <p className={styles.previewTitle}>{lang(name, language)}</p>

      <div className={styles.previewImage}>
        <CustomImage
          src={largeImgSrc}
          alt={name}
          fill
          sizes="100% 100%"
          placeholder="blur"
          blurDataURL={shimmerUrl}
          className={styles.img}
        />
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.label}>{lang('Cost', language)}:</p>
        <p className={styles.price}>{formattedCurrentPrice}</p>
      </div>

      <ModalChooseButton onButtonClick={onClick} language={language} />
    </div>
  );
};
export default ModalColorPreview;

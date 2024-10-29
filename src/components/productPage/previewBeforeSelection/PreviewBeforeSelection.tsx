import { useCallback } from 'react';

import { BehaviorSubject } from 'rxjs';

import CustomImage from 'src/components/common/customImage';
import ModalChooseButton from 'src/components/common/modalChooseButton';

import shimmerUrl from 'src/helpers/shimmerUrl';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';
import { FabricColorPrint } from 'src/data/data/fabrics/fabrics';

import st from './PreviewBeforeSelection.module.css';

type Props = {
  language: Language;
  onClick: () => void;
  selectedPrint: BehaviorSubject<FabricColorPrint>;
};

function PreviewBeforeSelection({ language, onClick, selectedPrint }: Props) {
  const { value } = selectedPrint;

  const getClientChoice = useCallback(() => {
    selectedPrint.next(value);
    onClick();
  }, [value, selectedPrint, onClick]);

  return (
    <div className={st.wrapper}>
      <p className={st.title}>{lang(value.name, language)}</p>

      <div className={st.img}>
        <CustomImage
          src={value.largeImgSrc}
          alt={value.name}
          fill
          sizes="100% 100%"
          placeholder="blur"
          blurDataURL={shimmerUrl}
        />
      </div>

      <ModalChooseButton onButtonClick={getClientChoice} language={language} />
    </div>
  );
}

export default PreviewBeforeSelection;

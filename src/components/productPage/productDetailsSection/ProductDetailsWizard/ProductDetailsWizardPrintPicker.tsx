import { Observable } from 'rxjs';

import CustomImage from 'src/components/common/customImage';
import ModalWindow from 'src/components/common/modalWindow';
import PrintsModalContent from 'src/components/productPage/printsModalContent';

import useToggle from 'src/hooks/useToggle';
import useRx from 'src/hooks/useRx';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './ProductDetailsWizardPrintPicker.module.css';

type Props = {
  vm: {
    selected: Observable<{ smallImgSrc: string; name: string }>;
    colorForSmallPreview$: Observable<
      { smallImgSrc: string; name: string; largeImgSrc: string }[]
    >;
    isOnlyOneFabricPrint: boolean;
  };
  language: Language;
};

function ProductDetailsWizardPrintPicker({ vm, language }: Props) {
  const prints = useRx(vm.colorForSmallPreview$);
  const selectedPrint = useRx(vm.selected);

  if (vm.isOnlyOneFabricPrint) {
    return (
      <div>
        <p className={`${st.mainTitle} ${st.disabled}`}>
          {lang('SelectPrints', language)}
        </p>
        <button
          type="button"
          aria-label="choose print"
          className={`${st.status} ${st.disabledStatus}`}
          disabled
        >
          <div className={st.img}>
            <CustomImage
              src={selectedPrint.smallImgSrc}
              alt={selectedPrint.name}
              width={35}
              height={35}
            />
          </div>
          <p className={`${st.statusTitle} ${st.disabled}`}>
            {lang(selectedPrint.name, language)}
          </p>
          <div className={`${st.statusMore} ${st.statusMoreDisabled}`} />
        </button>
      </div>
    );
  }

  const [showModal, toggleModal] = useToggle(false);

  return (
    <div>
      <p className={st.mainTitle}>{lang('SelectPrints', language)}</p>
      <button
        type="button"
        aria-label="choose print"
        className={st.status}
        onClick={() => {
          toggleModal();
        }}
      >
        <div className={st.img}>
          <CustomImage
            src={selectedPrint.smallImgSrc}
            alt={selectedPrint.name}
            width={35}
            height={35}
          />
        </div>
        <p className={st.statusTitle}>{lang(selectedPrint.name, language)}</p>
        <div className={st.statusMore} />
      </button>
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <PrintsModalContent
            vm={{
              prints: prints,
              selectedPrint: vm.selected,
            }}
            language={language}
            onClose={toggleModal}
          />
        </ModalWindow>
      )}
    </div>
  );
}
export default ProductDetailsWizardPrintPicker;

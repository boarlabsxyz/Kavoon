import ModalColorPreview from 'src/components/productPage/modalColorPreview';
import FabricModalControls from 'src/components/productPage/fabricModalControls';
import PrintsModalPagination from 'src/components/productPage/printsModalPagination';
import ColorList from 'src/components/productPage/colorList';

import useRx from 'src/hooks/useRx';
import lang from 'src/i18n/lang';
import usePagination from 'src/hooks/usePagination';

import st from './FabricsModalContent.module.css';

function FabricsModalContent({ vm, language, onClose }) {
  const { colors$, fabricModalControlsVM, modalColorPreviewVM, colorListVM } =
    vm;
  const colors = useRx(colors$);

  const { currentData, currentPage, setCurrentPage, maxPages } = usePagination(
    colors,
    9
  );

  return (
    <>
      <h1 className={st.title}>{lang('ChooseFabricTitle', language)}</h1>
      <div className={st.content}>
        <div className={st.fabricsWrapper}>
          <ModalColorPreview
            vm={modalColorPreviewVM}
            language={language}
            onClick={onClose}
          />
        </div>
        <div className={st.additionalFabricsWrapper}>
          <FabricModalControls
            vm={fabricModalControlsVM}
            setCurrentPage={setCurrentPage}
            language={language}
          />
          <ColorList vm={colorListVM} fabricColors={currentData()} />
          <PrintsModalPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesQuantity={maxPages}
            language={language}
          />
        </div>
      </div>
    </>
  );
}

export default FabricsModalContent;

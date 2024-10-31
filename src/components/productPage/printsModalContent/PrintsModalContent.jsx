import React from 'react';

import PrintsList from 'src/components/productPage/printList';
import PrintsModalPagination from 'src/components/productPage/printsModalPagination';
import PreviewBeforeSelection from 'src/components/productPage/previewBeforeSelection';

import usePagination from 'src/hooks/usePagination';
import lang from 'src/i18n/lang';

import st from './PrintsModalContent.module.css';

function PrintsModalContent({ vm, language, onClose }) {
  const { currentData, currentPage, setCurrentPage, maxPages } = usePagination(
    vm.prints,
    9
  );

  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>{lang('MenuItemPrints', language)}</h1>
      <div className={st.printsDetails}>
        <PreviewBeforeSelection
          language={language}
          onClick={onClose}
          selectedPrint={vm.selectedPrint}
        />
        <div className={st.additionalPrintsWrapper}>
          <PrintsList
            printsList={currentData()}
            currentImage={vm.selectedPrint}
            language={language}
          />
          <PrintsModalPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesQuantity={maxPages}
            language={language}
          />
        </div>
      </div>
    </div>
  );
}

export default PrintsModalContent;

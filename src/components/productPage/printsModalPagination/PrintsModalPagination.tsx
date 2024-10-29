import React, { Dispatch, SetStateAction } from 'react';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './PrintsModalPagination.module.css';

type Props = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pagesQuantity: number;
  language: Language;
};

function PrintsModalPagination({
  currentPage,
  setCurrentPage,
  pagesQuantity,
  language,
}: Props) {
  return (
    <div className={st.wrapper}>
      <button
        className={st.button}
        type="button"
        disabled={currentPage === 1 && true}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <svg
          className={st.previous}
          viewBox="0 0 9 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.44212 14.3462L7.95015 13.821C8.2304 13.5303 8.2304 13.0578 7.95015 12.7666L2.73931 7.28601L8.02907 1.79799C8.30932 1.50724 8.30932 1.03475 8.02907 0.745482L7.52103 0.217724C7.24258 -0.0734039 6.78701 -0.0737095 6.50676 0.217043L0.20989 6.75177C-0.0703597 7.04253 -0.0703597 7.51315 0.20989 7.80428L6.42784 14.3455C6.70809 14.6367 7.16187 14.637 7.44212 14.3462Z"
          />
        </svg>
        {lang('BackBtn', language)}
      </button>
      <p className={st.pages}>
        {currentPage}/{pagesQuantity}
      </p>
      <button
        className={st.button}
        type="button"
        disabled={currentPage === pagesQuantity && true}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        {lang('NextBtn', language)}
        <svg
          className={st.next}
          viewBox="0 0 9 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.957103 0.661901L0.443235 1.18239C0.159757 1.47054 0.154488 1.943 0.431476 2.23671L5.58093 7.76521L0.230229 13.204C-0.0532487 13.4922 -0.0585183 13.9647 0.218491 14.2565L0.720615 14.7889C0.99581 15.0826 1.45136 15.0871 1.73483 14.799L8.10426 8.32279C8.38774 8.03464 8.39299 7.56404 8.116 7.27034L1.97132 0.671955C1.69433 0.378251 1.24058 0.373753 0.957103 0.661901Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default PrintsModalPagination;

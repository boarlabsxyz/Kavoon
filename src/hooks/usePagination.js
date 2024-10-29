import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPages = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return data.slice(begin, end);
  };

  return {
    maxPages,
    currentPage,
    setCurrentPage,
    currentData,
  };
};

export default usePagination;

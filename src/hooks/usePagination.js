import { useCallback, useEffect, useState } from 'react';

export const usePagination = (dataInit = [], itemsPerPageInit = 6) => {
  const [data, setData] = useState(dataInit);
  const [dataPage, setdataPage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageInit);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = useCallback(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }, [data, itemsPerPage, currentPage]);

  useEffect(() => {
    setdataPage(currentData());
  }, [data, itemsPerPage, currentPage]);

  return {
    totalItems,
    dataPage,
    totalPages,
    currentPage,
    setData,
    setItemsPerPage,
    setCurrentPage
  };
};

import { useContext, useState } from "react";

export const paginationHOC = (WrappedComponent, context, dataKey , searchKey) => {
  const NewComponent = () => {
    const contextData = useContext(context);
    const response = contextData[dataKey];
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;
    const filterPage = response.data.filter((item) =>
      item[searchKey].toLowerCase().includes(response.search.toLowerCase()),
    );
    const totalPages = Math.ceil(response.data.length / itemPerPage);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const Pagination = filterPage.slice(firstIndex, lastIndex);
    return (
      <WrappedComponent
        Pagination={Pagination}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
      />
    );
  };
  return NewComponent;
};

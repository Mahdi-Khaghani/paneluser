import { useContext, useState } from "react";

export const paginationHOC = (WrappedComponent,context,dataKey) => {
  const NewComponent = () => {
    const contextData = useContext(context);
    const response = contextData[dataKey];
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;
     const pages = [1,2,3,4,5];
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const Pagination = response.data?.slice(firstIndex, lastIndex);
    return <WrappedComponent Pagination={Pagination} setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages}/>
  };
  return NewComponent;
};

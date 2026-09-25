import { useContext, useState } from "react";
import taskContext from "../pages/tasks/context/creatContext";

export const taskPagiantionHOC = (WrappedComponent) => {
  const NewComponent = () => {
    const { tasks } = useContext(taskContext);
    const [status, setStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;
    const filterTask = tasks.data.filter((task) => {
      const searchMatch = task.title
        .toLowerCase()
        .includes(tasks.search.toLowerCase());
      const statusMatch =
        status === "all" ||
        (status === "completed" && task.completed) ||
        (status === "pending" && !task.completed);
      return searchMatch && statusMatch;
    });
    const totalPages = Math.ceil(tasks.data.length / itemPerPage);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const Pagination = filterTask.slice(firstIndex, lastIndex);
    return(
        <WrappedComponent Pagination={Pagination} setCurrentPage={setCurrentPage} currentPage={currentPage} setStatus={setStatus} pages={pages}/>
    )
  };
  return NewComponent;
};

import { useContext, useState } from "react";
import taskContext from "./context/creatContext";
import TaskCard from "./components/TaskCard";
import { paginationHOC } from "../../hoc/paginationHOC";
import PaginationButton from "../../component/PaginationButton";
import { withFetchStateHOC } from "../../hoc//withFetchStateHOC";

const Tasks = ({ Pagination, setCurrentPage, currentPage, pages }) => {
  const [status, setStatus] = useState("all");
  const { tasks, handleSearch } = useContext(taskContext);
  const filterTask = Pagination.filter((task) => {
    const searchMatch = task.title
      .toLowerCase()
      .includes(tasks.search.toLowerCase());

    const statusMatch =
      status === "all" ||
      (status === "completed" && task.completed) ||
      (status === "pending" && !task.completed);

    return searchMatch && statusMatch;
  });
  return (
    <section className="min-h-screen bg-gray-100 p-4 dark:bg-transparent md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          تسک‌ها
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          مدیریت و مشاهده تسک‌ها
        </p>
      </div>
      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search tasks..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        >
          <option value={"all"}>All Tasks</option>
          <option value={"completed"}>Completed</option>
          <option value={"pending"}>Pending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filterTask.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6" dir="ltr">
        {pages.map((page) => (
          <PaginationButton
            page={page}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </div>
    </section>
  );
};

export default withFetchStateHOC(
  paginationHOC(Tasks, taskContext, "tasks"),
  taskContext,
  "tasks",
  "handleGetTask"
);

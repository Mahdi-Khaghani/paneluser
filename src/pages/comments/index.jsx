import { useContext } from "react";
import CommentContext from "./context/CreatContext";
import CommentCard from "./components/CommentCard";
import { withFetchStateHOC } from "../../hoc/withFetchStateHOC";
import { paginationHOC } from "../../hoc/paginationHOC";
import PaginationButton from "../../component/PaginationButton";

const Comments = ({ Pagination, setCurrentPage, currentPage, pages }) => {
  const { comments, handleSearch } = useContext(CommentContext);
  const filterComment = Pagination.filter((comment) =>
    comment.name.toLowerCase().includes(comments.search.toLowerCase()),
  );
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-transparent p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          کامنت‌ها
        </h1>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          مدیریت و مشاهده کامنت‌ها
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search comments..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
        />
      </div>

      {/* Comments */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filterComment?.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
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
  paginationHOC(Comments, CommentContext, "comments"),
  CommentContext,
  "comments",
  "handleGetComments",
);

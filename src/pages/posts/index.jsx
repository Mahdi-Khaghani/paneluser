import { useContext, useState } from "react";
import HeaderPosts from "./components/HeaderPosts";
import PostTable from "./components/PostTable";
import PostContext from "./context/CreatContext";
import AddPost from "./Add-Post/AddPost";
import { permissionHOC } from "../../permisionHOC/permisionHOC";
import PaginationButton from "./pagination/PaginationButton";
import { paginationHOC } from "../../permisionHOC/paginationHOC";

const Posts = ({ Pagination, setCurrentPage, currentPage , pages}) => {
  const { post } = useContext(PostContext);
  const [showModal, setShowModal] = useState(false);
  const filteredPosts = Pagination.filter((item) =>
    item.title.toLowerCase().includes(post.search.toLowerCase()),
  );
  return (
    <div className="flex flex-col gap-2.5 justify-center">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold dark:text-blue-500 text-2xl">
            پست‌ها
          </h1>
          <p className="text-gray-400 dark:text-blue-400">
            مدیریت و مشاهده پست‌ها
          </p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 flex gap-2 justify-center items-center cursor-pointer px-3 py-2 text-white font-medium rounded-lg shadow-sm"
          onClick={() => setShowModal(true)}
        >
          <span className="text-2xl font-bold">+</span>
          افزودن پست
        </button>
      </div>
      <HeaderPosts />
      <div className="w-full p-2.5 mt-2.5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredPosts.map((post) => (
          <PostTable key={post.id} post={post} />
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

      {showModal && <AddPost onClose={setShowModal} showModal={showModal} />}
    </div>
  );
};

export default permissionHOC(
  paginationHOC(Posts, PostContext, "post"),
  PostContext,
  "post",
  "handleGetPosts"
);

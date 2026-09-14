import { useContext, useState } from "react";
import PostContext from "../context/CreatContext";
import UpdatePost from "../Update-Post/UpdatePost";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const PostTable = ({ post }) => {
  const { handleDeletePost } = useContext(PostContext);
  const [showModal, setShowModal] = useState(null);

  return (
    <>
      <div
        className="
          group flex h-full w-full flex-col rounded-2xl
          border border-gray-200 bg-white p-5
          shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl
          dark:border-gray-700 dark:bg-gray-900
          dark:hover:border-blue-800
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">{/* ... */}</div>

        {/* Title */}
        <h3
          className="
            mt-5 text-lg font-bold leading-7
            text-gray-800 transition-colors duration-300
            group-hover:text-blue-600
            dark:text-gray-100 dark:group-hover:text-blue-400
          "
        >
          {post.title}
        </h3>

        {/* Body */}
        <p
          className="
            mt-3 line-clamp-3 text-sm font-medium
            leading-7 text-gray-500
            dark:text-gray-400
          "
        >
          {post.body}
        </p>

        {/* Actions */}
        <div className="mt-auto">
          <div className="my-5 h-px bg-gray-100 dark:bg-gray-800" />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleDeletePost(post.id)}
              className="
                flex cursor-pointer items-center justify-center
                gap-1.5 rounded-lg bg-red-50 px-3 py-2
                text-sm font-medium text-red-500
                transition-all duration-200
                hover:bg-red-500 hover:text-white
                dark:bg-red-950/40 dark:text-red-400
                dark:hover:bg-red-500 dark:hover:text-white
              "
            >
              <FaTrash size={13} />
              <span>حذف</span>
            </button>

            <button
              onClick={() => setShowModal(post)}
              className="
                flex cursor-pointer items-center justify-center
                gap-1.5 rounded-lg bg-amber-50 px-3 py-2
                text-sm font-medium text-amber-600
                transition-all duration-200
                hover:bg-amber-500 hover:text-white
                dark:bg-amber-950/40 dark:text-amber-400
                dark:hover:bg-amber-500 dark:hover:text-white
              "
            >
              <FaPencilAlt size={13} />
              <span>ویرایش</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <UpdatePost
          showModal={showModal}
          onClose={() => setShowModal(null)}
          post={showModal}
        />
      )}
    </>
  );
};

export default PostTable;

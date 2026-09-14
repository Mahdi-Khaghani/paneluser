import { useContext } from "react";
import CommentContext from "../context/CreatContext";

const CommentCard = ({ comment }) => {
  const {handleDeleteComments} = useContext(CommentContext)
  return (
    <>
      <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
        {/* User */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
              {comment.name[0]}
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 dark:text-white">
                {comment.name}
              </h2>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {comment.email}
              </p>
            </div>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            {comment.id}
          </span>
        </div>

        {/* Comment */}
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800/60">
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            {comment.body}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-end gap-2">
          <button className="rounded-lg cursor-pointer px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-900/20"
          onClick={() => handleDeleteComments(comment.id)}>
            Delete
          </button>
        </div>
      </article>
    </>
  );
};

export default CommentCard;

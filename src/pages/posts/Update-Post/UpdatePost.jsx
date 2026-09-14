import { useContext, useState } from "react";
import PostContext from "../context/CreatContext";

const UpdatePost = ({ showModal, onClose, post }) => {
  const { handleUpdatePosts } = useContext(PostContext);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const updatedPost = {
    title: title,
    body: body,
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdatePosts(post.id, updatedPost);
    window.alert("post successfully changed.");
    console.log(updatedPost);
    onClose();
  };
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              ویرایش پست
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              اطلاعات پست را ویرایش کنید
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => handleFormSubmit(e)}>
          {/* User ID */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              User ID
            </label>

            <input
              type="text"
              disabled
              value={post.userId}
              className="w-full rounded-xl border border-gray-200
                         bg-gray-100 px-4 py-3 text-gray-500
                         outline-none dark:border-gray-700
                         dark:bg-gray-800 dark:text-gray-400"
            />
          </div>

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              عنوان پست
            </label>

            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="عنوان پست را وارد کنید..."
              className="w-full rounded-xl border border-gray-200
                         px-4 py-3 text-gray-800 outline-none
                         transition focus:border-blue-500
                         focus:ring-2 focus:ring-blue-500/20
                         dark:border-gray-700 dark:bg-gray-800
                         dark:text-white"
            />
          </div>

          {/* Body */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              متن پست
            </label>

            <textarea
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="متن پست را وارد کنید..."
              className="w-full resize-none rounded-xl border
                         border-gray-200 px-4 py-3 text-gray-800
                         outline-none transition
                         focus:border-blue-500
                         focus:ring-2 focus:ring-blue-500/20
                         dark:border-gray-700 dark:bg-gray-800
                         dark:text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-gray-100 px-5 py-2.5
                         font-medium text-gray-700 transition
                         hover:bg-gray-200
                         dark:bg-gray-800 dark:text-gray-300
                         dark:hover:bg-gray-700"
            >
              انصراف
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-2.5
                         font-medium text-white shadow-md
                         transition hover:bg-blue-700
                         active:scale-95"
            >
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;

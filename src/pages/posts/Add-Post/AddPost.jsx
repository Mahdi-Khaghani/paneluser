import { useContext, useState } from "react";
import PostContext from "../context/CreatContext";

const AddPost = ({ showModal, onClose }) => {
  const { handleAddPost, post } = useContext(PostContext);
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const newPost = {
    id: post.data.length > 0 ? Math.max(...post.data.map((u) => u.id)) + 1 : 1,
    userId: userId,
    title: title,
    body: body,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPost(newPost);
    console.log(newPost);
    window.alert("Post successfully add.");
    onClose(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl dark:bg-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Add New Post
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Create a new post
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className="space-y-5 px-6 py-6"
          onSubmit={handleSubmit}
        >
          {/* User ID */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              User ID
            </label>

            <input
              type="number"
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter user id..."
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>

            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Body */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Body
            </label>

            <textarea
              rows="6"
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your post..."
              className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-gray-200 pt-5 dark:border-gray-700">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;

import { useContext, useState } from "react";
import taskContext from "../context/creatContext";

const UpdateTask = ({ reTry, task }) => {
  const { handleUpdateTask } = useContext(taskContext);
  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);
  const updatedTask = {
    id: task.id,
    userId: task.userId,
    title: title,
    completed: completed,
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await handleUpdateTask(task.id, updatedTask);
    window.alert("Task Updated SuccessFully");
    console.log(updatedTask);
    reTry();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              ویرایش تسک
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              اطلاعات تسک را ویرایش کنید
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              عنوان تسک
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="عنوان تسک را وارد کنید..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              وضعیت تسک
            </label>

            <select
              value={completed}
              onChange={(e) => setCompleted(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option value="pending">در انتظار</option>
              <option value="completed">تکمیل شده</option>
            </select>
          </div>
          <div className="mt-7 flex gap-3">
            <button
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => reTry(null)}
            >
              لغو
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;

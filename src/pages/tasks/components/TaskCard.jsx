import { useContext, useState } from "react";
import taskContext from "../context/creatContext";
import UpdateTask from "../update-task/UpdateTask";

const TaskCard = ({ task }) => {
  const { handleDeleteTask } = useContext(taskContext);
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
        {/* Top */}
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            Task #{task.id}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              task.completed
                ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>

        {/* Title */}
        <h2 className="min-h-14 text-base font-semibold leading-7 text-gray-800 dark:text-white">
          {task.title}
        </h2>

        {/* User */}
        <div className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            User ID:
          </span>

          <span className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {task.userId}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition cursor-pointer hover:bg-blue-600"
            onClick={() => setShowModal(task)}
          >
            Edit
          </button>

          <button
            className="flex-1 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200 cursor-pointer dark:bg-red-950/40 dark:text-red-400"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {showModal && <UpdateTask reTry={setShowModal} task={task}/>}
    </>
  );
};

export default TaskCard;

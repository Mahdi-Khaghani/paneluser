import { Navigate, Route, Routes } from "react-router";
import Users from "../../pages/users";
import Posts from "../../pages/posts";
import Comments from "../../pages/comments";
import Tasks from "../../pages/tasks";
import AddUserPage from "../../pages/users/add-user";

const Content = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full pr-64 pt-16 bg-gray-100 dark:bg-gray-700 overflow-y-auto">
      <div className="p-4 h-full  w-full">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUserPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import UserContextProvider from "./pages/users/context/UserContext.jsx";
import PostContextProvider from "./pages/posts/context/PostContext.jsx";
import CommentContextProvider from "./pages/comments/context/CommentContext.jsx";
import TaskContextProvider from "./pages/tasks/context/taskContext.jsx";

createRoot(document.getElementById("root")).render(

    <TaskContextProvider>
      <CommentContextProvider>
        <PostContextProvider>
          <UserContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserContextProvider>
        </PostContextProvider>
        ,
      </CommentContextProvider>
      ,
    </TaskContextProvider>
    ,
);

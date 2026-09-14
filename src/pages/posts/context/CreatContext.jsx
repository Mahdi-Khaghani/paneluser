import { createContext } from "react";

const PostContext = createContext({
    post : {},
    handleDeletePost : () => {},
    handleAddPost : () => {},
    handleGetPosts : () => {},
    handleUpdatePosts : () => {},
    handleSearch : () => {}
});

export default PostContext;
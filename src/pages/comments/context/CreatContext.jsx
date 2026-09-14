import { createContext } from "react";

const CommentContext = createContext({
    comments : {},
    handleGetComments : () => {},
    handleDeleteComments : () => {},
    handleSearch : () => {},
})

export default CommentContext;
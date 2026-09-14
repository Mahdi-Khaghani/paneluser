import { createContext } from "react";

const UserContext = createContext({
    state : {} ,
    handleDeleteUser : () => {} ,
    handleAddUser : () => {} ,
    handleGetUsers : () => {},
    handleUpdateUser : () => {},
    handleGetPosts : () => {},
    post : {}
});

export default UserContext;
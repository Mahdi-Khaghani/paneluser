import { createContext } from "react";


const taskContext = createContext({
    tasks : {},
    handleGetTask : () => {},
    handleDeleteTask : () => {},
    handleSearch : () => {},
    handleUpdateTask : () => []
})

export default taskContext;
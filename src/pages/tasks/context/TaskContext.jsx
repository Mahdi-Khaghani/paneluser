import { useEffect, useReducer } from "react";
import taskContext from "./creatContext";
import {
  deleteTaskServices,
  getTaskServices,
  updateTaskServices,
} from "../../../services/tasks";

const initialState = {
  data: null,
  loading: true,
  error: false,
  search: "",
};

const taskReduserAction = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, data: null, loading: true, error: false };
    case "FETCH_SUCCESSFULL":
      return { ...state, data: action.payload, loading: false, error: false };
    case "FETCH_ERROR":
      return { ...state, data: null, loading: false, error: true };
    case "DELETED_TASK":
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      };
    case "UPDATED_TASK":
      return {
        ...state,
        data: state.data.map((task) =>
          task.id === action.id ? action.payload : task,
        ),
      };
    case "SEARCH_TASK":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReduserAction, initialState);
  const handleGetTask = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const res = await getTaskServices();
      dispatch({ type: "FETCH_SUCCESSFULL", payload: res });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error);
    }
  };
  const handleDeleteTask = async (id) => {
    try {
      await deleteTaskServices(id);
      dispatch({ type: "DELETED_TASK", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateTask = async (id, data) => {
    try {
      await updateTaskServices(id, data);
      dispatch({ type: "UPDATED_TASK", payload: data, id: id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch({ type: "SEARCH_TASK", payload: value });
  };
  useEffect(() => {
    handleGetTask();
  }, []);
  return (
    <taskContext.Provider
      value={{ tasks, handleGetTask, handleDeleteTask, handleSearch , handleUpdateTask}}
    >
      {children}
    </taskContext.Provider>
  );
};

export default TaskContextProvider;

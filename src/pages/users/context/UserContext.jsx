import { useEffect, useReducer } from "react";
import UserContext from "./CreatContext";
import {
  creatUserServices,
  deleteUsersServices,
  getUserServices,
  updateUserServices,
} from "../../../services/users";
const initialState = {
  data: null,
  loading: true,
  error: false,
};
const userReduserAction = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { data: null, loading: true, error: false };
    case "FETCH_SUCCESSFULL":
      return { data: action.payload, loading: false, error: false };
    case "FETCH_ERROR":
      return { data: null, loading: false, error: true };
    case "DELETED_USER":
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        data: state.data.map((user) =>
          user.id === action.payload.id ? action.payload : user,
        ),
      };
    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReduserAction, initialState);

  const handleGetUsers = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await getUserServices();
      dispatch({ type: "FETCH_SUCCESSFULL", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error);
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      await deleteUsersServices(id);
      dispatch({ type: "DELETED_USER", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateUser = async (id, data) => {
    try {
      await updateUserServices(id, data);
      dispatch({ type: "UPDATE_USER", payload: data, id: id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddUser = async (data) => {
    try {
      await creatUserServices(data);
      dispatch({ type: "ADD_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);
  return (
    <UserContext.Provider
      value={{
        state,
        handleDeleteUser,
        handleAddUser,
        handleGetUsers,
        handleUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

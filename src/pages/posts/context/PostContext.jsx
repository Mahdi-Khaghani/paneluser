import { useEffect, useReducer } from "react";
import {
  creatPostsServices,
  deletePostsServices,
  getPostsServices,
  updatePostsServices,
} from "../../../services/posts";
import PostContext from "./CreatContext";

const initialState = {
  data: null,
  loading: true,
  error: false,
  search: "",
};

const postReduserAction = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, data: null, loading: true, error: false };
    case "FETCH_SUCCESSFULL":
      return { ...state, data: action.payload, loading: false, error: false };
    case "FETCH_ERROR":
      return { ...state, data: null, loading: false, error: true };
    case "DELETED_POST":
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.payload),
      };
    case "CREATED_POST":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "UPDATED_POST":
      return {
        ...state,
        data: state.data.map((post) =>
          post.id === action.id ? action.payload : post,
        ),
      };
    case "SEARCH_POST":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

const PostContextProvider = ({ children }) => {
  const [post, dispatch] = useReducer(postReduserAction, initialState);

  const handleGetPosts = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await getPostsServices();
      dispatch({ type: "FETCH_SUCCESSFULL", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error);
    }
  };
  const handleDeletePost = async (id) => {
    try {
      await deletePostsServices(id);
      dispatch({ type: "DELETED_POST", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddPost = async (data) => {
    try {
      await creatPostsServices(data);
      dispatch({ type: "CREATED_POST", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatePosts = async (id, data) => {
    try {
      await updatePostsServices(id, data);
      dispatch({ type: "UPDATED_POST", payload: data, id: id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch({ type: "SEARCH_POST", payload: value });
  };
  useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <PostContext.Provider
      value={{
        post,
        handleDeletePost,
        handleAddPost,
        handleGetPosts,
        handleUpdatePosts,
        handleSearch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

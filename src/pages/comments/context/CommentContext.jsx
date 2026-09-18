import { useEffect, useReducer } from "react";
import CommentContext from "./CreatContext";
import { deleteCommentsServices, getCommentsServices } from "../../../services/comments";

const initialState = {
  data: null,
  loading: true,
  error: false,
  search : ""
};
const commentsReduserAction = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {...state, data: null, loading: true, error: false };
    case "FETCH_SUCCESSFULL":
      return {...state, data: action.payload, loading: false, error: false };
    case "FETCH_ERROR":
      return {...state, data: null, loading: false, error: true };
    case "COMMENT_DELETED":
      return{
        ...state,
        data : state.data.filter((comment) => comment.id !== action.payload)
      }
    case "SEARCH_COMMENT":
      return{
        ...state,
        search : action.payload
      }
    default:
      return state;
  }
};

const CommentContextProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(commentsReduserAction, initialState);
  const handleGetComments = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const data = await getCommentsServices();
      dispatch({ type: "FETCH_SUCCESSFULL", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error);
    }
  };
  const handleDeleteComments = async(id) => {
    try{
      await deleteCommentsServices(id);
      dispatch({type : "COMMENT_DELETED" , payload : id})
    }catch(error){
      console.log(error)
    }
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch({type : "SEARCH_COMMENT" , payload : value})
  }

  useEffect(() => {
    handleGetComments();
  }, []);
  return (
    <CommentContext.Provider value={{ comments, handleGetComments , handleDeleteComments , handleSearch}}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;

import axios from "axios";

export const getCommentsServices = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments",
  );
  return response.data;
};

export const deleteCommentsServices = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
};

import axios from "axios";

export const getPostsServices = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=100",
  );
  return response.data;
};
export const creatPostsServices = (data) => {
  return axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const updatePostsServices = (id, data) => {
  return axios({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: "PUT",
    data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const deletePostsServices = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

import axios from "axios";

export const getTaskServices = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=100",
  );
  console.log(response.data)
  return response.data;
};
export const updateTaskServices = async (id,data) => {
   return axios({
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    method: "PUT",
    data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

export const deleteTaskServices = async(id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
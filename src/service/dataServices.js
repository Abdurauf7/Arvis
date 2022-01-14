import client from "../service/index";

// getting all comments

export const getAllData = () => {
  return client.get("/comments/?_limit=10");
};

// deleting comments by id
export const deleteData = (id) => {
  return client.delete(`/comments/${id}`);
};

// updating comments by id
export const updateData = (id) => {
  return client.put(`/comments/${id}`);
};

// adding comments
export const addData = (data) => {
  return client.post(`/comments`, data);
};

// searching comments by post id
export const searchData = (postId) => {
  return client.get(`/comments?postId=${postId}`);
};

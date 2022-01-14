import client from "../service/index";

export const getAllData = () => {
  return client.get("/comments/?_limit=10");
};

export const deleteData = (id) => {
  return client.delete(`/comments/${id}`);
};

export const updateData = (id) => {
  return client.put(`/comments/${id}`);
};

export const addData = (data) => {
  return client.post(`/comments`, data);
};

export const searchData = (postId) => {
  return client.get(`/comments?postId=${postId}`);
};

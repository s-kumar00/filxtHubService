import axiosInstance from "./axiosInstance";

export const createPostROute = (user) => {
  return axiosInstance.post("/api/post/createPost", user);
};

export const getPosts = () => {
  return axiosInstance.get("/api/post/getPosts");
};

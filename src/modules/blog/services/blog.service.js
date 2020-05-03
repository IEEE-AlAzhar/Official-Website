import axios from "axios";

export const getBlogs = () => {
  return axios.get("../../data/blogs.json");
};

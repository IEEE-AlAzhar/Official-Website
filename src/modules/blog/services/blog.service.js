import axios from "axios";

export const getCategoryName = () => axios.get("/data/categories.json");

export const getBlogs = () => {
  return axios.get("./data/blogs.json");
};
export const filterBlogs = (categoryId) => {
  return axios.get(`/filter/${categoryId}`);

};
export const SearchBlogs = (titleInputValue) => {
  return axios.get(`/search/${titleInputValue}`);

};
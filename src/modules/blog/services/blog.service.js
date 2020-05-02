import axios from "axios";

export const getCatogeriesNames = () => axios.get("/data/categories.json");

export const getBlogs = () => {
  return axios.get("./data/blogs.json");
};
export const filterBlogs = (categoryId) => {
  return axios.post(`/filter/${categoryId}`);

};
export const SearchBlogs = (titleInputValue) => {
  //return axios.post(`/search/${titleInputValue}`);
  return axios.get("./data/blogs.json");

};
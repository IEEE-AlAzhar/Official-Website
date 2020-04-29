import axios from "axios";

export const getCategoryName = () => axios.get("/data/categories.json");


export const getblogs = () => axios.get("/data/blogs.json");

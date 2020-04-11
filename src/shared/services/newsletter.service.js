import axios from "axios";

export const sendEmail = async (email) => {
  return await axios.post("/newsletter", { email });
};

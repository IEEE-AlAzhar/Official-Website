import axios from "axios";

export const getBestMembers = async () => {
  return await axios.get("./data/best-members.json");
};

import axios from "axios";

export const getEvents = async () => {
  return await axios.get("./data/events.json");
};

export const getSingleEvent = async (id) => {
  // TODO: use id in the request url
  return await axios.get("./data/single-event.json");
};

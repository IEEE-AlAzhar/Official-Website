import axios from "axios";

export const getEvents = async () => {
  let response = await axios.get("/data/events.json");

  return response;
};

export const sendEventForm = (postTarget, data) => axios.post(postTarget, data);

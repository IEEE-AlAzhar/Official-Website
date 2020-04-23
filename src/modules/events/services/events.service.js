import axios from "axios";

export const getEvents = () => axios.get("/data/events.json");

export const sendEventForm = (postTarget,data) => axios.post(postTarget, data);
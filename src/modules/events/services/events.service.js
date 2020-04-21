import axios from "axios";

export const getEvents = () => axios.get("/data/events.json");

export const getSingleEvent = (id) => (axios.get("/data/single-event.json"));

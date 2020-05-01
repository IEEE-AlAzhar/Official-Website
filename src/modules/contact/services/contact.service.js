import axios from "axios";

const sendMessage = (message) =>
  axios.post("https://ieee-azhar.herokuapp.com/api/v1/contact", message);

export default sendMessage;

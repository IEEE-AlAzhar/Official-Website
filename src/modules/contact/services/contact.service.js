import axios from "axios";

const sendMessage = (message) => (axios.post('/message', message))

export default sendMessage;
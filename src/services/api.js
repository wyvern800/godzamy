import axios from "axios";

const api = axios.create({
  baseURL: "https://godzamy.herokuapp.com/", //http://localhost:8080
});

export default api;

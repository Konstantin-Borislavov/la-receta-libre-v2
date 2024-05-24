import axios from "axios";

const api = axios.create({
  //set default endpoint API
  baseURL: "http://127.0.0.1:8000/api",
});

export default api;
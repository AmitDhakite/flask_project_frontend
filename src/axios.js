import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://flaskproject-amitdhakite.vercel.app"
});

export default instance;

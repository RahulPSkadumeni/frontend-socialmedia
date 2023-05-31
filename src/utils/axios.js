import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:4000/api",
  //baseURL: "https://gamersden.tech/api",
});

export default Axios;

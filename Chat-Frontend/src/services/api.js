import axios from "axios";
const baseURL = "http://localhost:8800";

export default axios.create({
  baseURL,
  headers:{
    "Accept": "application/json",
    "Content-type": "application/json"
  }
});

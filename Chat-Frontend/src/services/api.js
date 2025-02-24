import axios from "axios";
const baseURL = "http://localhost:8800";
const token = localStorage.getItem("token") || "";

const API = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
    
    if (err.response.status !== 401) {
      throw err;
    }

    if (typeof err.response.data.error.name !== "undefined") {
      if (err.response.data.error.name === "TokenExpiredError") {
        // store.dispatch(logout());
        throw err;
      }
    }
  }
);

export default API;

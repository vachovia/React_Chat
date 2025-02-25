import API, { setHeadersAndStorage } from "./api";

const AuthService = {
  login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        setHeadersAndStorage(data);
        return data;
      })
      .catch((error) => {
        console.log("Auth Service Error: ", error);
        throw error;
      });
  },
  register: (data) => {
    return API.post("/register", data)
      .then(({ data }) => {
        setHeadersAndStorage(data);
        return data;
      })
      .catch((error) => {
        console.log("Auth Service Error: ", error);
        throw error;
      });
  },
  updateProfile: (data) => {
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    };
    return API.post("/users/update", data, headers)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      })
      .catch((error) => {
        console.log("Auth Service Error: ", error);
        throw error;
      });
  },
  logout: () => {
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

export default AuthService;

/*This file is out of use*/
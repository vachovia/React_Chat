import API from "./api";

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

  logout: () => {
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

const setHeadersAndStorage = ({ user, token }) => {
  API.defaults.headers["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export default AuthService;

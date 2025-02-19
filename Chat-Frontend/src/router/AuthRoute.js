import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  
  if (!isLoggedIn) {    
    window.location.href = "/login";
    return null;
  }
  return <div>{children}</div>;
};

export default AuthRoute;

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  
  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }
  return <div>{children}</div>;
};

export default AuthRoute;

import "./../../assets/scss/Chat/Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logoutAction from "./../../redux/slice/auth/actions/logoutAction";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => {
    return state.auth;
  });

  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const handleLogout = () => {
    dispatch(logoutAction());
    // Logs out automatically => router/AuthRoute.js
  };

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div
        id="profile-menu"
        onClick={() => setShowProfileOptions(!showProfileOptions)}
      >
        <img width="40" height="40" src={user.avatar} alt="Avatar" />
        {user && (
          <p className="px-4">
            {user.firstName} {user.lastName}
          </p>
        )}
        <div className="mx-4">
          <FontAwesomeIcon icon="caret-down" className="fa-icon" />
          {showProfileOptions && (
            <div id="profile-options">
              <p>Update profile</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

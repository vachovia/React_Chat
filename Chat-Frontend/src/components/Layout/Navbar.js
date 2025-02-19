import "./../../assets/scss/Chat/Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import logoutAction from "./../../redux/slice/auth/actions/logoutAction";
import { Modal } from "./../Modal";
import { updateProfileAction } from "./../../redux/slice/auth/actions";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => {
    return state.auth;
  });

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    gender: user?.gender,
    email: user?.email,
    password: "",
  });

  const [avatar, setAvatar] = useState("");

  const uploadAvatar = (e) => setAvatar(e.target.files[0]);

  const { firstName, lastName, gender, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const data = { ...formData, avatar };
    const profileFormData = new FormData();
    
    for (const key in data) {
      profileFormData.append(key, data[key]);
    }

    dispatch(updateProfileAction(profileFormData));

    setShowProfileModal(false);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    // Logs out automatically because user
    // becomes null=> router/AuthRoute.js
  };

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div
        id="profile-menu"
        onClick={() => setShowProfileOptions(!showProfileOptions)}
      >
        <img width="40" height="40" src={user?.avatar} alt="Avatar" />
        {user && (
          <p className="px-4">
            {user.firstName} {user.lastName}
          </p>
        )}
        <div className="mx-4">
          <FontAwesomeIcon icon="caret-down" className="fa-icon" />
          {showProfileOptions && (
            <div id="profile-options">
              <p onClick={() => setShowProfileModal(true)}>Update profile</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
          {showProfileModal && (
            <Modal click={() => setShowProfileModal(false)}>
              <Fragment key="header">
                <h3 className="m-0">Update Profile</h3>
              </Fragment>
              <Fragment key="body">
                <form>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={onChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={onChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      name="gender"
                      value={gender}
                      onChange={onChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="file"
                      onChange={uploadAvatar}
                      className="form-control"
                    />
                  </div>
                </form>
              </Fragment>
              <Fragment key="footer">
                <button
                  className="btn-success"
                  type="button"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </Fragment>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

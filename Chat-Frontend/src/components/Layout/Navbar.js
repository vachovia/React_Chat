import "./../../assets/scss/Chat/Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => {
    return state.auth;
  });

  console.log(user);

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div id="profile-menu">
        <img width="40" height="40" src={user.avatar} alt="Avatar" />
        <p className="px-4">
          {user.firstName}{" "}
          {user.lastName}
        </p>
      </div>
    </div>
  );
};

export default Navbar;

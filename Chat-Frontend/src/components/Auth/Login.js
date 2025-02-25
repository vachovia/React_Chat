// import './../../assets/scss/Auth/Auth.scss';
import loginImage from "./../../assets/images/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginAction } from "./../../redux/slice/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formData));
  };

  const { loading, error, isLoggedIn } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div id="auth-container" className="container pt-5">
      <div id="auth-card" className="card py-4 px-5">
        <div className="row">
          <div id="image-section" className="col-md-6">
            <img src={loginImage} alt="Login" className="img-fluid" />
          </div>
          <div id="form-section" className="col-md-6">
            <h2 className="text-center pb-4">Welcome back</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="d-flex aling-items-center justify-content-between">
                <p className="px-1 fst-italic">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none text-primary"
                  >
                    Register
                  </Link>
                </p>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="h-50 fst-italic  text-center mt-4">
              {error && (
                <div className="d-block">
                  <h2 className="text-danger">{error.message}</h2>
                </div>
              )}
              {loading && (
                <div className="d-block">
                  <h2 className="text-danger">Submitting...</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

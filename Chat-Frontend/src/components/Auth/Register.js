import registerImage from "./../../assets/images/register.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, gender, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle register logic here
  };

  return (
    <div id="auth-container" className="container pt-5">
      <div id="auth-card" className="card p-4">
        <div className="row">
          <div id="image-section" className="col-md-6">
            <img src={registerImage} alt="Register" className="img-fluid" />
          </div>
          <div id="form-section" className="col-md-6">
            <h2 className="text-center pb-4">Create an account</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="d-flex aling-items-center justify-content-between">
                <p className="px-1 fst-italic">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none text-success"
                  >
                    Login
                  </Link>
                </p>
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
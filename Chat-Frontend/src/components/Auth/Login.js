// import './../../assets/scss/Auth/Auth.scss';
import loginImage from './../../assets/images/login.svg';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Login = () => {
    const [a, setA] = useState({
      email: "",
      password: ""
    });

    const {email, password} = a;

    const onChange = (e) => {
      setA({ ...a, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
      <div id="auth-container" className="container pt-4">
        <div id="auth-card" className="card p-4">
          <div className="row">
            <div id="image-section" className="col-md-6">
              <img src={loginImage} alt="Login" className="img-fluid" />
            </div>
            <div id="form-section" className="col-md-6">
              <h2>Welcome back</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
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
                <div className="form-group mb-3">
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
                  <p className="px-1">Don't have an account? <Link to="/register">Register</Link></p>
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
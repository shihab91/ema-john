import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./login.css";
const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("password should be 6 characters or more");
    }
    signIn(email, password)
      .then((result) => {
        e.target.reset();
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="form-container container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            minLength={6}
            name="password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>
        New to Ema john
        <Link to="signup">Create a new account</Link>
      </p>
    </div>
  );
};

export default Login;

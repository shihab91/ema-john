import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
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

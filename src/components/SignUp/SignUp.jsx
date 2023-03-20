import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.confirm.value);
  };
  return (
    <div className="form-container container">
      <h1>Sign Up</h1>
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
            autoComplete="true"
            name="password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your password again"
            required
            minLength={6}
            name="confirm"
            autoComplete="true"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account
        <Link to="login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./signUp.css";
const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    if (password.length < 6) {
      setError("password should be 6 characters or more");
    }
    if (password !== confirm) {
      setError("your password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
      })
      .catch((err) => console.log(err.message));
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
        <Link to="/login">Log In</Link>
      </p>
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default SignUp;

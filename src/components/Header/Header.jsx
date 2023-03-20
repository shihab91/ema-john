import React, { useContext } from "react";
import "./header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="header_container">
      <nav className="container header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav_links ">
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user?.uid ? (
            <div style={{ display: "flex", marginLeft: "15px" }}>
              <p style={{ color: "white" }}>{user?.email}</p>
              <button className="sign-out" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;

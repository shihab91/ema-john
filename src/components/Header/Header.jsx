import React, { useContext } from "react";
import "./header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
const Header = () => {
  return (
    <div className="header_container">
      <nav className="container header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav_links">
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
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
        </div>
      </nav>
    </div>
  );
};

export default Header;

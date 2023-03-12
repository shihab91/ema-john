import React from "react";
import "./header.css";
import logo from "../../../images/Logo.svg";
const Header = () => {
  return (
    <div className="header_container">
      <nav className="container header">
        <img src={logo} alt="" />
        <div className="nav_links">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Orders</a>
          <a href="">Inventory</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

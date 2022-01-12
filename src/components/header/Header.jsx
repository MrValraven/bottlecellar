import React from "react";
import { Link } from "react-router-dom";

import "./Header.style.scss";

import logo from "../../assets/wine.svg";
import user from "../../assets/user.svg";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" className="logoImage" />
        </Link>
      </div>
      <nav className="navbar">
        <Link to="/user/cellar" className="navItem cellar">
          My Cellar
        </Link>
        <div className="user-container">
          <img src={user} alt="user" />
        </div>
      </nav>
    </header>
  );
};
export default Header;

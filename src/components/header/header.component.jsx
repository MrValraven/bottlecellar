import React from "react";

import "./header.styles.scss";

import logo from "../../assets/wine.svg";

const Header = () => (
  <header className="app-header">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <nav className="navbar">
      <li className="navItem">Featured</li>
      <li className="navItem">My Cellar</li>
      <li className="navItem">Login</li>
    </nav>
  </header>
);

export default Header;

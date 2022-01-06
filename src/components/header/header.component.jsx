import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import logo from "../../assets/wine.svg";
import user from "../../assets/user.svg";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="navbar">
        <Link to="" className="navItem">
          Favorites
        </Link>
        <Link to="/user/cellar" className="navItem">
          My Cellar
        </Link>
        <div className="user-container">
          <img
            src={user}
            alt="user"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;

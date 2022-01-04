import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/wine1.png";

import "./hero.styles.scss";

const Hero = () => (
  <div className="hero">
    <div className="heroText">
      <h1>BottleCellar</h1>
      <p>
        The best cellar tracking app for all your wine and beer needs!
        <br />
        All in one single platform.
      </p>
      <Link className="heroButton" to="user/cellar">
        My Cellar
      </Link>
    </div>
    <div className="heroImage">
      <img src={heroImage} alt="wine bottles" />
    </div>
  </div>
);

export default Hero;

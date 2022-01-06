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
        We use state of the art technology to enhance your tracking experience!
        All in one streamlined platform, now with advanced machine learning and
        blockchain features.
      </p>
      <Link className="heroButton" to="user/cellar">
        Get Started
      </Link>
    </div>
    <div className="heroImage">
      <img src={heroImage} alt="wine bottles" />
    </div>
  </div>
);

export default Hero;

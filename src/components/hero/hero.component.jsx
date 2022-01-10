import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/wine3.png";

import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <span className="aboveText">BLOCKCHAIN POWERED CELLAR TRACKING</span>
        <h1>BottleCellar</h1>
        <p>
          The best cellar tracking app for all your wine and beer needs!
          <br />
          We use state of the art technology to enhance your tracking
          experience! All in one streamlined platform.
        </p>
        <Link className="heroButton" to="user/cellar">
          Get Started ➡
        </Link>
      </div>
      <div className="heroImage">
        <img src={heroImage} alt="wine bottles" />
      </div>
    </div>
  );
};
export default Hero;

import React from "react";

import "./Homepage.style.scss";
import Hero from "../../components/hero/Hero";
import DemoSection from "../../components/demo-section/DemoSection";

const Homepage = () => (
  <div className="homepage">
    <Hero />
    <DemoSection />
  </div>
);

export default Homepage;

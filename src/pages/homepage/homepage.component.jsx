import React from "react";

import "./homepage.styles.scss";
import Hero from "../../components/hero/hero.component";
import DemoSection from "../../components/demo-section/demo-section.component";

const Homepage = () => (
  <div className="homepage">
    <Hero />
    <DemoSection />
  </div>
);

export default Homepage;

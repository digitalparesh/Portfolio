import React from "react";
import "./homepage.styles.scss";

import Home from "../home/home";
import About from "../about/About";

const Homepage = () => (
  <div className="homepage">
    <Home />
    <About />
  </div>
);

export default Homepage;

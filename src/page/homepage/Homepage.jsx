import React from "react";
import "./homepage.styles.scss";

const Home = () => (
  <div className="home bg-light">
    <h1>welcome to homepage</h1>
  </div>
);
const About = () => (
  <div className="about bg-info">
    <h1>welcome to aboutpage</h1>
  </div>
);
const Homepage = () => (
  <div className="homepage">
    <Home />
    <About />
  </div>
);

export default Homepage;

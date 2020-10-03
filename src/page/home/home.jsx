import React from "react";
import "./home.styles.scss";
import img from "../../assets/img/boy-1.jpg";

const Home = () => (
  <div className="home bg-white">
    <div className="container">
      <div className="left">
        <h1>
          Grow your business with{" "}
          <strong className="title">DigitalParesh</strong>
        </h1>
        <span>I am front end developer making website design.</span>
        <div>
          <button className="btn btn-outline-primary">Get Started</button>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="boy" />
      </div>
    </div>
  </div>
);

export default Home;

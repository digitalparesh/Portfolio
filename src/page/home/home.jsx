import React from "react";
import "./home.styles.scss";
import img from "../../assets/img/boy-1.jpg";

const Home = () => (
  <section id="home">
    <div className="home bg-white">
      <div className="container">
        <div className="left">
          <h1>
            Grow your business with <p className="title">DigitalParesh</p>
          </h1>
          <span className="h5">
            I am front end developer making website design.
          </span>
          <div>
            <button className="btn btn-outline-primary">Get Started</button>
          </div>
        </div>
        <div className="right">
          <img src={img} alt="boy" />
        </div>
      </div>
    </div>
  </section>
);

export default Home;

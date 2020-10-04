import React from "react";
import "./about.styles.scss";

import img from "../../assets/img/myimg.jpg";

const About = () => (
  <section id="about">
    <div className="about">
      <h2 className="text-center text-uppercase title">About Me</h2>
      <h5 className="text-center">
        Let me tell you a little about myself and what I do...
      </h5>
      <div className="container">
        <div className="imgdiv">
          <img src={img} alt="myself" />
        </div>
        <div className="infodiv">
          <p className="text-about text-justify">
            Hey, I'm a front end developer from junagadh Gujarat, India. I can
            help you to build your website. I design, responsive and user
            friendly websites. I specialize in creating sites for individuals
            and small businesses. You shouldn’t have to settle for cheap
            solutions or generic templates. I provide custom designs at
            reasonable prices. Frequently, your website is the first impression
            your customers will get, so make sure it’s a good one.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

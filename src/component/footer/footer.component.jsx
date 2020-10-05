import React from "react";
import "./footer.styles.scss";
import linkedin from "../../assets/img/linkedin.png";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div>Copyright © 2020. All Rights Reserved</div>
      <div className="img">
        <a href="https://www.linkedin.com/in/digitalparesh/" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

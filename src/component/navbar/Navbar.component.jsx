import React, { useEffect } from "react";
import "./navbar.styles.scss";

const Navbar = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a
            className="navbar-brand text-uppercase"
            href="/"
            onClick={(e) => {
              let home = document.getElementById("home");
              e.preventDefault();
              home &&
                home.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              window.history.pushState("home", "home", "/home");
            }}
          >
            <strong>D</strong>igital
            <strong>P</strong>aresh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={(e) => {
                    let home = document.getElementById("home");
                    e.preventDefault();
                    home &&
                      home.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("home", "home", "/home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={(e) => {
                    let about = document.getElementById("about");
                    e.preventDefault();
                    about &&
                      about.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("about", "about", "/about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={(e) => {
                    let portfolio = document.getElementById("portfolio");
                    e.preventDefault();
                    portfolio &&
                      portfolio.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState(
                      "portfolio",
                      "portfolio",
                      "/portfolio"
                    );
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={(e) => {
                    let contact = document.getElementById("contact");
                    e.preventDefault();
                    contact &&
                      contact.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("contact", "contact", "/contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar/Navbar.component";
import Home from "./page/home/home";
import About from "./page/about/about";
import Portfolio from "./page/portfolio/portfolio";
import Contact from "./page/contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;

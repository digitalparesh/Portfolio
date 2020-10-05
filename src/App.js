import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar/Navbar.component";
import Home from "./page/home/home";
import About from "./page/about/about";
import Portfolio from "./page/portfolio/portfolio";
import Contact from "./page/contact/contact";
import Footer from "./component/footer/footer.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

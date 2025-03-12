import React from "react";
import Home from "./component/home/home.js";
import AboutUs from "./component/aboutUs/aboutus.js";
import Fonctionnement from "./component/fonctionnement/fonctionnement.js";
import Nav from "./component/nav/nav.js";
import Contact from "./component/contact/contact.js";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutUs />
      <Fonctionnement />
      <Contact />
    </div>
  );
}

export default App;
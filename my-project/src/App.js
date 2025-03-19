import React, { useState } from "react";
import Home from "./component/home/home.js";
import AboutUs from "./component/aboutUs/aboutus.js";
import Fonctionnement from "./component/fonctionnement/fonctionnement.js";
import Nav from "./component/nav/nav.js";
import Contact from "./component/contact/contact.js";
import "./App.css"

function App() {
  const [autoScroll, setAutoScroll] = useState(true);
  const [manualScroll, setManualScroll] = useState(true);
 
  return (
    <div className="App">
      <Nav autoScroll={autoScroll} setAutoScroll={setAutoScroll} manualScroll={manualScroll} setManualScroll={setManualScroll} />
      <Home />
      <AboutUs />
      <Fonctionnement autoScroll={autoScroll} setAutoScroll={setAutoScroll} manualScroll={manualScroll} setManualScroll={setManualScroll} />
      <Contact />
    </div>
  );
}

export default App;
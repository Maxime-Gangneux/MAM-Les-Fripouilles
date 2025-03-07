import React from "react";
import Home from "./component/home/home.js";
import AboutUs from "./component/aboutUs/aboutus.js";
import Nav from "./component/nav/nav.js";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
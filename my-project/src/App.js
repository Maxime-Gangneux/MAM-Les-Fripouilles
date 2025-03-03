import React, { useState, useEffect } from "react";
import Home from "./component/home/home.js";
import Nav from "./component/nav/nav.js";
import "./App.css"

const pages = {
  "/Aceuil": <Home />,
  "/about": <h1>About Page</h1>,
  "/contact": <h1>Contact Page</h1>
};

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <main>{pages[currentPage] || <h1>404 Not Found</h1>}</main>
    </div>
  );
}

export default App;
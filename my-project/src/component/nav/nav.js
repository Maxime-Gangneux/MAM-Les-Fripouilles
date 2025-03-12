import React, { useState, useEffect } from "react";
import logo from "../../assets/logo512.png";
import "./nav.css";

function navigate(event) {
  event.preventDefault();

  const path = event.target.getAttribute("href");

  scrollTosection(path);

  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("popstate"));
}

function scrollTosection(path) {
  const sectionId = path.replace("/", "").toLowerCase(); 
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function Nav() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si on défile vers le bas, cacher la navbar
        setIsVisible(false);
      } else {
        // Si on défile vers le haut, afficher la navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <img className="logo" src={logo} alt="Logo" />
      <div className="links">
        <a className="link" href="/Aceuil" onClick={navigate}>Aceuil</a>
        <a className="link" href="/Qui sommes nous" onClick={navigate}>Qui sommes nous</a>
        <a className="link" href="/fonctionnement" onClick={navigate}>Notre fonctionnement</a>
        <a className="link" href="/activités" onClick={navigate}>nos activités</a>
        <a className="link" href="/contact" onClick={navigate}>contact</a>
      </div>
    </nav>
  );
}

export default Nav;

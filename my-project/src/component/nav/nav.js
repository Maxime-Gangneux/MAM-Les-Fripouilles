import React, { useState, useEffect } from "react";
import logomam from "../../assets/logo mam.png";
import "./nav.css";

function Nav({ setAutoScroll, setManualScroll }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navigate(event) {
    event.preventDefault();
    setManualScroll(false);
    setAutoScroll(false);
    const path = event.target.getAttribute("href");
    scrollToSection(path);
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  }

  function waitForScrollEnd(targetId, callback) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const interval = setInterval(() => {
      const rect = target.getBoundingClientRect();
      if (Math.abs(rect.top) < 2) { 
        clearInterval(interval);
        callback();
      }
    }, 100);
  }

  function scrollToSection(path) {
    const sectionId = path.replace("/", "").toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      waitForScrollEnd(sectionId, () => {
        setManualScroll(true); // Le changement ici met à jour l'état dans le parent
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <img className="logo" src={logomam} alt="Logo" />
      <div className="links">
        <a className="link" href="/accueil" onClick={navigate}>Accueil</a>
        <a className="link" href="/qui-sommes-nous" onClick={navigate}>Qui sommes nous</a>
        <a className="link" href="/fonctionnement" onClick={navigate}>Notre fonctionnement</a>
        <a className="link" href="/contact" onClick={navigate}>Contact</a>
      </div>
      
      <button className="menu-button" onClick={toggleMenu}>☰</button>

      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      <div className={`menu-dropdown ${isMenuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>✖</button>
        <a href="/accueil" onClick={navigate}>Accueil</a>
        <a href="/qui-sommes-nous" onClick={navigate}>Qui sommes nous</a>
        <a href="/fonctionnement" onClick={navigate}>Notre fonctionnement</a>
        <a href="/contact" onClick={navigate}>Contact</a>
      </div>
    </nav>
  );
}

export default Nav;

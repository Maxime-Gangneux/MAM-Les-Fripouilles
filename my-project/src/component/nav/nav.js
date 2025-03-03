import React from "react";
import logo from "../../assets/logo512.png"
import "./nav.css"

function navigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  }

function Nav() {
    return(
        <nav>
            <img className="logo" src={logo} alt="Logo" />
            <div className="links">
                <a className="link" href="/Aceuil" onClick={navigate}>Aceuil</a>
                <a className="link" href="/Qui sommes nous" onClick={navigate}>Qui sommes nous</a>
                <a className="link" href="/fonctionement" onClick={navigate}>Notre fonctionement</a>
                <a className="link" href="/activités" onClick={navigate}>nos activités</a>
                <a className="link" href="/contact" onClick={navigate}>contact</a>
            </div>
        </nav>
    );
}

export default Nav;
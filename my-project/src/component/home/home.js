import React, { useEffect } from "react";
import AOS from "aos";
import homeImage from "../../assets/fond/8083604.jpg"
import "aos/dist/aos.css";
import "./home.css";

function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Durée de l'animation en ms
      }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const maxScroll = window.innerHeight; 
          const scrollPercentage = scrollY / maxScroll;
    
          if (scrollPercentage >=1) {
            return;
          }

          const translateXValue = -50 * scrollPercentage;

          const waves = document.querySelectorAll('.wave-svg, .wave-svg-bis');
          waves.forEach(wave => {
            wave.style.transform = `translateX(${translateXValue}%)`;
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div id="accueil" className="home">
      <div className="title_container">
          <img className="home-image" src={homeImage} alt="Maison d'Assistante Maternelle" />
          <div className="text-container">
              <h1 className="title">
                  Maison d'Assistante Maternelle
                  <br />
                  MAM Les Fripouilles
              </h1>
              <p className="text-home">
                Nous offrons un cadre chaleureux et sécurisé où chaque enfant s'épanouit à son rythme. Notre équipe bienveillante accompagne vos petits dans des moments de découverte, d'éveil et de partage.
                <br/>
                <br/>
                Horaires d'ouverture : du lundi au vendredi,
                <br />
                de 6h30 à 18h30
              </p>
          </div>
      </div>
  </div>
  );
}

export default Home;

import React, { useEffect } from "react";
import "./aboutus.css"
import shield from "../../assets/shield.svg";
import game from "../../assets/game.svg";
import clock from "../../assets/clock.svg";
import communication from "../../assets/communication.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs(){

    useEffect(() => {
            AOS.init({ duration: 1000 }); // Durée de l'animation en ms
          }, []);

    return(
        <div id="qui sommes nous" className="aboutus">

            {/* équipe */}
            <div className="equipe">
                <h2>Notre Équipe</h2>
                <div className="assistantes">
                    <div className="assistante1" data-aos="flip-left">
                        <div className="photo_de_profile"></div>
                        <h3>Valoche la Sacoche</h3>
                        <h4>Assistante maternelle</h4>
                        <p>Maxime se tourne les couilles toute la journée, c'est pas possible. En plus, Louane a de très belles fesses.</p>
                        <div class="social-bar">
                            <a href="https://facebook.com" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="mailto:example@gmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
                            <a href="tel:+1234567890" class="social-icon"><i class="fas fa-phone-alt"></i></a>
                        </div>
                    </div>
                    <div className="assistante2" data-aos="flip-left">
                        <div className="photo_de_profile"></div>
                        <h3>Valoche la Sacoche</h3>
                        <h4>Assistante maternelle</h4>
                        <p>Maxime se tourne les couilles toute la journée, c'est pas possible. En plus, Louane a de très belles fesses.</p>
                        <div class="social-bar">
                            <a href="https://facebook.com" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="mailto:example@gmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
                            <a href="tel:+1234567890" class="social-icon"><i class="fas fa-phone-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* nos valeurs */}
            <div className="valeur-main">
                <div className="valeurs" data-aos-delay="0" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                    <div className="valeurs-container">
                        <h2>Nos Valeurs</h2>
                        <ul>
                            <div data-aos-delay="250" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={shield} alt=""></img> <p>Sécurité et bien-être avant tout</p></div>
                            <div data-aos-delay="500" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={game} alt=""></img> <p>Apprentissage par le jeu et la découverte</p></div>
                            <div data-aos-delay="750" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={clock} alt=""></img> <p>Respect du rythme de chaque enfant</p></div>
                            <div data-aos-delay="1000" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={communication} alt=""></img> <p>Communication et échanges avec les familles</p></div>
                        </ul>
                    </div>
                </div>
                <div className="valeurs-image" data-aos-delay="0" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                    <div className="image"></div>
                </div>
            </div>

            {/* nos engagements */}
            <div className="engagement-main">
                <div className="engagement-image" data-aos-delay="0" data-aos="fade-right">
                    <div className="image"></div>
                </div>
                <div className="engagement" data-aos-delay="0" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                    <div className="engagement-container">
                        <h2>Nos Valeurs</h2>
                        <ul>
                            <div data-aos-delay="250" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={shield} alt=""></img> <p>Sécurité et bien-être avant tout</p></div>
                            <div data-aos-delay="500" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={game} alt=""></img> <p>Apprentissage par le jeu et la découverte</p></div>
                            <div data-aos-delay="750" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={clock} alt=""></img> <p>Respect du rythme de chaque enfant</p></div>
                            <div data-aos-delay="1000" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={communication} alt=""></img> <p>Communication et échanges avec les familles</p></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
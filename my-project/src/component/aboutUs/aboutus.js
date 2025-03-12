import React, { useEffect } from "react";
import "./aboutus.css"
import spa from "../../assets/spa.svg";
import groupe from "../../assets/groupe.svg";
import game from "../../assets/game2.svg";
import communication2 from "../../assets/communication2.svg";
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
                <div className="valeurs-image" data-aos-delay="0" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                    <div className="image"></div>
                </div>
                <div className="valeurs" data-aos-delay="0" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                    <div className="valeurs-container">
                        <h2>Nos Valeurs</h2>
                        <ul>
                            <div data-aos-delay="250" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={spa} alt=""></img> <p>Créer un univers de bien-être et de confiance entre l'enfant, les parents et l'assistant(e) maternel(le). </p></div>
                            <div data-aos-delay="500" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={groupe} alt=""></img> <p>Accompagner chaque enfant dans sa socialisation et la découverte des autres.</p></div>
                            <div data-aos-delay="750" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={game} alt=""></img> <p>Encadrement favorisant l'acquisition de l'autonomie dans la propreté, le jeu et la découverte.</p></div>
                            <div data-aos-delay="1000" data-aos="fade-right" data-aos-anchor-placement="top-bottom"><img src={communication2} alt=""></img> <p>Communication et échanges avec les familles</p></div>
                        </ul>
                    </div>
                </div>
                <div className="deco"></div>
            </div>
        </div>
    );
}

export default AboutUs;
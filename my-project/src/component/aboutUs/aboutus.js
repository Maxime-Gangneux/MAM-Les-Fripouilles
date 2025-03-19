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
        <div id="qui-sommes-nous" className="aboutus">

            {/* équipe */}
            <div className="equipe">
                <h2>Notre Équipe</h2>
                <div className="assistantes">
                    <div className="assistante1" data-aos="flip-left">
                        <div className="photo_de_profile"></div>
                        <h3>Valérie</h3>
                        <h4>Assistante maternelle</h4>
                        <p>En tant qu'assistante maternelle agréée, j'accompagne vos enfants dans un cadre épanouissant et sûr, où chaque moment est une occasion pour eux d'apprendre, de grandir et de se sentir en confiance.</p>
                        <div className="social-bar">
                            <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social-icon"><i className="fas fa-envelope"></i></a>
                            <a href="tel:+33614025658" className="social-icon"><i className="fas fa-phone-alt"></i></a>
                        </div>
                    </div>
                    <div className="assistante2" data-aos="flip-left">
                        <div className="photo_de_profile"></div>
                        <h3>Andréa</h3>
                        <h4>Assistante maternelle</h4>
                        <p>assistante maternelle agréée. J’accueille vos enfants dans un cadre sécurisé et bienveillant, où ils pourront grandir et s’épanouir à leur rythme.</p>
                        <div className="social-bar">
                            <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social-icon"><i className="fas fa-envelope"></i></a>
                            <a href="tel:+33614025658" className="social-icon"><i className="fas fa-phone-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* nos valeurs */}
            <div className="valeur-main">
                <div className="valeurs-image">
                    <div className="image"></div>
                </div>
                <div className="valeurs">
                    <div className="valeurs-container">
                        <h2>Nos Valeurs</h2>
                        <ul>
                            <div><img src={spa} alt=""></img> <p>Créer un univers de bien-être et de confiance entre l'enfant, les parents et l'assistant(e) maternel(le). </p></div>
                            <div><img src={groupe} alt=""></img> <p>Accompagner chaque enfant dans sa socialisation et la découverte des autres.</p></div>
                            <div><img src={game} alt=""></img> <p>Encadrement favorisant l'acquisition de l'autonomie dans la propreté, le jeu et la découverte.</p></div>
                            <div><img src={communication2} alt=""></img> <p>Communication et échanges avec les familles</p></div>
                        </ul>
                    </div>
                </div>
                <div className="deco"></div>
            </div>
        </div>
    );
}

export default AboutUs;
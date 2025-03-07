import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Durée de l'animation en ms
      }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          console.log(scrollY);
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
    <div id="aceuil" className="home">
        <div className="title_container">
            <div className="title_image_left_container">
            <div className="title_image_left">
                <div className="image" data-aos-delay="0" data-aos="fade-right"></div>
                <div className="image" data-aos-delay="300" data-aos="fade-right"></div>
                <div className="image" data-aos-delay="500" data-aos="fade-right"></div>
                <div className="image" data-aos-delay="100" data-aos="fade-right"></div>
                <div className="image" data-aos-delay="400" data-aos="fade-right"></div>
                <div className="image" data-aos-delay="200" data-aos="fade-right"></div>
            </div>
            </div>

            <h1 className="title" data-aos="fade-up">
            Maison d'Assistante Maternelle
            <br />
            MAM Les Fripouilles
            </h1>

            <div className="title_image_right_container">
            <div className="title_image_right">
                <div className="image" data-aos-delay="0" data-aos="fade-left"></div>
                <div className="image" data-aos-delay="300" data-aos="fade-left"></div>
                <div className="image" data-aos-delay="500" data-aos="fade-left"></div>
                <div className="image" data-aos-delay="100" data-aos="fade-left"></div>
                <div className="image" data-aos-delay="400" data-aos="fade-left"></div>
                <div className="image" data-aos-delay="200" data-aos="fade-left"></div>
            </div>
            </div>
        </div>

        <div className="wave">
          {/* Premier SVG combiné (bleu foncé) */}
          <svg className="wave-svg" viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0077cc" d="M0,300L48,280C96,260,192,220,288,190C384,160,480,120,576,110C672,100,768,120,864,140C960,160,1056,180,1152,170C1248,160,1344,120,1392,100L1440,80V320H0Z" />
              <path fill="#0077cc" d="M1440,300L1488,280C1536,260,1632,220,1728,190C1824,160,1920,120,2016,110C2112,100,2208,120,2304,140C2400,160,2496,180,2592,170C2688,160,2784,120,2832,100L2880,80V320H1440Z" transform="scale(-1,1) translate(-4319,0)" />

          </svg>

          {/* Deuxième SVG combiné (bleu clair) */}
          <svg className="wave-svg" viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="#66b2ff" d="M0,310L48,290C96,270,192,230,288,200C384,170,480,130,576,120C672,110,768,130,864,150C960,170,1056,190,1152,180C1248,170,1344,130,1392,110L1440,90V320H0Z" />
              <path fill="#66b2ff" d="M1440,310L1488,290C1536,270,1632,230,1728,200C1824,170,1920,130,2016,120C2112,110,2208,130,2304,150C2400,170,2496,190,2592,180C2688,170,2784,130,2832,110L2880,90V320H1440Z" transform="scale(-1,1) translate(-4319,0)" />
          </svg>

          {/* Troisième SVG combiné (blanc) */}
          <svg className="wave-svg" viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" d="M0,320L48,300C96,280,192,240,288,210C384,180,480,140,576,130C672,120,768,140,864,160C960,180,1056,200,1152,190C1248,180,1344,140,1392,120L1440,100V320H0Z" />
              <path fill="#ffffff" d="M1440,320L1488,300C1536,280,1632,240,1728,210C1824,180,1920,140,2016,130C2112,120,2208,140,2304,160C2400,180,2496,200,2592,190C2688,180,2784,140,2832,120L2880,100V320H1440Z" transform="scale(-1,1) translate(-4319,0)" />
          </svg>
      </div>
    </div>
  );
}

export default Home;

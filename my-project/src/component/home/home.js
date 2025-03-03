import React, { useEffect } from "react";
import "./home.css";

function Home() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          console.log(scrollY);
          const maxScroll = window.innerHeight / 2; 
          const scrollPercentage = scrollY / maxScroll;
    
          if (scrollY >= 472) {
            return;
          }

          const translateXValue = -100 * scrollPercentage;

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
    <div className="home">
        <div className="title_container">
            <div className="title_image_left_container">
            <div className="title_image_left">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
            </div>
            </div>

            <h1 className="title">
            Bienvenue dans notre <br />
            <strong style={{ color: "#A7C7E7" }}> Maison d'Assistante Maternelle </strong> <br />
            MAM Les Fripouilles
            </h1>

            <div className="title_image_left_container">
            <div className="title_image_right">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
            </div>
            </div>
        </div>

        <div className="wave">
            <svg className="wave-svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0077cc" d="M0,300L48,280C96,260,192,220,288,190C384,160,480,120,576,110C672,100,768,120,864,140C960,160,1056,180,1152,170C1248,160,1344,120,1392,100L1440,80V320H0Z" />
            </svg>

            <svg className="wave-svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#66b2ff" d="M0,310L48,290C96,270,192,230,288,200C384,170,480,130,576,120C672,110,768,130,864,150C960,170,1056,190,1152,180C1248,170,1344,130,1392,110L1440,90V320H0Z" />
            </svg>

            <svg className="wave-svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M0,320L48,300C96,280,192,240,288,210C384,180,480,140,576,130C672,120,768,140,864,160C960,180,1056,200,1152,190C1248,180,1344,140,1392,120L1440,100V320H0Z" />
            </svg>

            {/* SVG inversés */}
            <svg className="wave-svg-bis" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0077cc" d="M0,300L48,280C96,260,192,220,288,190C384,160,480,120,576,110C672,100,768,120,864,140C960,160,1056,180,1152,170C1248,160,1344,120,1392,100L1440,80V320H0Z" transform="scale(-1, 1) translate(-1440, 0)" />
            </svg>

            <svg className="wave-svg-bis" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#66b2ff" d="M0,310L48,290C96,270,192,230,288,200C384,170,480,130,576,120C672,110,768,130,864,150C960,170,1056,190,1152,180C1248,170,1344,130,1392,110L1440,90V320H0Z" transform="scale(-1, 1) translate(-1440, 0)" />
            </svg>

            <svg className="wave-svg-bis" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M0,320L48,300C96,280,192,240,288,210C384,180,480,140,576,130C672,120,768,140,864,160C960,180,1056,200,1152,190C1248,180,1344,140,1392,120L1440,100V320H0Z" transform="scale(-1, 1) translate(-1440, 0)" />
            </svg>
        </div>
    </div>
  );
}

export default Home;

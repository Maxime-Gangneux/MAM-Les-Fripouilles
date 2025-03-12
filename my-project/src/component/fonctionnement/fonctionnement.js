import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fonctionnement.css";

import image1 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/1.png";
import image2 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/2.png";
import image3 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/3.png";
import image4 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/4.png";
import image5 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/5.png";
import image6 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/6.png";
import image7 from "../../assets/Carrousel Linkedin professionnel design moderne géométrique coloré/7.png";

const AnimatedCarousel = () => {
  const imageRefs = useRef([]);
  const carouselRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const getElementVisibility = (element) => {
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight / rect.height;
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = carouselRef.current;
      if (!element) {
        console.log("Carousel element not found.");
        return;
      }

      const visibility = getElementVisibility(element);

      if (visibility <= 0 && !autoScroll) {
        setAutoScroll(true); // Réactiver l'auto-scroll si l'élément est complètement hors de l'écran
      }

      if (autoScroll && visibility >= 0.6) {
        window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
        setAutoScroll(false); // Désactiver l'auto-scroll une fois l'élément visible
      }
    };

    // Assurez-vous que l'événement 'scroll' est bien capté
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [autoScroll]); // Le hook dépend uniquement de l'état `autoScroll`

  const setSlideContainersWidth = () => {
    const firstImage = imageRefs.current[0];
    if (firstImage) {
      const rect = firstImage.getBoundingClientRect();
      let width = rect.width;

      if (window.innerWidth <= 600) {
          width = window.innerWidth;
      }
    
      const slideContainers = document.querySelectorAll('.slide-container');
      slideContainers.forEach(container => {
        container.style.width = `${width}px`;
      });

      const carouselSlide = document.querySelectorAll('.carousel-slide');
      carouselSlide.forEach(slide => {
        slide.style.width = `${width}px`;
      });

      const slickSlide = document.querySelectorAll('.slick-slide');
      slickSlide.forEach(slide => {
        slide.style.width = `${width}px`;
      });

      const carouselleMain = document.querySelectorAll('.carouselle-main');
      carouselleMain.forEach(slide => {
        slide.style.width = `${width}px`;
      });
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      setSlideContainersWidth();
      window.removeEventListener('load', handleLoad);
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener("resize", setSlideContainersWidth);

    return () => {
      window.removeEventListener("resize", setSlideContainersWidth);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const slides = [
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[0] = el)} className="slide" src={image1} alt="1" /></div> },
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[1] = el)} className="slide" src={image2} alt="2" /></div> },
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[2] = el)} className="slide" src={image3} alt="3" /></div> },
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[3] = el)} className="slide" src={image4} alt="4" /></div> },
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[4] = el)} className="slide" src={image5} alt="5" /></div> },
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[5] = el)} className="slide" src={image6} alt="6" /></div> },
    { title: "", content: <div className="slide-container"><img ref={(el) => (imageRefs.current[6] = el)} className="slide" src={image7} alt="7" /></div> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="fonctionnement" className="fonctionnement" ref={carouselRef}>
      <div id="carousel" className="carousel-container">
        <Slider {...settings} className="carouselle-main">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="carousel-slide"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {slide.content}
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AnimatedCarousel;

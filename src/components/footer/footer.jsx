import "./footer.css";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";

import arrow from "./images/Group 1000002377.svg";
import LowerFooter from "./lowerFooter";

export default function Footer({ isDarkMode, handleButtonHover }) {
  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".footersection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  return (
    <footer id="footer" className="max-md:mt-10 footersection">
      <section id="footeer" className="main-footer">
        <b style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }} id="ftrcnt">
          Wanna Know A Secret?
        </b>
        <div className="arrow">
          <img src={arrow} alt="" srcset="" className="arrow" loading="lazy" />
        </div>
        <Link
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          to="/let's_talk"
          className="link"
        >
          <h1 id="ftrh1">Let's Talk</h1>
        </Link>
        <LowerFooter
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
        />
      </section>
    </footer>
  );
}

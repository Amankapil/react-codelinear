import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from 'gsap';
import { TweenMax } from "gsap";

const Abouthero = (isDarkMode) => {
  const [heroaboutGET, setHeroAboutGET] = useState();

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".aboutsection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, {  opacity: 1, y: 0, ease: "easeOut"  });
        })
        .addTo(controller);
    });
  }, []);

  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutHero").then((response) => {
      // setarray(response.data.homeHero);
      setHeroAboutGET(response.data.aboutHeading);
      console.log(response.data);
    });
  }, []);
  return (
    <section className="about-hero aboutsection">
      <h1
        style={{ color: isDarkMode ? "#d8d6d6" : "#000000" }}
        className="about-hero-h1 text-white"
      >
        Welcome To The World Of Codelinear-
        <br /> The World Of Impact
        {/* {heroaboutGET} */}
      </h1>
    </section>
  );
};

export default Abouthero;

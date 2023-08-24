import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";

export default function Careerhero({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
}) {
  const [Servicesarray, setServicesarray] = useState();

  useEffect(() => {
    axios.get("https://codelinear.in/code/career").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.careerHero);

      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesection");
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
    <section className="career-hero  servicchomesection">
      <h1
        style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
        className="career-hero-h1"
      >
        We Are An Impact-Driven Firm,
        <br /> Join Us And Be A Part Of The Impact
        {/* {Servicesarray} */}
      </h1>
    </section>
  );
}

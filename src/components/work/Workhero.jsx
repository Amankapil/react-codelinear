import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

export default function Workhero({ isDarkMode, handleButtonHover }) {
  const [Servicesarray, setServicesarray] = useState();

  useEffect(() => {
    axios.get("https://codelinear.in/code/work").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.work_hero);

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
          TweenMax.to(section, 0, { opacity: 1, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  return (
    <main className="work_hero  servicchomesection">
      <div className="container-1">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          id="work_heading"
        >
          We're Proud To Show You Our Accomplishments
          {/* {Servicesarray} */}
        </h1>
      </div>
    </main>
  );
}

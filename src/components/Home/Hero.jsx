import bgvideo from "./images/revised.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";

import { Bounce } from "gsap/all";

export default function Hero({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
}) {
  const [array, setarray] = useState();

  useEffect(() => {
    axios.get("https://codelinear.in/code").then((response) => {
      setarray(response.data.homeHero);
      console.log(response.data);
    });
  }, []);

  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesectionlinks");
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
    <>
      <section
        style={{ backgroundColor: isDarkMode ? "white" : "#000" }}
        id="hero"
        className="servicchomesectionlinks"
      >
        <div className="bgi">
          <video
            className="bgv"
            src={bgvideo}
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
          ></video>
        </div>
        <section id="content">
          <h1
            class="max-2xl:text-7xl"
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            id="header"
          >
            Propelling The World, By Design
            {/* {array} */}
          </h1>

          <Link
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            to={"/about"}
            id="aboutbtn"
          >
            <p className={isDarkMode ? "dark" : "aboutbtn_content"}>About Us</p>
          </Link>
        </section>
      </section>
    </>
  );
}

import { gsap, Power2 } from 'gsap';
import graphintersect from "./images/Intersect.svg";
import grapharrow from "./images/Group 28.svg";
import grapharroww from "./images/PSST.svg";
import ScrollMagic from "scrollmagic";

import { TweenMax } from "gsap";
import React, { useState, useEffect, useRef } from "react";

export default function Circles({ isDarkMode }) {
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);
  let arrow = useRef(null);
  let intersect = useRef(null);
  let circle4 = useRef(null);

  const mouseOverAnimation = () => {
    gsap.to(circle1, { opacity: 0 });
    gsap.to(intersect, { opacity: 1 });
    gsap.to(arrow, { opacity: 1 });
    gsap.to(circle2, { opacity: 1, y: 63, x: 98, scale: 1.5 });
    gsap.to(circle3, { opacity: 1, y: 64, x: -97, scale: 1.5 });
    gsap.to(circle4, { opacity: 1, y: -105, x: -5, scale: 1.5 });
  };
  const mouseOutAnimation = () => {
    gsap.to(circle1, { opacity: 1 });
    gsap.to(intersect, { opacity: 0 });
    gsap.to(arrow, { opacity: 0 });
    gsap.to(circle2, { opacity: 0, y: 0, x: 0, scale: 1 });
    gsap.to(circle3, { opacity: 0, y: 0, x: 0, scale: 1 });
    gsap.to(circle4, { opacity: 0, y: 0, scale: 1 });
  };
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
  return (
    <div
      className="circles-animation aboutsection"
      onMouseOver={mouseOverAnimation}
      onMouseOut={mouseOutAnimation}
    >
      <img
        src={graphintersect}
        alt=""
        className="intersect"
        ref={(el) => (intersect = el)}
      />
      {isDarkMode ? (
        <img
          src={grapharroww}
          alt=""
          className="arrowanimate"
          ref={(el) => (arrow = el)}
        />
      ) : (
        <img
          src={grapharrow}
          alt=""
          className="arrowanimate"
          ref={(el) => (arrow = el)}
        />
      )}

      <div
        style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 900 }}
        className="circle11"
        ref={(el) => (circle1 = el)}
      >
        Codelinear
      </div>
      <div
        style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 800 }}
        className="circle20 circle21"
        ref={(el) => (circle2 = el)}
      >
        Market
      </div>
      <div
        style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 800 }}
        className="circle20 circle22"
        ref={(el) => (circle3 = el)}
      >
        Develop
      </div>
      <div
        style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 800 }}
        className="circle20 circle23"
        ref={(el) => (circle4 = el)}
      >
        Design
      </div>
    </div>
  );
}

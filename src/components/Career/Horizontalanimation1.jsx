import image1 from "./images/slide-1.jpg";
import image2 from "./images/slide-2.jpg";
import image3 from "./images/slide-3.jpg";

import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

import { useRef, useEffect } from "react";

export default function Horizontalanimation1(handleimgHover) {
  let slideImg4 = useRef(null);
  let slideImg5 = useRef(null);
  let slideImg6 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg4, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg5, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg6, { x: "0%" }, { x: "-100%" });
  }, []);

  const handleButtonMouseEnter = () => {
    // handleButtonHover(true);
    handleimgHover(true);
  };

  const handleButtonMouseLeave = () => {
    // handleButtonHover(false);
    handleimgHover(false);
  };

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
    <>
      <div className="horizontal-slide max-xl:mt-10   servicchomesection">
        <img
          src={image1}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg4 = el)}
        />
        <img
          src={image2}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg5 = el)}
        />
        <img
          src={image3}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg6 = el)}
        />
      </div>
    </>
  );
}

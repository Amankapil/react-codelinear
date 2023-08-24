import image3 from "./images/slide-3.jpg";
import image4 from "./images/slide-4.jpg";
import image5 from "./images/slide-5.jpg";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";


import { useRef, useEffect } from "react";

export default function Horizontalanimation2() {
  let slideImg1 = useRef(null);
  let slideImg2 = useRef(null);
  let slideImg3 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg1, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg2, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg3, { x: "0%" }, { x: "-100%" });
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
    <>
      <div className="horizontal-slide max-xl:mt-20 servicchomesection">
        <img
          src={image4}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg1 = el)}
        />
        <img
          src={image5}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg2 = el)}
        />
        <img
          src={image3}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg3 = el)}
        />
      </div>
    </>
  );
}

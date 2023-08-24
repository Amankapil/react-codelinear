import client1 from "./images/client.svg";
import client2 from "./images/client1.svg";
import client3 from "./images/client2.svg";
import client4 from "./images/client3.svg";
import client5 from "./images/client4.svg";
import client6 from "./images/client5.svg";
import client7 from "./images/client6.svg";
import client8 from "./images/client7.svg";
import client9 from "./images/client8.svg";
import client10 from "./images/client9.svg";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";

export default function Client({ isDarkMode }) {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".clien");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.7, { opacity: 0.5, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".clienright");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.7, { opacity: 0.5, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".clienleft");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.4, { opacity: 0.5, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  return (
    <>
      {/* <section className="clinetsec"> */}
      <section className="" id="clients">
        <img src={client1} alt="" className="client-img1 clienleft" loading="lazy" />
        <img src={client2} alt="" className="client-img2 clienleft" loading="lazy" />
        <img src={client3} alt="" className="client-img3 clienright" loading="lazy" />
        <img src={client4} alt="" className="client-img4 clienright" loading="lazy" />
        <img src={client5} alt="" className="client-img5 clien" loading="lazy" />
        <img src={client7} alt="" className="client-img6 clienleft" loading="lazy" />
        <img src={client6} alt="" className="client-img7 clienleft" loading="lazy" />
        <img src={client8} alt="" className="client-img8  clien" loading="lazy" />
        <img src={client9} alt="" className="client-img9 clienright" loading="lazy" />
        <img src={client10} alt="" className="client-img0 clienright" loading="lazy" />
      </section>
      {/* </section> */}
    </>
  );
}

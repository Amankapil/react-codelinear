import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";

export default function Bloghero({ isDarkMode, toggleDarkMode }) {
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
      <section className="blog-hero servicchomesection">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="blog-hero-h1"
        >
          We Got Plenty Of Ideas
        </h1>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";

export default function Hero({ isDarkMode, handleButtonHover }) {
  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  // useEffect(() => {
  //   const controller = new ScrollMagic.Controller();

  //   const sections = document.querySelectorAll(".servicchomesection");
  //   sections.forEach((section) => {
  //     new ScrollMagic.Scene({
  //       triggerElement: section,
  //       triggerHook: 1, // Adjust this value to control when the animation starts
  //       reverse: false,
  //     })
  //       .on("enter", () => {
  //         TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
  //       })
  //       .addTo(controller);
  //   });
  // }, []);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesectionlinks");
    // const sectionshead = document.querySelectorAll(".headingsection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, x: 0, ease: "easeOut" });
          // TweenMax.to(sectionshead, 0, { opacity: 1, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // const sections = document.querySelectorAll(".servicchomesectionlinks");
    const sectionshead = document.querySelectorAll(".headingsection");
    sectionshead.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, x: 0, ease: "easeOut" });
          // TweenMax.to(sectionshead, 0, { opacity: 1, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);

  // //////////////////////////////////////////////////////////////////////
  return (
    <section id="service" className="">
      <div className="service_main">
        <div className="service_main-content">
          <h1
            className="headingsection"
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            id="srvcnt"
          >
            Our Services
          </h1>
          <p
            className="headingsection"
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            id="srvp"
          >
            Lead the new technological era with our extensive services.
          </p>
          <Link
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            to={"/services"}
            id="svcbtn"
            className="headingsection"
          >
            <p
              // style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              // className="svcbtn_content"
              className={isDarkMode ? "dark" : "svcbtn_content "}
            >
              Explore More
            </p>
          </Link>
        </div>
        <div
          style={{ color: isDarkMode ? "#000000" : "#848484" }}
          id={isDarkMode ? "buttons" : "buttonss"}
          className=""
        >
          <Link
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            to={"/consultingandstrategy"}
            className={
              isDarkMode
                ? "btnlinkslight servicchomesectionlinks"
                : "btnlinks servicchomesectionlinks"
            }
          >
            Consulting And Strategy
          </Link>
          <Link
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            to={"/userexperience"}
            className={
              isDarkMode ? "btnlinkslight" : "btnlinks servicchomesectionlinks"
            }
          >
            User Experience
          </Link>
          <Link
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            to={"/productdevelopment"}
            className={
              isDarkMode ? "btnlinkslight" : "btnlinks servicchomesectionlinks"
            }
          >
            Product Development
          </Link>
          <Link
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            to={"/digitalmarketing"}
            className={
              isDarkMode ? "btnlinkslight" : "btnlinks servicchomesectionlinks"
            }
          >
            Digital Marketing
          </Link>
        </div>
      </div>
    </section>
  );
}

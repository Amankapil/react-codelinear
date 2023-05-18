import React from "react";
import "./vision.scss";
import svg1 from "../images/svgs/Vector-1.svg";
import svg2 from "../images/svgs/Vector-2.svg";
import svg3 from "../images/svgs/Vector.svg";
import { useRef, useEffect } from "react";
import { gsap, Power0 } from "gsap";

import arrowdown from "../../services/images/Vector.svg";
import whitedownarrow from "../../services/images/downarrow.svg";
import axios from "axios";
import { useState } from "react";

const Vision = ({ isDarkMode }) => {
  let arrows = useRef(null);
  let skip = useRef(null);
  let spinimg1 = useRef(null);
  let spinimg2 = useRef(null);
  let spinimg3 = useRef(null);

  window.onscroll = function () {
    scrollSpin();
  };
  const scrollSpin = () => {
    gsap.to(spinimg1, {
      transform: "rotate(" + window.pageYOffset / 3.75 + "deg)",
    });
    gsap.to(spinimg2, {
      transform: "rotate(" + window.pageYOffset / 3.75 + "deg)",
    });
    gsap.to(spinimg3, {
      transform: "rotate(" + window.pageYOffset / 3.75 + "deg)",
    });
  };

  const arrowRotate = () => {
    gsap.to(arrows, 0.2, { y: 33 });
    gsap.to(skip, 0.2, { css: { color: "white" } });
  };
  const arrowRotateBack = () => {
    gsap.to(arrows, 0.2, { y: 0 });
    gsap.to(skip, 0.2, { css: { color: "#848484" } });
  };
  const scrollToTarget = (target) => {
    const targetPosition = document.getElementById(target);

    // scroll to the target element
    window.scrollTo({
      top: 2200,
      behavior: "smooth",
    });
  };
  const [vision_peraGET, setvision_peraGET] = useState();
  const [guiding_peraGET, setguiding_peraGET] = useState();

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/aboutvision")
      .then((response) => {
        // setarray(response.data.homeHero);
        setvision_peraGET(response.data.vision_pera);

        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/aboutguiding")
      .then((response) => {
        // setarray(response.data.homeHero);
        setguiding_peraGET(response.data.guiding_pera);
        console.log(response.data);
      });
  }, []);
  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code/abouttest").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.idea);
      setAboutarray(response.data.innovate);
      setarray(response.data.imp);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <section className="core-container">
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="core-para"
        >
          A digital product development and UX design firm determined to make an
          impact through clients. We integrate our tech expertise with a social
          conscience to build digital products that provide end-user with the
          finest experience.
        </p>
        <div className="vision-container">
          <h2
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="visionh1"
          >
            Our Vision
          </h2>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="vision-para"
          >
            {/* To propel humanity forward by building digital products that uplift
            our client's value proposition and enrich their users' lives. */}
            {vision_peraGET}
          </p>
        </div>
        <div className="core-guiding-container">
          <div className="guiding-container">
            <h2
              style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              className="guiding-container-h1"
            >
              Guiding Principle
            </h2>
            <p
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="guiding-container-para"
            >
              {/* Crafting ideal, innovative and impactful digital products are the
              three core pillars around which each of our projects is centred.
              Our guiding principles enable us to adhere to our core and deliver
              exceptional projects. */}
              {guiding_peraGET}
            </p>
            <div className="skip-container">
              <div
                onClick={() => scrollToTarget("section1")}
                className="skip"
                onMouseOut={arrowRotateBack}
                onMouseOver={arrowRotate}
                ref={(el) => (skip = el)}
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              >
                skip ahead
                <div className="downarrows" ref={(el) => (arrows = el)}>
                  <img src={whitedownarrow} alt="" className="arrowdown" />
                  <img src={arrowdown} alt="" className="arrowdown" />
                </div>
              </div>
            </div>
          </div>
          <div className="guiding-subcontainer">
            <div className="subcontainer">
              <img
                className="subcontainer-img"
                src={svg1}
                alt="svg"
                ref={(el) => (spinimg1 = el)}
                loading="lazy"
              />
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="subcontainer-h1"
              >
                Ideal
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="subcontainer-para"
              >
                {/* We understand the varying needs of our clients, and therefore
                custom-tailor every product ideally suited to their
                requirements. Our diverse team of designers, developers,
                marketers, and strategists works in collaboration to deliver
                competitive advantages and unparalleled solutions tailored to
                your needs. */}
                {Servicesarray}
              </p>
            </div>
            <div className="subcontainer">
              <img
                className="subcontainer-img"
                src={svg3}
                alt="svg"
                ref={(el) => (spinimg3 = el)}
                loading="lazy"
              />
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="subcontainer-h1"
              >
                Innovation
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="subcontainer-para"
              >
                {/* We envision ourselves to be the trendsetters and strive to make
                our clients one too. When organisations across the world are on
                the verge of transformation or running the risk of irrelevance,
                we turn to innovation to stay ahead. We, therefore, go beyond
                strategising and implement innovation into our projects. */}
                {Aboutarray}
              </p>
            </div>
            <div className="subcontainer">
              <img
                className="subcontainer-img"
                src={svg2}
                alt="svg"
                ref={(el) => (spinimg2 = el)}
                loading="lazy"
              />
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="subcontainer-h1"
              >
                Impact
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="subcontainer-para"
              >
                {/* Driven by impact, our ultimate focus is to build digital
                products that address real-world problems. Our team of industry
                experts ascertains that in addition to crafting epitomes of
                digital experiences, we create products that enrich lives and
                create value. */}
                {array}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;

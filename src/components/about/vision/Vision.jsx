import React from "react";
import "./vision.scss";
import svg1 from "../images/svgs/Vector-1.svg";
import svg2 from "../images/svgs/Vector-2.svg";
import svg3 from "../images/svgs/Vector.svg";
import { useRef, useEffect } from "react";
import { gsap, Power0 } from "gsap";

import arrowdown from "../../services/images/Vector.svg";
import whitedownarrow from "../../services/images/downarrow.svg";

const Vision = () => {
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
  return (
    <>
      <section className="core-container">
        <p className="core-para">
          A digital product development and UX design firm determined to make an
          impact through clients. We integrate our tech expertise with a social
          conscience to build digital products that provide end-user with the
          finest experience.
        </p>
        <div className="vision-container">
          <h2 className="visionh1">Our Vision</h2>
          <p className="vision-para">
            To propel humanity forward by building digital products that uplift
            our client's value proposition and enrich their users' lives.
          </p>
        </div>
        <div className="core-guiding-container">
          <div className="guiding-container">
            <h2 className="guiding-container-h1">Guiding Principle</h2>
            <p className="guiding-container-para">
              Crafting ideal, innovative and impactful digital products are the
              three core pillars around which each of our projects is centred.
              Our guiding principles enable us to adhere to our core and deliver
              exceptional projects.
            </p>
            <div className="skip-container">
              <div
                onClick={() => scrollToTarget("section1")}
                className="skip"
                onMouseOut={arrowRotateBack}
                onMouseOver={arrowRotate}
                ref={(el) => (skip = el)}
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
              <h1 className="subcontainer-h1">Ideal</h1>
              <p className="subcontainer-para">
                We understand the varying needs of our clients, and therefore
                custom-tailor every product ideally suited to their
                requirements. Our diverse team of designers, developers,
                marketers, and strategists works in collaboration to deliver
                competitive advantages and unparalleled solutions tailored to
                your needs.
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
              <h1 className="subcontainer-h1">Innovation</h1>
              <p className="subcontainer-para">
                We envision ourselves to be the trendsetters and strive to make
                our clients one too. When organisations across the world are on
                the verge of transformation or running the risk of irrelevance,
                we turn to innovation to stay ahead. We, therefore, go beyond
                strategising and implement innovation into our projects.
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
              <h1 className="subcontainer-h1">Impact</h1>
              <p className="subcontainer-para">
                Driven by impact, our ultimate focus is to build digital
                products that address real-world problems. Our team of industry
                experts ascertains that in addition to crafting epitomes of
                digital experiences, we create products that enrich lives and
                create value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;

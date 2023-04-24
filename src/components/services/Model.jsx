import { useRef, useEffect, useState } from "react";
import { gsap, Power0 } from "gsap";

import arrowdown from "./images/Vector.svg";
import whitedownarrow from "./images/downarrow.svg";

export default function Wedo() {
  let arrows = useRef(null);
  let skip = useRef(null);

  const arrowRotate = () => {
    gsap.to(arrows, 0.2, { y: 30 });
    gsap.to(skip, 0.2, { css: { color: "white" } });
  };
  const arrowRotateBack = () => {
    gsap.to(arrows, 0.2, { y: 0 });
    gsap.to(skip, 0.2, { css: { color: "#848484" } });
  };

  const [isActive, setIsActive] = useState(false);

  const scrollToTarget = (target) => {
    const targetPosition = document.getElementById(target);
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    });
  };
  return (
    <section className="e-model">
      <div className="engagement-model">
        <div className="model">
          <div className="model-content">
            <h1 className="em-h1">Our Engagement Model</h1>
            <p className="e-para">
              Our comprehensive services encompass UX design, product
              development, consulting, and everything within and beyond.
              Starting with the development of the products and continuing
              through the launch strategies, we help businesses launch their
              success and bring the luxury of transformational technology and
              dynamic UI/UX right to their doorstep.
            </p>
          </div>
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
        <div className="model-container">
          <div className="m-m-container">
            <h1 className="m-title">
              <p className="m-numbers">02</p>
              Tempus Enim Tellus Vel
            </h1>
            <p className="m-desc">
              Mauris nulla ultricies aliquet massa tempor odio. Tincidunt
              parturient nec tortor dolor eu tristique dictumst ultrices
              vestibulum. Urna scelerisque nulla turpis adipiscing accumsan
              congue etiam habitant.
            </p>
          </div>
          <div className="m-m-container">
            <h1 className="m-title">
              <p className="m-numbers">02</p>
              Ut Luctus Ipsum Etiam
            </h1>
            <p className="m-desc">
              Vitae mollis consectetur congue donec nunc iaculis non. Est
              integer ultrices dolor pharetra. Arcu non ut nec nam maecenas
              libero ornare. Lacus ullamcorper aliquam mauris nibh rutrum.
            </p>
          </div>
          <div className="m-m-container">
            <h1 className="m-title">
              <p className="m-numbers">02</p>
              Accumsan Eleifend Ut
            </h1>
            <p className="m-desc">
              Commodo pellentesque risus sed non sed auctor dui donec neque.
              Pharetra arcu cras leo in lectus nam arcu. In faucibus velit non
              et mauris sit ornare velit. Ipsum tortor facilisi nunc egestas
              quis felis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

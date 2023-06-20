import left_arrow from "./images/Frame 7.png";
import right_arrow from "./images/Frame 8.png";
import Client from "./client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";

export default function Hero({ isDarkMode }) {
  let testimonial = useRef(null);
  const [array, setarray] = useState();

  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/homeServices")
      .then((response) => {
        setarray(response.data.homeServices);
        // console.log(response.data);
      });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    tl.fromTo(testimonial, 3, { translateY: "0" }, { translateY: "0" });
    tl.fromTo(testimonial, 1, { translateY: "0" }, { translateY: "-22%" });
    tl.fromTo(testimonial, 0.3, { translateY: "-22%" }, { translateY: "-20%" });
    tl.fromTo(testimonial, 3, { translateY: "-20%" }, { translateY: "-20%" });
    tl.fromTo(testimonial, 1, { translateY: "-20%" }, { translateY: "-42%" });
    tl.fromTo(testimonial, 0.3, { translateY: "-42%" }, { translateY: "-40%" });
    tl.fromTo(testimonial, 3, { translateY: "-40%" }, { translateY: "-40%" });
    tl.fromTo(testimonial, 1, { translateY: "-40%" }, { translateY: "-62%" });
    tl.fromTo(testimonial, 0.3, { translateY: "-62%" }, { translateY: "-60%" });
    tl.fromTo(testimonial, 3, { translateY: "-60%" }, { translateY: "-60%" });
    tl.fromTo(testimonial, 1, { translateY: "-60%" }, { translateY: "-82%" });
    tl.fromTo(testimonial, 0.3, { translateY: "-82%" }, { translateY: "-80%" });
    tl.fromTo(testimonial, 3, { translateY: "-80%" }, { translateY: "-80%" });
  }, []);

  return (
    <section id="testimonials">
      <div className="test-main-container">
        <div id="container-2">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            id="container-2_header"
          >
            We Are Defined By How Our Clients Perceive Us.
            {/* {array} */}
          </h1>
          <div id="container">
            <div className="test-content" ref={(el) => (testimonial = el)}>
              <p
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                id="container-h3"
              >
                They're a full-stack performance marketing team with relevant
                experience despite being in completely different places.
                <h2
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="container_h2"
                >
                  Sarah Wicker
                </h2>
                <p
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="pm"
                >
                  product manager, steelcase
                </p>
              </p>
              <p
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                id="container-h3"
              >
                The best thing about Codelinear is the professionalism and
                enthusiasm to do their best for us.
                <h2
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="container_h2"
                >
                  Cj Jenkins
                </h2>
                <p id="pm">product manager, moveworks</p>
              </p>
              <p
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                id="container-h3"
              >
                Most thinks that agency is expensive, but for me, it's a good
                move and worth while investment.
                <h2
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="container_h2"
                >
                  Alex Bouaziz
                </h2>
                <p
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="pm"
                >
                  co-founder and ceo, deel
                </p>
              </p>
              <p
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                id="container-h3"
              >
                They were able to see the bigger picture and identify
                improvement opportunity across our platform.
                <h2
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="container_h2"
                >
                  Megan Larsen
                </h2>
                <p
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="pm"
                >
                  founder and director, sodashi
                </p>
              </p>
              <p
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                id="container-h3"
              >
                You can really easily see the care that they have for our
                product and our relationship.
                <h2
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="container_h2"
                >
                  Margaret Hathaway
                </h2>
                <p
                  style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  id="pm"
                >
                  vice president, hinge health
                </p>
              </p>
            </div>
          </div>
        </div>
        <Client />
      </div>
    </section>
  );
}

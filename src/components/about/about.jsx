import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Circles from "./circlesanimation";

import Abouthero from "./AboutHero";


import Crew from "./crew";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import image from "./images/ss.png";

import "./about.css";
import Vision from "./vision/Vision";
import BlogHome from "../Home/BlogHome";

export default function About({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <main className="aboutpage" ref={(el) => (fade = el)}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="iframe-container">
        <iframe
          className="iframe"
          src="https://my.spline.design/untitled-7e4e7fbe3d7aaedc118f34cadd85536b/"
          frameborder="0"
          width="100%"
          title="j"
          height="100%"
          style={{
            position: "absolute",
          }}
        ></iframe>
      </div>
      <Abouthero isDarkMode={isDarkMode} />
      <Circles isDarkMode={isDarkMode} />
      <img src={image} alt="" className="image" />
      <Vision isDarkMode={isDarkMode} />
      <Crew isDarkMode={isDarkMode} />
      <div className="about-case">
        <BlogHome isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}

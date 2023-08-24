import "./consulting.css";
import Servicesslide from "../services/Explore/Explore";
import { useRef, useEffect } from "react";
import { gsap, Power2 } from 'gsap';
import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Animation from "./animation";
import { Helmet } from "react-helmet";

import Parent from "./Scrooll";

export default function Consultingandstrategy({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Consulting & Stretagy | Codelinear</title>
      </Helmet>

      <main className="service-inner-page" ref={(el) => (fade = el)}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <section className="otherservices">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="inner-service-h1"
          >
            Shaping Tomorrow By Capitalising On Today's Disruptions.
          </h1>
        </section>
        <div className="mt-2">
          {/* <Animation /> */}
          <Parent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="slide-container">
          <Servicesslide
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
    </>
  );
}

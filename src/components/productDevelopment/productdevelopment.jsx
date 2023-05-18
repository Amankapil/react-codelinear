import gsap from "gsap";
import { useRef, useEffect } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "../navigationBar/Nav";
import Animation from "../consultingAndStrategy/animation";
import Parent from "../consultingAndStrategy/Scrooll";

export default function Productdevelopment({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <main className="serviceinnerpage" ref={(el) => (fade = el)}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <section className="otherservices">
        {/* <AnimatedCursor color="255, 255, 255" /> */}

        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="inner-service-h1"
        >
          Developing Products That Transform Your Ideas Into Reality And Enrich
          Lives.
        </h1>
      </section>
      {/* <Animation /> */}
      <Parent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="slide-container">
        <Servicesslide
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}

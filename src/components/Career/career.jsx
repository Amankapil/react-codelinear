import { useRef, useEffect } from "react";
import "./career.css";
import CareerHero from "./Careerhero";
import gsap from "gsap";
import Horizontalanimation1 from "./Horizontalanimation1";
import Horizontalanimation2 from "./Horizontalanimation2";
import Positions from "./Position";
import Whyus from "./Whyus";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Career({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="career-page" ref={(el) => (fade = el)}>
        <CareerHero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Horizontalanimation1
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Whyus isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Horizontalanimation2
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Positions isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

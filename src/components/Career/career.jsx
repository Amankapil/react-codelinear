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
import { Helmet } from "react-helmet";

export default function Career({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover,
}) {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Career | Codelinear</title>
      </Helmet>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="career-page" ref={(el) => (fade = el)}>
        <CareerHero
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Horizontalanimation1
        handleimgHover={handleimgHover}
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Whyus
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Horizontalanimation2
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Positions
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </main>

      <Footer
        handleButtonHover={handleButtonHover}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}

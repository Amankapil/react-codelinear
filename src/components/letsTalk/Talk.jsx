import "./talk.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Contacthero from "./contactHero";
import Navbar from "../navigationBar/Nav";
import LowerFooter from "../footer/lowerFooter";
import Form from "./form";
import Address from "./Address";
export default function Talk({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
      <main className="contact-page" ref={(el) => (fade = el)}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Contacthero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Form isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Address isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
      <div className="centerclass">
        <LowerFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  );
}

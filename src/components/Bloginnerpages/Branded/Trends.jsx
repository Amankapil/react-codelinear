import Trendhero from "./Trendhero";
import Trendsection from "./TrendSection";
import Navbar from "../../navigationBar/Nav";
import Footer from "../../footer/footer";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Empathy({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="empathy-page" ref={(el) => (fade = el)}>
        <Trendhero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Trendsection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

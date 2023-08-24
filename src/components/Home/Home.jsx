import "./home.css";
import { gsap, Power2 } from "gsap";
import { useRef, useEffect, useState } from "react";
import BlogHome from "./BlogHome";

import Hero from "./Hero";
import HomeAbout from "./homeAbout";
import HomeServices from "./Homeservices";
import Testimonials from "./Testmonials";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

import { Helmet } from "react-helmet";
import { Element } from "react-scroll";
import { Link } from "react-scroll";

import ScrollReveal from "scrollreveal";

export default function Home({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover,
}) {
  let fade = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.75 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "0" });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".tagline", { delay: 500 });

    // ScrollReveal().reveal( {
    //   // ScrollReveal options and configuration here
    //   // See documentation for available options: https://scrollrevealjs.org/api/reveal.html
    // });
  }, []);
  
 
  return (
    <div className="tagline">
      <Helmet>
        <title>Codelinear</title>
      </Helmet>
      <header className="App-header" style={{ top: scrollY }}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} handleButtonHover={handleButtonHover}/>
      </header>
      <main ref={(el) => (fade = el)} className="home">
        <Hero
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
       

        <HomeAbout
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {/* </Element> */}

        <HomeServices
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Testimonials isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <BlogHome
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </main>
      <footer className="App-footer" style={{ bottom: -scrollY }}>
        <Footer
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </footer>
    </div>
  );
}

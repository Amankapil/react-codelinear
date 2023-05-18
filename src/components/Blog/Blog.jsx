import "./Blog.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import Bloghero from "./Bloghero";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import Blogsection from "./Blogsection";

export default function Blog({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "0" });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <main className="blog-page" ref={(el) => (fade = el)}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Bloghero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Blogsection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}

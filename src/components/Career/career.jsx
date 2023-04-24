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
import AnimatedCursor from "react-animated-cursor";


export default function Career() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <Navbar />
      <main className="career-page" ref={(el) => (fade = el)}>
        <CareerHero />
        <Horizontalanimation1 />
        <Whyus />
        <Horizontalanimation2 />
        <Positions />
      </main>
      <Footer />
    </>
  );
}

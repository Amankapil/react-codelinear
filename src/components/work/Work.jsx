import "./work.css";
import Workhero from "./Workhero";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import Card from "./card/Card";
import Card2 from "./card/Card2";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Work() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <main className="aboutpage" ref={(el) => (fade = el)}>
      <Navbar />
      <Workhero />
      {/* <Card /> */}
      <Card2 />
      <Footer />
    </main>
  );
}

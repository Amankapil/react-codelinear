import "./consulting.css";
import Servicesslide from "../services/Explore/Explore";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Animation from "./animation";

import Parent from "./Scrooll";

export default function Consultingandstrategy() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <main className="service-inner-page" ref={(el) => (fade = el)}>
      <Navbar />
      <section className="otherservices">
        <h1 className="inner-service-h1">
          Shaping Tomorrow By Capitalising On Today's Disruptions.
        </h1>
      </section>
      <div className="mt-2">
        {/* <Animation /> */}
        <Parent />
      </div>
      <div className="slide-container">
        <Servicesslide />
      </div>
      <Footer />
    </main>
  );
}

import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "../navigationBar/Nav";
import Animation from "../consultingAndStrategy/animation";
import Parent from "../consultingAndStrategy/Scrooll";

export default function Digitalmarketing() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <main className="serviceinnerpage" ref={(el) => (fade = el)}>
      <Navbar />
      <main>
        <section className="otherservices">
          <h1 className="inner-service-h1">
            Traversing You Closer To Your Users.
          </h1>
        </section>
        {/* <Animation /> */}
        <Parent />
        <div className="slide-container">
          <Servicesslide />
        </div>
      </main>
      <Footer />
    </main>
  );
}

import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Animation from "../consultingAndStrategy/animation";
// import Animation from "../consultingAndStrategy/animation";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import Parent from "../consultingAndStrategy/Scrooll";

export default function UX() {
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

      <section className="otherservices">
        <h1 className="inner-service-h1">
          Crafting designs operating at the intersection of empathy and
          rationality.
        </h1>
      </section>
      {/* <Animation /> */}
      <Parent />
      <div className="slide-container">
        <Servicesslide />
      </div>
      <Footer />
    </main>
  );
}

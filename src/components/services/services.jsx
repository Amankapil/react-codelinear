import "./service.css";
import "./do/do.scss";
import { gsap, Power0 } from "gsap";
import { useRef, useEffect } from "react";
import "swiper";
import Explore from "./Explore/Explore";
import Servicehero from "./Servicehero";
import Model from "./Model";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Services() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
      <Navbar />
      <main className="services" ref={(el) => (fade = el)}>
        <Servicehero />
        <section className="wedo max-md:mt-0 max-sm:mt-0">
          <div className="wedo-container">
            <h1 className="wedo-h1">We Do It All!</h1>
            <p className="wedo-para">
              Our comprehensive services encompass UX design, product
              development, digital marketing, and everything within and beyond.
              Starting with the development of the products and continuing
              through the launch strategies, we help businesses launch their
              success and bring the luxury of transformational technology and
              dynamic UI/UX right to their threshold.
            </p>
          </div>
          <div className="circles max-xl:hidden absolute -mt-64">
            <div className="circle1 circlee">
              <div className="circle2 mt-20 circlee">
                <div className="circle3 circlee"></div>
              </div>
            </div>
          </div>
          <div className="accordian-container">
            <div className="accordian">
              <h1 className="accordian-h1">The Innate Problem Solvers</h1>
              <p className="accordian-para">
                We thrive on challenges and comlex problems. Our team ranges
                from industry experts ,providing years of industry insights, to
                young enthusiasts, providing a creative and innovative
                perspective. Equipped with this wide arena of experience, we
                devise solution that enable you to leverage the adversities,
                converting challenges into opportunities.
              </p>
            </div>
            <div className="accordian">
              <h1 className="accordian-h1">The Leaders Of Agility</h1>
              <p className="accordian-para">
                With the constantly evolves in tandem with it, our agile team of
                designers, developers, marketers, and strategists evolves in
                tandem with it. Our protective team is consistently hustling to
                provide you with the finest assistance, enabling you to maintain
                adaptability and resilence in the face of change.
              </p>
            </div>
            <div className="accordian">
              <h1 className="accordian-h1">The Patrons Of Globalization</h1>
              <p className="accordian-para">
                We are here to establish the new status quo- Design with Impact
                and we believe that in the era of globalisation, boundaries are
                only thearetical. Therefore, we may be based in Bengaluru, but
                the impact we weild is global.
              </p>
            </div>
          </div>
        </section>
        <div className="slide-container">
          <Explore />
        </div>
        {/* <Model /> */}
      </main>
      <Footer />
    </>
  );
}

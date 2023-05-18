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
import axios from "axios";
import { useState } from "react";

export default function Services({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();
  const [patron_pera, sepatron_pera] = useState("");
  const [leader, setleader] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);

  const [guiding_pera, setguiding_pera] = useState("");

  const [array, setarray] = useState("");

  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code/servicedo").then((response) => {
      setServicesarray(response.data.heading);
      setAboutarray(response.data.do_pera);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/serviceability")
      .then((response) => {
        // setarray(response.data.homeHero);
        sepatron_pera(response.data.problem_solve);
        setleader(response.data.problem_pera);
        setarray(response.data.leader);
        setvision_pera(response.data.leader_pera);
        setguiding_pera(response.data.patrons);
        setEditMode(response.data.patron_pera);

        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="services" ref={(el) => (fade = el)}>
        <Servicehero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <section className="wedo max-md:mt-0 max-sm:mt-0">
          <div className="wedo-container">
            <h1
              style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              className="wedo-h1"
            >
              {/* We Do It All! */}
              {Servicesarray}
            </h1>
            <p
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="wedo-para"
            >
              {/* Our comprehensive services encompass UX design, product
              development, digital marketing, and everything within and beyond.
              Starting with the development of the products and continuing
              through the launch strategies, we help businesses launch their
              success and bring the luxury of transformational technology and
              dynamic UI/UX right to their threshold. */}
              {Aboutarray}
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
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="accordian-h1"
              >
                {/* The Innate Problem Solvers */}
                {patron_pera}
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="accordian-para"
              >
                {/* We thrive on challenges and comlex problems. Our team ranges
                from industry experts ,providing years of industry insights, to
                young enthusiasts, providing a creative and innovative
                perspective. Equipped with this wide arena of experience, we
                devise solution that enable you to leverage the adversities,
                converting challenges into opportunities. */}
                {leader}
              </p>
            </div>
            <div className="accordian">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="accordian-h1"
              >
                {/* The Leaders Of Agility */}
                {array}
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="accordian-para"
              >
                {/* With the constantly evolves in tandem with it, our agile team of
                designers, developers, marketers, and strategists evolves in
                tandem with it. Our protective team is consistently hustling to
                provide you with the finest assistance, enabling you to maintain
                adaptability and resilence in the face of change. */}
                {vision_pera}
              </p>
            </div>
            <div className="accordian">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="accordian-h1"
              >
                {/* The Patrons Of Globalization */}
                {guiding_pera}
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="accordian-para"
              >
                {/* We are here to establish the new status quo- Design with Impact
                and we believe that in the era of globalisation, boundaries are
                only thearetical. Therefore, we may be based in Bengaluru, but
                the impact we weild is global. */}
                {editMode}
              </p>
            </div>
          </div>
        </section>
        <div className="slide-container">
          <Explore isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        {/* <Model /> */}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

import image1 from "./Images/Frame 43.png";
import image2 from "./Images/Frame 44.png";
import image3 from "./Images/Frame 46.png";
import image4 from "./Images/Frame 472.png";
import image5 from "./Images/Frame 45.png";
import image6 from "./Images/Frame 47.png";
import discovery from "./Images/Frame 58.png";
import story from "./Images/Frame 60.png";
import brand from "./Images/Frame 61.png";
import SEO from "./Images/Frame 64.png";
import UX from "./Images/Frame 57.png";
import gestalt from "./Images/Frame 62.png";
import BVG from "./Images/Frame 59.png";
import listen from "./Images/Frame 63.png";
import reactimg from "./Images/Frame 4.svg";
import { useRef } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogsection({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover
}) {
  let empathy = useRef(null);
  let db = useRef(null);
  let digitalmarketing = useRef(null);
  let dw = useRef(null);
  let MVP = useRef(null);
  let design = useRef(null);
  let gp = useRef(null);
  let NCR = useRef(null);
  let SVM = useRef(null);
  let Bg = useRef(null);
  let NSEO = useRef(null);
  let Cust = useRef(null);
  let UXi = useRef(null);
  let STM = useRef(null);
  let RVF = useRef(null);
  let all = useRef(null);
  let sec = useRef(null);

  const onClickSort1 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "hidden" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "flex" });
  };
  const onClickSort2 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
  };
  const onClickSort3 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
  };
  const onClickSort4 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "flex" });
  };
  const onClickSort5 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
  };
  const onClickSort6 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "flex" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "none" });
  };
  const onClickSort8 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
  };
  const onClickSort7 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
  };
  const onClickSort9 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
  };

  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  const handleimgMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleimgMouseLeave = () => {
    handleButtonHover(false);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);

  return (
    <>
      <section className="blog-content-section servicchomesection">
        <div className="blog-btns  servicchomesection">
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort2}
          >
            Branding
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort3}
          >
            UI/UX Design
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort4}
          >
            SEO
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort5}
          >
            Social Media
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort6}
          >
            Product Development
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort7}
          >
            Digital Marketing
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort8}
          >
            eCommerce
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort9}
          >
            No Code
          </p>
          <p
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{
              color: isDarkMode ? "#00000099" : "#848484",
              visibility: "hidden",
            }}
            className="blog-btn-content"
            ref={(el) => (all = el)}
            onClick={onClickSort1}
          >
            All
          </p>
        </div>
      </section>
      <section className="blog-section" ref={(el) => (sec = el)}>
        <Link
        
        onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Branded"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (db = el)}>
            <img src={brand} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Disruptive Branding
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/Discovery"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (dw = el)}>
            <img src={discovery} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Discovery Workshop
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/gestalt"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (gp = el)}>
            <img src={gestalt} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Gestalt Psychology
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/bing-vs-google"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (Bg = el)}>
            <img src={BVG} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Bing Vs Google
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/Changing"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (NSEO = el)}>
            <img src={SEO} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                The Changing Nature Of SEO
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/Listening"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (Cust = el)}>
            <img src={listen} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                When To Listen To your customer
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/UX"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (UXi = el)}>
            <img src={UX} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                UX Desing Benefits SMEs
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/Story"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (STM = el)}>
            <img src={story} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Storytelling in Marketing
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/react-vs-flutter"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (RVF = el)}>
            <img src={reactimg} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                React Native Vs Flutter
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/Design"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (design = el)}>
            <img src={image4} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Design System
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/shopify-vs-magento"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (SVM = el)}>
            <img src={image6} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Shopify Vs Magento
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/no-code-revolution"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (NCR = el)}>
            <img src={image5} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                No Code Revolution
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/minimum-viable-product"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (MVP = el)}>
            <img src={image3} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Minimum Viable Product
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/digital-marketing-trends-2023"} className="link-imgs">
          <div
            className="blog-containers"
            ref={(el) => (digitalmarketing = el)}
          >
            <img src={image2} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Digital Marketing Trends 2023
              </h1>
            </div>
          </div>
        </Link>
        <Link to={"/empathy-in-UX"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (empathy = el)}>
            <img src={image1} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Empathy In UX
              </h1>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

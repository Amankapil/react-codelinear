import "./nav.css";

import logo from "./images/logo.svg";
import Vectorr from "../footer/images/Vectorr.svg";
import facebook from "./images/mdi_instagram.svg";
import instagram from "./images/mdi_twitter.svg";
import linkedin from "./images/mdi_linkedin.svg";

import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap/gsap-core";
import { useRef, useState, useEffect } from "react";
import Toggle from "../../Toggle";
export default function Navigation_bar({
  isDarkMode,
  toggleDarkMode,
  scrollToSection,
  handleButtonHover,
}) {
  let slide = useRef(null);

  const navSlide = () => {
    gsap.to(slide, 0.8, { css: { bottom: "0vh" } });
    document.body.classList.add("stop-scrolling");
  };

  const navSlidesBack = () => {
    gsap.to(slide, 0.8, { css: { bottom: "150vh" }, ease: Power3.easeIn });
    document.body.classList.remove("stop-scrolling");
  };
  const fade = () => {
    gsap.to(slide, 0, { css: { bottom: "150vh" } });
    document.body.classList.remove("stop-scrolling");
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);


  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };
  return (
    <>
      <header>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "0px 0px",
            transform: visible ? "translate(0)" : "translateY(-100vh)",
            transition: "transform 0.3s ease-in-out",
          }}
          className="navigation_bar"
        >
          <ul className="nav_list">
            <li className="nav_list-item">
              <Link to={"/"} className="nav_logo" >
                <img src={logo} alt="" className="logo" />
                {/* <span className="hyphen"></span> */}
              </Link>
            </li>
            <li className="nav_list-item flex items-center justify-center ">
              <Toggle
                className=""
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <div   onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} className="menu mx-4" onClick={navSlide}></div>
            </li>
          </ul>
        </nav>
      </header>
      <section id="navigation-slide" ref={(el) => (slide = el)}>
        <div  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} className="nav-menu" onClick={navSlidesBack}>
          <div className="line-nav"></div>
        </div>
        <ul className="slide_nav_list">
          <li className="slide_nav_list-item">
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} to="/about" className="slide_nav_links" onClick={fade} >
              About
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} to="/services" className="slide_nav_links" onClick={fade}>
              Services
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} to="/work" className="slide_nav_links" onClick={fade}>
              Work
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} to="/career" className="slide_nav_links" onClick={fade}>
              Careers
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} to="/blog" className="slide_nav_links" onClick={fade}>
              Ideas
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} to="/let's_talk" className="slide_nav_links" onClick={fade}>
              Let's Talk
            </Link>
          </li>
        </ul>
        <div className="details">
          <div className="socials">
            <Link
             onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
              target="blank"
              to="https://www.linkedin.com/company/codelinear/mycompany/?viewAsMember=true"
            >
              <img src={linkedin} className="icons" loading="lazy" />
            </Link>{" "}
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} target="blank" to="https://www.instagram.com/codelinear_">
              <img src={facebook} alt="" className="icons" loading="lazy" />
            </Link>
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} target="blank" to="https://twitter.com/Codelinear_">
              <img src={instagram} alt="" className="icons" loading="lazy" />
            </Link>
            <Link  onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave} target="blank" to="https://medium.com/@codelinear_">
              <img src={Vectorr} className="icons" loading="lazy" />
            </Link>
          </div>
          <p className="contact-loc">
            12<sup>o</sup> 56' 27.06" N, 77<sup>o</sup> 32' 39.228" E
          </p>
          <div className="contact">
            <p className="contact-mail">
              info
              <span
                style={{
                  fontFamily: "sans-serif",
                  color: "#848484",
                }}
              >
                @
              </span>
              codelinear.com
            </p>
            <p className="contact-no">+1 415 523 5957</p>
          </div>
        </div>
      </section>
    </>
  );
}

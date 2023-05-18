import InstagramIcon from "@mui/icons-material/Instagram";
// import instagram from "../navigationBar/images/mdi_twitter.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Vectorr from "./images/Vectorr.svg";
import Insta from "./images/mdi_instagram.svg";
import Linked from "./images/mdi_linkedin.svg";
import Twet from "./images/mdi_twitter.svg";
import Medi from "./images/carbon_logo-medium.svg";
import Codelinear from "../codelinear/codelinear";

import { Link } from "react-router-dom";
import { gsap, Bounce } from "gsap";
import { useRef, useEffect } from "react";

export default function Lowerfooter({ isDarkMode }) {
  let footeranimation = useRef(null);
  let footeranimationwidth = useRef(null);
  let footerScroll = useRef(null);

  const Effect = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: Bounce.easeOut,
    });
    tl.fromTo(footeranimation, 1, { x: 0 }, { x: 0 });
    tl.fromTo(footeranimation, 0.2, { x: 0 }, { x: -65 });
    tl.fromTo(footeranimation, 0.2, { x: -65 }, { x: -60 });
    tl.fromTo(footeranimation, 1, { x: -60 }, { x: -60 });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: Bounce,
    });
    tl.fromTo(footeranimationwidth, 1, { width: 102 }, { width: 102 });
    tl.fromTo(footeranimationwidth, 0.4, { width: 102 }, { width: 235 });
    tl.fromTo(footeranimationwidth, 1, { width: 235 }, { width: 235 });
  }, []);
  return (
    <section className="lower-footer">
      <div className="lower-footer-container">
        <div className="aligncenter" ref={(el) => (footeranimationwidth = el)}>
          <div className="footer-bounce" ref={(el) => (footeranimation = el)}>
            <Codelinear isDarkMode={isDarkMode} />
          </div>
        </div>
        <p className="copyright">© Codelinear 2023. All Rights Reserved.</p>
      </div>
      <div id="lower-footer">
        <div className="footer-column">
          <div className="column">
            <Link
              className={!isDarkMode ? "footerlink" : "footerlinklight"}
              // style={{ color: isDarkMode ? "#000000" : "#959595" }}
              to={"/about"}
              onClick={Effect}
            >
              About
            </Link>
            <Link
              className={!isDarkMode ? "footerlink" : "footerlinklight"}
              to={"/services"}
              // className="footerlink"
              onClick={Effect}
            >
              Services
            </Link>
          </div>
          <div className="column">
            <Link
              className={!isDarkMode ? "footerlink" : "footerlinklight"}
              to={"/work"}
              // className="footerlink"
              onClick={Effect}
            >
              Work
            </Link>
            <Link
              className={!isDarkMode ? "footerlink" : "footerlinklight"}
              to={"/career"}
              // className="footerlink"
              onClick={Effect}
            >
              Careers
            </Link>
          </div>
          <div className="column">
            <Link
              className={!isDarkMode ? "footerlink" : "footerlinklight"}
              to={"/blog"}
              // className="footerlink"
              onClick={Effect}
            >
              Ideas
            </Link>
            <Link
              className={!isDarkMode ? "footerlink" : "footerlinklight"}
              to={"/let's_talk"}
              // className="footerlink"
              onClick={Effect}
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <div style={{ color: isDarkMode ? "#000000" : "#959595" }} id="contact">
          <p>
            info
            <span
              style={{
                fontFamily: "sans-serif",
              }}
            >
              @
            </span>
            codelinear.com
          </p>
          <p>+1 415 523 5957</p>
        </div>
        <div id="socials">
          <Link
            target="blank"
            to="https://www.linkedin.com/company/codelinear/mycompany/?viewAsMember=true"
          >
            {!isDarkMode ? <LinkedInIcon /> : <img src={Linked} alt="ju" />}
          </Link>
          <Link
            style={{ color: isDarkMode ? "#000000" : "#959595" }}
            target="blank"
            to="https://www.instagram.com/codelinear_"
          >
            {!isDarkMode ? <InstagramIcon /> : <img src={Insta} alt="ju" />}
          </Link>
          <Link
            style={{ color: isDarkMode ? "#000000" : "#959595" }}
            target="blank"
            to="https://twitter.com/Codelinear_"
          >
            {!isDarkMode ? <TwitterIcon /> : <img src={Twet} alt="ju" />}
          </Link>
          <Link
            style={{ color: isDarkMode ? "#000000" : "#959595" }}
            target="blank"
            to="https://medium.com/@codelinear_"
          >
            {!isDarkMode ? (
              <img
                style={{ backgroundColor: isDarkMode ? "#000000" : "" }}
                src={Vectorr}
                alt=""
                srcset=""
                className="icon"
                loading="lazy"
              />
            ) : (
              <img
                src={Medi}
                alt=""
                srcset=""
                className="icon"
                loading="lazy"
              />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}

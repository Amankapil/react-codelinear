import { useLocation } from "react-router-dom";
import codelinear from "../footer/images/Vector.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Codelinear() {
  const url = useLocation();
  let footerScroll = useRef(null);

  const Effect = () => {
    window.scrollTo(0, 0);
  };

  if (url.pathname === "/") {
    return (
      <Link
        to={"/"}
        className="footer-animation"
        ref={(el) => (footerScroll = el)}
        onClick={Effect}
      >
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to impact</span>
      </Link>
    );
  } else if (url.pathname === "/about") {
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to innovation</span>
      </Link>
    );
  } else if (url.pathname === "/case_study" || url.pathname === "/work") {
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to perfection</span>
      </Link>
    );
  } else if (
    url.pathname === "/services" ||
    url.pathname === "/consultingandstrategy" ||
    url.pathname === "/userexperience" ||
    url.pathname === "/productdevelopment" ||
    url.pathname === "/digitalmarketing"
  ) {
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to pioneers</span>
      </Link>
    );
  } else if (url.pathname === "/blog" || url.pathname === "/empathy") {
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to ideas</span>
      </Link>
    );
  } else if (url.pathname === "/career") {
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to people</span>
      </Link>
    );
  } else if (url.pathname === "/let's_talk") {
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to passion</span>
      </Link>
    );
  }
  else{
    return (
      <Link to={"/"} className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to transformation</span>
      </Link>
    );
  }
}

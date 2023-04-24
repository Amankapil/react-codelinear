import "./footer.css";
import { Link } from "react-router-dom";

import arrow from "./images/Group 1000002377.svg";
import LowerFooter from "./lowerFooter";

export default function Footer() {
  return (
    <footer id="footer" className="max-md:mt-10">
      <section id="footeer" className="main-footer">
        <b id="ftrcnt">
          Wanna Know A Secret?
        </b>
        <div className="arrow">
            <img src={arrow} alt="" srcset="" className="arrow"  loading="lazy"/>
          </div>
        <Link to="/let's_talk" className="link">
          <h1 id="ftrh1">
            Let's Talk
          </h1>
        </Link>
        <LowerFooter />
      </section>
    </footer>
  );
}

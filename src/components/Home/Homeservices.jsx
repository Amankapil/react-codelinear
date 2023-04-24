import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

export default function Hero(){
    return(
      <section id="service">
      <div className="service_main">
        <div className="service_main-content">
          <h1 id="srvcnt">Our Services</h1>
          <p id="srvp">
            Lead the new technological era with our extensive services.
          </p>
          <Link to={"/services"} id="svcbtn">
            <p className="svcbtn_content">explore more</p>
          </Link>
        </div>
        <div id="buttons">
          <Link to={"/consultingandstrategy"} className="btnlinks">
            Consulting And Strategy
          </Link>
          <Link to={"/userexperience"} className="btnlinks">
            User Experience
          </Link>
          <Link to={"/productdevelopment"} className="btnlinks">
            Product Development
          </Link>
          <Link to={"/digitalmarketing"} className="btnlinks">
            Digital Marketing
          </Link>
        </div>
      </div>
    </section>
    );
}
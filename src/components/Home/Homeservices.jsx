import { Link } from "react-router-dom";

export default function Hero({ isDarkMode }) {
  return (
    <section id="service">
      <div className="service_main">
        <div className="service_main-content">
          <h1 style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }} id="srvcnt">
            Our Services
          </h1>
          <p style={{ color: isDarkMode ? "#00000099" : "#848484" }} id="srvp">
            Lead the new technological era with our extensive services.
          </p>
          {/* <Link to={"/services"} id="svcbtn">
            <p
              style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              className="svcbtn_content"
            >
              explore more
            </p>
          </Link> */}

          <Link to={"/services"} id="aboutbtn">
            <p
              style={{ color: isDarkMode ? "#000000" : "#848484" }}
              className="aboutbtn_content"
            >
              Explore More
            </p>
          </Link>
        </div>
        <div
          style={{ color: isDarkMode ? "#000000" : "#848484" }}
          id={isDarkMode ? "buttons" : "buttonss"}
        >
          <Link
            to={"/consultingandstrategy"}
            className={isDarkMode ? "btnlinkslight" : "btnlinks"}
          >
            Consulting And Strategy
          </Link>
          <Link
            to={"/userexperience"}
            className={isDarkMode ? "btnlinkslight" : "btnlinks"}
          >
            User Experience
          </Link>
          <Link
            to={"/productdevelopment"}
            className={isDarkMode ? "btnlinkslight" : "btnlinks"}
          >
            Product Development
          </Link>
          <Link
            to={"/digitalmarketing"}
            className={isDarkMode ? "btnlinkslight" : "btnlinks"}
          >
            Digital Marketing
          </Link>
        </div>
      </div>
    </section>
  );
}

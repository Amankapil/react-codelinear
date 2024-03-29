import empathy from "../../Blog/Images/Frame 4.svg";
import cheese from "./images/Ellipse 19.png";

export default function Trendhero({ isDarkMode, toggleDarkMode }) {
  return (
    <section className="empathy-hero">
      <div className="empathy-container">
        <div className="empathy-inner-content">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="empathy-hero-h1"
          >
            React Native V/S Flutter- What’s better for you?
          </h1>
          <div className="blog-date">
            <p
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="date"
            >codelinear</p>
            <p
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="date"
            >16th Feb 2023</p>
          </div>
        </div>
      </div>
      <img src={empathy} alt="" className="empathy" />
    </section>
  );
}

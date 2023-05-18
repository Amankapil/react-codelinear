import empathy from "../../Blog/Images/Frame 45.svg";
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
            No-code revolution: 5 Platforms to keep an eye on in 2023
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

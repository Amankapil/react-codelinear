import empathy from "../../Blog/Images/Frame 48.png";
import cheese from "./images/Ellipse 19.png";

export default function Trendhero() {
  return (
    <section className="empathy-hero">
      <div className="empathy-container">
        <div className="empathy-inner-content">
          <h1 className="empathy-hero-h1">
            Discovery Workshop: Why do you need one?
          </h1>
          <div className="blog-date">
            <p className="date">codelinear</p>
            <p className="date">16th Feb 2023</p>
          </div>
        </div>
      </div>
      <img src={empathy} alt="" className="empathy" />
    </section>
  );
}

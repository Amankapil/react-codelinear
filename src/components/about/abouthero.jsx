import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Abouthero = (isDarkMode) => {
  const [heroaboutGET, setHeroAboutGET] = useState();

  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code/aboutHero").then((response) => {
      // setarray(response.data.homeHero);
      setHeroAboutGET(response.data.aboutHeading);
      console.log(response.data);
    });
  }, []);
  return (
    <section className="about-hero">
      <h1
        style={{ color: isDarkMode ? "#d8d6d6" : "#000000" }}
        className="about-hero-h1 text-white"
      >
        Welcome To The World Of Codelinear-
        <br /> The World Of Impact
        {/* {heroaboutGET} */}
      </h1>
    </section>
  );
};

export default Abouthero;

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Careerhero({ isDarkMode, toggleDarkMode }) {
  const [Servicesarray, setServicesarray] = useState();

  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code/career").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.careerHero);

      console.log(response.data);
    });
  }, []);
  return (
    <section className="career-hero">
      <h1
        style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
        className="career-hero-h1"
      >
        {/* We Are An Impact-Driven Firm,

        <br /> Join Us And Be A Part Of The Impact */}
        {Servicesarray}
      </h1>
    </section>
  );
}

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Workhero({ isDarkMode }) {
  const [Servicesarray, setServicesarray] = useState();

  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code/work").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.work_hero);

      console.log(response.data);
    });
  }, []);
  return (
    <main className="work_hero">
      <div className="container-1">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          id="work_heading"
        >
          {/* We're Proud To Show You Our Accomplishments */}
          {Servicesarray}
        </h1>
      </div>
    </main>
  );
}

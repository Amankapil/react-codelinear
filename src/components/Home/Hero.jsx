import bgvideo from "./images/revised.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Hero({ isDarkMode, toggleDarkMode }) {
  const [array, setarray] = useState();
  const [content, setContent] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:5000/code/").then((response) => {
  //     setarray(response.data.homeHero);
  //     // console.log(response.data);
  //   });
  // }, []);
  return (
    <>
      <section
        style={{ backgroundColor: isDarkMode ? "white" : "#000" }}
        id="hero"
      >
        <div className="bgi">
          <video
            className="bgv"
            src={bgvideo}
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
          ></video>
        </div>
        <section id="content">
          <h1
            class="max-2xl:text-7xl"
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            id="header"
          >
            Propelling The World By Design
          </h1>

          <Link to={"/about"} id="aboutbtn">
            <p
              style={{ color: isDarkMode ? "#000000" : "#848484" }}
              className="aboutbtn_content"
            >
              About Us
            </p>
          </Link>
        </section>
      </section>
    </>
  );
}

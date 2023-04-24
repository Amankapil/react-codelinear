import bgvideo from "./images/revised.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Hero() {
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
      <section id="hero">
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
{/* <<<<<<< HEAD */}
          <h1 id="header">Propelling The World By Design</h1>
{/* ======= */}
          {/* <h1 id="header">Propeling The World By Design</h1> */}
{/* >>>>>>> e54453664bb103af8dba99ffc8f91c4869b50f38 */}
          <Link to={"/about"} id="aboutbtn">
            <p className="aboutbtn_content">about us</p>
          </Link>
        </section>
      </section>
    </>
  );
}

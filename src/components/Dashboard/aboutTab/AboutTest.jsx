import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Mascot from "../images/Screenshot 2023-04-09 144546 1.svg";
import Dashimg from "../images/dash.svg";
import Home from "../images/home.svg";
import About from "../images/about.svg";
import Blog from "../images/blog.svg";
import Setting from "../images/settings.svg";
import Contact from "../images/contact.svg";
import Case from "../images/case.svg";
import view from "../images/view.svg";
import edit from "../images/edit.svg";
import close from "../images/close.svg";
import Search from "../images/scg.svg";
import Add from "../images/add.svg";
import gsap from "gsap";

const AboutTest = () => {
  const [vision_pera, setvision_pera] = useState();
  const [vision_peraGET, setvision_peraGET] = useState();
  const [heroabout, setHeroAbout] = useState();
  const [heroaboutGET, setHeroAboutGET] = useState();

  const [guiding_pera, setguiding_pera] = useState();
  const [guiding_peraGET, setguiding_peraGET] = useState();

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [idea, setidea] = useState("");
  const [innovate, setinnovate] = useState("");
  const [imp, setimp] = useState("");

  const [showaboutHero, setshowaboutHero] = useState(false);
  const [show, setShow] = useState(false);
  const [showabout, setShowabout] = useState(false);
  const [showservice, setShowservices] = useState(false);

  const showinputaboutHero = () => {
    if (!showaboutHero) {
      setshowaboutHero(true);
    } else {
      setshowaboutHero(false);
    }
  };

  const showinput = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const showinputabout = () => {
    if (!showabout) {
      setShowabout(true);
    } else {
      setShowabout(false);
    }
  };
  const showinputservices = () => {
    if (!showservice) {
      setShowservices(true);
    } else {
      setShowservices(false);
    }
  };

  const [aboutHeading, setaboutHeading] = useState("");
  const [homeAbout, sethomeAbout] = useState("");
  const [homeAboutPera, sethomeAboutPera] = useState("");

  const [homeServices, setHomeService] = useState("");

  const [error, setError] = useState("");

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addabouttest", {
          idea,
          innovate,
          imp,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSubmitAboutHero = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addaboutHero", {
          aboutHeading,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addaboutvision", {
          vision_pera,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // ?/////////////////////////////////////
  // ?/////////////////////////////////////handleSubmitAbout/ ////////////////////////////////////////////
  const handleSubmitAbout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addaboutguiding", {
          guiding_pera,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
            window.refresh();
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    axios.get("https://codelinear.in/code/abouttest").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.idea);
      setAboutarray(response.data.innovate);
      setarray(response.data.imp);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get("https://codelinear.in/code/aboutguiding")
      .then((response) => {
        // setarray(response.data.homeHero);
        setguiding_peraGET(response.data.guiding_pera);
        console.log(response.data);
      });
  }, []);
  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutHero").then((response) => {
      // setarray(response.data.homeHero);
      setHeroAboutGET(response.data.aboutHeading);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://codelinear.in/code/aboutvision")
      .then((response) => {
        // setarray(response.data.homeHero);
        setvision_peraGET(response.data.vision_pera);

        console.log(response.data);
      });
  }, []);

  return (
    <div className="about-page-dash-panel">
      <div className="operation-container">
        <div className="search-container">
          <input type="text" placeholder="search" className="search" />
          <img src={Search} alt="" className="search-img" />
        </div>
        <div className="add-container">
          <img src={Add} alt="" className="add" />
        </div>
      </div>

      {showaboutHero ? (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputaboutHero}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>
              <div className="input">
                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={aboutHeading}
                    onChange={(e) => setaboutHeading(e.target.value)}
                    placeholder={heroaboutGET}
                  />
                </div>
                <div className="hh w-full flex justify-center items-center my-10">
                  <button
                    onClick={handleSubmitAboutHero}
                    className="w-[20%] h-9 bg-black text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </p>
            <br />
          </div>
        </>
      ) : (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputaboutHero}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>
              <h1 className="title-container">hero section</h1>
              <br />
              <h1 className="title-container">Title : </h1>

              {heroaboutGET}
            </p>
            <br />
          </div>
        </>
      )}

      {showabout ? (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputabout}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>
              <div className="input">
                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={guiding_pera}
                    onChange={(e) => setguiding_pera(e.target.value)}
                    placeholder={guiding_peraGET}
                  />
                </div>
                <div className="hh w-full flex justify-center items-center my-10">
                  <button
                    onClick={handleSubmitAbout}
                    className="w-[20%] h-9 bg-black text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* {array} */}
            </p>
            <br />
          </div>
        </>
      ) : (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputabout}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>
              <h1 className="title-container">guiding section</h1>
              <br />

              <h1 className="title-container">Title : </h1>

              {guiding_peraGET}
            </p>
            <br />
          </div>
        </>
      )}

      {show ? (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputservices}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>
              <div className="input">
                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={vision_pera}
                    onChange={(e) => setvision_pera(e.target.value)}
                    placeholder={vision_peraGET}
                  />
                </div>

                <div className="hh w-full flex justify-center items-center my-10">
                  <button
                    onClick={handleSubmit}
                    className="w-[20%] h-9 bg-black text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </p>
            <br />
          </div>
        </>
      ) : (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img onClick={showinput} src={edit} alt="" className="view" />
                <img src={close} alt="" className="view" />
              </div>
              <h1 className="title-container">vision section</h1>
              <br />
              <h1 className="title-container">Title : </h1>

              {vision_peraGET}
            </p>
            <br />
          </div>
        </>
      )}

      {showservice ? (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputservices}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>
              <div className="input">
                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={idea}
                    onChange={(e) => setidea(e.target.value)}
                    placeholder={Aboutarray}
                  />
                </div>

                <div className="w-full my-5 flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={innovate}
                    onChange={(e) => setinnovate(e.target.value)}
                    placeholder={array}
                  />
                </div>

                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={imp}
                    onChange={(e) => setimp(e.target.value)}
                    placeholder={Servicesarray}
                  />
                </div>

                <div className="hh w-full flex justify-center items-center my-10">
                  <button
                    onClick={handleSubmitServices}
                    className="w-[20%] h-9 bg-black text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </p>
            <br />
          </div>
        </>
      ) : (
        <>
          <div className="container-dash">
            <p className="para-container">
              <div className="images-container">
                <img src={view} alt="" className="view" />
                <img
                  onClick={showinputservices}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>

              <h1 className="title-container">ideal guidng section</h1>
              <br />
              <h1 className="title-container">Title : </h1>

              {Servicesarray}
              <br />
              <h1 className="title-container">Title : </h1>
              {Aboutarray}
              <br />
              <h1 className="title-container">Title : </h1>
              {array}
            </p>
            <br />
          </div>
        </>
      )}
    </div>
  );
};

export default AboutTest;

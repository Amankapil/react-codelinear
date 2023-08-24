import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AboutTest from "./AboutTest";
import Meet from "./Meet";
import Crewbox from "./Crew_box";
import Peak from "./peak";
import view from "../images/view.svg";
import edit from "../images/edit.svg";
import close from "../images/close.svg";
import Search from "../images/scg.svg";
import Add from "../images/add.svg";
import gsap from "gsap";
// import AboutTab from "./aboutTab/AboutTab";

const AboutTab = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);
  const [editModeAbout, setEditModeAbout] = useState(false);

  const [guiding_pera, setguiding_pera] = useState();

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [aboutHeading, setaboutHeading] = useState("");
  const [error, setError] = useState("");
  let dashbutton4 = useRef(null);
  let dashbutton5 = useRef(null);
  let panel4 = useRef(null);
  let panel5 = useRef(null);

  const handleSwitchClick4 = () => {
    gsap.to(dashbutton4, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton5, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel4, 0, { display: "block" });
    gsap.to(panel5, 0, { display: "none" });
  };
  const handleSwitchClick5 = () => {
    gsap.to(dashbutton4, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton5, 0, { backgroundColor: "#fff" });
    gsap.to(panel4, 0, { display: "none" });
    gsap.to(panel5, 0, { display: "block" });
  };
  const handleEditClickServices = () => {
    if (editModeServices === false) {
      seteditModeServices(true);
    } else {
      seteditModeServices(false);
    }
  };
  const handleUsernameChange = (event) => {
    setvision_pera(event.target.value);
  };
  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addaboutHero", {
          vision_pera,
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
  const handleEditClick = () => {
    if (editMode === false) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  };

  const handleEditClickAbout = () => {
    if (editModeAbout === false) {
      setEditModeAbout(true);
    } else {
      setEditModeAbout(false);
    }
  };
  const handleSubmit = async (event) => {
    setEditMode(false);
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
    axios.get("https://codelinear.in/code/aboutHero").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.aboutHeading);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutvision").then((response) => {
      setarray(response.data.vision_pera);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutguiding").then((response) => {
      setAboutarray(response.data.guiding_pera);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="main">
            <div
              className="about-page-dash"
              style={{
                background: "#EAEAEA",
              }}
            >
              <div
                className="about-page-dash-txt"
                ref={(el) => (dashbutton4 = el)}
                onClick={handleSwitchClick4}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                Page Intro
              </div>
              <div
                className="about-page-dash-txt"
                ref={(el) => (dashbutton5 = el)}
                onClick={handleSwitchClick5}
                style={{
                  backgroundColor: "#EEEEEE",
                }}
              >
                Clients
              </div>
            </div>
            <div className="about-page-dash-panel" ref={(el) => (panel4 = el)} style={{
              height:'68vh'
            }}>
              <div className="operation-container">
                <div className="search-container">
                  <input type="text" placeholder="search" className="search" />
                  <img src={Search} alt="" className="search-img" />
                </div>
                <div className="add-container">
                  <img src={Add} alt="" className="add" />
                </div>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
            </div>
            <div
              className="about-page-dash-panel"
              style={{
                display: "none",
              }}
              ref={(el) => (panel5 = el)}
            >
              <div className="operation-container">
                <div className="search-container">
                  <input type="text" placeholder="search" className="search" />
                  <img src={Search} alt="" className="search-img" />
                </div>
                <div className="add-container">
                  <img src={Add} alt="" className="add" />
                </div>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
            </div>
          </div>
  );
};

export default AboutTab;

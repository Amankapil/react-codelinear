import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
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

const Crewbox = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);
  const [editModeAbout, setEditModeAbout] = useState(false);

  const [guiding_pera, setguiding_pera] = useState();

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [crew, setcrew] = useState("");

  const [crew_pera, setcrew_pera] = useState("");
  const [Design, setDesign] = useState("");
  const [Strategists, setStrategists] = useState("");
  const [Tech_Experts, setTech_Experts] = useState("");
  const [Delivery_Managers, setDelivery_Managers] = useState("");

  const [error, setError] = useState("");

  const [showservice, setShowservices] = useState(false);

  const showinputservices = () => {
    if (!showservice) {
      setShowservices(true);
    } else {
      setShowservices(false);
    }
  };

  const handleEditClickServices = () => {
    if (editModeServices === false) {
      seteditModeServices(true);
    } else {
      seteditModeServices(false);
    }
  };

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addaboutcrew_box", {
          Design,
          Strategists,
          Tech_Experts,
          Delivery_Managers,
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
    axios
      .get("https://codelinear.in/code/aboutcrew_box")
      .then((response) => {
        setServicesarray(response.data.Design);
        setAboutarray(response.data.Strategists);
        setarray(response.data.Tech_Experts);
        setguiding_pera(response.data.Delivery_Managers);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="about-page-dash-panel">
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
                    value={Design}
                    onChange={(e) => setDesign(e.target.value)}
                    placeholder={Aboutarray}
                  />
                </div>

                <div className="w-full my-5 flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={Strategists}
                    onChange={(e) => setStrategists(e.target.value)}
                    placeholder={array}
                  />
                </div>

                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={Tech_Experts}
                    onChange={(e) => setTech_Experts(e.target.value)}
                    placeholder={Servicesarray}
                  />
                </div>
                <div className="w-full flex justify-center items-center">
                  <input
                    className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                    type="text"
                    value={Delivery_Managers}
                    onChange={(e) => setDelivery_Managers(e.target.value)}
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
                  onClick={showinputservices}
                  src={edit}
                  alt=""
                  className="view"
                />
                <img src={close} alt="" className="view" />
              </div>

              <h1 className="title-container">Meet section</h1>
              <br />
              <h1 className="title-container">Title : </h1>

              {Servicesarray}
              <br />
              <h1 className="title-container">Title : </h1>
              {Aboutarray}
              <br />
              <h1 className="title-container">Title : </h1>
              {array}
              <br />
              <h1 className="title-container">Title : </h1>
              {guiding_pera}
            </p>
            <br />
          </div>
        </>
      )}
    </div>
  );
};

export default Crewbox;

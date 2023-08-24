import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import view from "../images/view.svg";
import edit from "../images/edit.svg";
import close from "../images/close.svg";
import Search from "../images/scg.svg";
import Add from "../images/add.svg";
import gsap from "gsap";
const Boxes = () => {
  const [editModeAbout, setEditModeAbout] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);

  const [vision_pera, setvision_pera] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [guiding_pera, setguiding_pera] = useState();

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [grothHeading, setgrothHeading] = useState("");

  const [grothPera, setgrothPera] = useState("");
  const [flex, setflex] = useState("");
  const [flexPera, setflexPera] = useState("");
  const [value, setvalue] = useState("");
  const [valuePera, setvaluePera] = useState("");

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [showabout, setShowabout] = useState(false);
  const [showservice, setShowservices] = useState(false);

  const showinput = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
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
        .post("https://codelinear.in/code/addcareerwhyusBoxes", {
          grothHeading,
          grothPera,
          flex,
          flexPera,
          value,
          valuePera,
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
      .get("https://codelinear.in/code/careerBoxes")
      .then((response) => {
        setServicesarray(response.data.grothHeading);
        setAboutarray(response.data.grothPera);
        setarray(response.data.flex);
        setguiding_pera(response.data.flexPera);
        setvision_pera(response.data.value);
        setEditMode(response.data.valuePera);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="main">
      <div className="about-page-dash-panel bg-whit">
        {show ? (
          <>
            <div className="container-dash">
              <p className="para-container">
                <div className="images-container">
                  <img src={view} alt="" className="view" />
                  <img onClick={showinput} src={edit} alt="" className="view" />
                  <img src={close} alt="" className="view" />
                </div>
                <div className="input">
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={grothHeading}
                      onChange={(e) => setgrothHeading(e.target.value)}
                      placeholder={Servicesarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={grothPera}
                      onChange={(e) => setgrothPera(e.target.value)}
                      placeholder={Aboutarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={flex}
                      onChange={(e) => setflex(e.target.value)}
                      placeholder={array}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={flexPera}
                      onChange={(e) => setflexPera(e.target.value)}
                      placeholder={guiding_pera}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={value}
                      onChange={(e) => setvalue(e.target.value)}
                      placeholder={vision_pera}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={valuePera}
                      onChange={(e) => setvaluePera(e.target.value)}
                      placeholder={editMode}
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
                  <img onClick={showinput} src={edit} alt="" className="view" />
                  <img src={close} alt="" className="view" />
                </div>
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
                <br />
                <h1 className="title-container">Title : </h1>
                {vision_pera}
                <br />
                <h1 className="title-container">Title : </h1>
                {editMode}
                <br />
              </p>
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Boxes;

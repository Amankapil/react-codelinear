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

const WhyUS = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);

  const [guiding_pera, setguiding_pera] = useState("");

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [heading, setheading] = useState("");
  const [pera1, setpera1] = useState("");
  const [pera2, setpera2] = useState("");
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

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addcareerwhyus", {
          heading,
          pera1,
          pera2,
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
      .get("https://codelinear.in/code/careerwhyus")
      .then((response) => {
        setServicesarray(response.data.heading);
        setAboutarray(response.data.pera1);
        setarray(response.data.pera2);
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
                      value={heading}
                      onChange={(e) => setheading(e.target.value)}
                      placeholder={Servicesarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={pera1}
                      onChange={(e) => setpera1(e.target.value)}
                      placeholder={Aboutarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={pera2}
                      onChange={(e) => setpera2(e.target.value)}
                      placeholder={array}
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
              </p>
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WhyUS;

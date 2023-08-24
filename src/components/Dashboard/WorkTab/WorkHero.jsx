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

const WrokHero = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);

  const [guiding_pera, setguiding_pera] = useState("");

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [work_hero, setework_hero] = useState("");

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
        .post("https://codelinear.in/code/addwork", {
          work_hero,
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
    axios.get("https://codelinear.in/code/work").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.work_hero);

      console.log(response.data);
    });
  }, []);

  return (
    <div className="main">
      <div className="about-page-dash-panel bg-whit">
        <div className="operation-container">
          <div className="search-container">
            <input type="text" placeholder="search" className="search" />
            <img src={Search} alt="" className="search-img" />
          </div>
          <div className="add-container">
            <img src={Add} alt="" className="add" />
          </div>
        </div>

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
                      value={work_hero}
                      onChange={(e) => setework_hero(e.target.value)}
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
                  <img onClick={showinput} src={edit} alt="" className="view" />
                  <img src={close} alt="" className="view" />
                </div>
                <h1 className="title-container">Title : </h1>
                {Servicesarray}
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

export default WrokHero;

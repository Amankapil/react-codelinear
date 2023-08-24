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
const AbilityService = () => {
  const [editModeServices, seteditModeServices] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);

  const [guiding_pera, setguiding_pera] = useState("");

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [problem_solve, setproblem_solve] = useState("");
  const [problem_pera, setproblem_pera] = useState("");
  const [leader_pera, setleader_pera] = useState("");
  const [patrons, setpatrons] = useState("");
  const [patron_pera, sepatron_pera] = useState("");
  const [leader, setleader] = useState("");

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
        .post("https://codelinear.in/code/addserviceability", {
          problem_solve,
          problem_pera,
          leader,
          leader_pera,
          patrons,
          patron_pera,
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
      .get("https://codelinear.in/code/serviceability")
      .then((response) => {
        // setarray(response.data.homeHero);
        setServicesarray(response.data.problem_solve);
        setAboutarray(response.data.problem_pera);
        setarray(response.data.leader);
        setguiding_pera(response.data.patrons);
        setvision_pera(response.data.leader_pera);
        setEditMode(response.data.patron_pera);

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
                      value={problem_solve}
                      onChange={(e) => setproblem_solve(e.target.value)}
                      placeholder={Servicesarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={problem_pera}
                      onChange={(e) => setproblem_pera(e.target.value)}
                      placeholder={Aboutarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={leader}
                      onChange={(e) => setleader(e.target.value)}
                      placeholder={Aboutarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={leader_pera}
                      onChange={(e) => setleader_pera(e.target.value)}
                      placeholder={Aboutarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={patrons}
                      onChange={(e) => setpatrons(e.target.value)}
                      placeholder={Aboutarray}
                    />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                      type="text"
                      value={patron_pera}
                      onChange={(e) => sepatron_pera(e.target.value)}
                      placeholder={Aboutarray}
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

export default AbilityService;

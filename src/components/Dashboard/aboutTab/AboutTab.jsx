import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AboutTest from "./AboutTest";
import Meet from "./Meet";
import Crewbox from "./Crew_box";
import Peak from "./peak";
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
        .post("http://localhost:5000/code/addaboutHero", {
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
        .post("http://localhost:5000/code/addaboutvision", {
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
        .post("http://localhost:5000/code/addaboutguiding", {
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
    axios.get("http://localhost:5000/code/aboutHero").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.aboutHeading);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/code/aboutvision").then((response) => {
      setarray(response.data.vision_pera);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/code/aboutguiding").then((response) => {
      setAboutarray(response.data.guiding_pera);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="main">
      <h1 className="title">About Page</h1>
      <div className="section">
        <h2 className="sub-title">Hero Section</h2>
        <div className="section mt-10">
          <div className="section mt-0">
            {editModeServices ? (
              <>
                <div className="w-full flex justify-end">
                  <EditIcon
                    onClick={handleEditClickServices}
                    className="w-36 h-10 rounded-lg bg-black"
                  />
                </div>

                <div className="login-container">
                  <form onSubmit={handleSubmitServices}>
                    <h2>Title of pagas</h2>

                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={aboutHeading}
                      onChange={(e) => {
                        setaboutHeading(e.target.value);
                      }}
                    />

                    <br />
                    <br />
                    {error && <div className="error">{error}</div>}
                    <button className="bg-black" type="submit">
                      Post
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <>
                <div className="section mt-1">
                  <div className="w-full flex justify-end">
                    {/* <h1 className="text-black text-5xl">{Aboutarray}</h1> */}
                    <EditIcon
                      onClick={handleEditClickServices}
                      className="w-36 mx-2 h-10 rounded-lg bg-black"
                    />
                    <DeleteIcon
                      onClick={handleEditClickServices}
                      className="w-36 h-10 rounded-lg bg-black"
                    />
                  </div>

                  <div className="w-ful flex justify-between">
                    {/* <h2 className="sub-title">Home Hero</h2> */}
                    <h2 className="sub-title text-4xl">{Servicesarray}</h2>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <h1 className="title">vision pera</h1>

      <div className="section">
        {editMode ? (
          <>
            <div className="w-full flex justify-end">
              <EditIcon
                onClick={handleEditClick}
                className="w-36 h-10 rounded-lg bg-black"
              />
            </div>
            <div className="login-container">
              <form onSubmit={handleSubmit}>
                <h2>Title of pagas</h2>

                <input
                  className="text-black w-full bg-back border-2 border-red-400"
                  placeholder={array}
                  type="text w-[70%]"
                  value={vision_pera}
                  onChange={handleUsernameChange}
                />

                <br />

                <br />
                {error && <div className="error">{error}</div>}
                <button className="bg-black" type="submit">
                  Post
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="section mt-1">
              <h1 className="text-black text-5xl">{array}</h1>
              <div className="w-full flex justify-end">
                <EditIcon
                  onClick={handleEditClick}
                  className="w-36 mx-2 h-10 rounded-lg bg-black"
                />
                <DeleteIcon
                  onClick={handleEditClick}
                  className="w-36 h-10 rounded-lg bg-black"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="section">
        <h2 className="sub-title">guiding Section</h2>
        <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
        <div className="section mt-10">
          <div className="section mt-0">
            {editModeAbout ? (
              <>
                <div className="w-full flex justify-end">
                  <EditIcon
                    onClick={handleEditClickAbout}
                    className="w-36 h-10 rounded-lg bg-black"
                  />
                </div>

                <div className="login-container">
                  <form onSubmit={handleSubmitAbout}>
                    <h2>Title of pagas</h2>

                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Aboutarray}
                      type="text w-[70%]"
                      value={guiding_pera}
                      onChange={(e) => {
                        setguiding_pera(e.target.value);
                      }}
                    />

                    <br />
                    <br />
                    {error && <div className="error">{error}</div>}
                    <button className="bg-black" type="submit">
                      Post
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <>
                <div className="section mt-1">
                  <div className="w-full flex justify-end">
                    {/* <h1 className="text-black text-5xl">{Aboutarray}</h1> */}
                    <EditIcon
                      onClick={handleEditClickAbout}
                      className="w-36 mx-2 h-10 rounded-lg bg-black"
                    />
                    <DeleteIcon
                      onClick={handleEditClick}
                      className="w-36 h-10 rounded-lg bg-black"
                    />
                  </div>

                  <div className="w-ful flex justify-between">
                    {/* <h2 className="sub-title">Home Hero</h2> */}
                    <h2 className="sub-title text-4xl">{Aboutarray}</h2>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="sub-title">Testimonial Section</h2>
        <AboutTest />
      </div>
      <div className="section">
        <h2 className="sub-title">Meet Section</h2>
        <Meet />
      </div>
      <div className="section">
        <h2 className="sub-title">Crew boxes</h2>
        <Crewbox />
      </div>
      <div className="section">
        <h2 className="sub-title">Case study</h2>
        <Peak />
      </div>
    </div>
  );
};

export default AboutTab;

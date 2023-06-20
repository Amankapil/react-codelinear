import profile from "./images/logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AboutTab from "./aboutTab/AboutTab";
import Servicedo from "./ServiceTab/Servicedo";
import AbilityService from "./ServiceTab/AbilityService";
import WrokHero from "./WorkTab/WorkHero";
import ContactHero from "./ContactTab/ContactHero";
import CareerHero from "./CareerTab/CareerHero";
import WhyUS from "./CareerTab/WhyUs";
import Boxes from "./CareerTab/Boxes";
import Cunsulting from "./innerpagess/Consulting";
import UserExper from "./innerpagess/UserExper";
import Productdev from "./innerpagess/Productdev";
import DigitalMarketing from "./innerpagess/DigitalMarketing";

import Mascot from "./images/Screenshot 2023-04-09 144546 1.svg";
import Dashimg from "./images/dash.svg";
import Home from "./images/home.svg";
import About from "./images/about.svg";
import Blog from "./images/blog.svg";
import Setting from "./images/settings.svg";
import Contact from "./images/contact.svg";
import Case from "./images/case.svg";
import view from "./images/view.svg";
import edit from "./images/edit.svg";
import close from "./images/close.svg";
import Search from "./images/scg.svg";
import Add from "./images/add.svg";
import gsap from "gsap";
import AboutTest from "./aboutTab/AboutTest";
import Crewbox from "./aboutTab/Crew_box";
import Life from "./CareerTab/Life";
import HomeAbout from "../Home/homeAbout";
import HeroAbout from "./aboutTab/HeroAbout";
import Job from "./application/Job";
import ChartrComponent, { Chartr } from "./application/Chart";

export default function Dash() {
  // const navigate = useNavigate("/home");
  const [editMode, setEditMode] = useState(false);

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

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

  let panel1 = useRef(null);
  let panel2 = useRef(null);
  let panel3 = useRef(null);
  let panel4 = useRef(null);
  let panel5 = useRef(null);
  let dashbutton1 = useRef(null);
  let dashbutton2 = useRef(null);
  let dashbutton3 = useRef(null);
  let dashbutton4 = useRef(null);
  let dashbutton5 = useRef(null);

  const handleSwitchClick1 = () => {
    gsap.to(dashbutton1, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton2, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton3, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel1, 0, { display: "block" });
    gsap.to(panel2, 0, { display: "none" });
    gsap.to(panel3, 0, { display: "none" });
  };
  const handleSwitchClick2 = () => {
    gsap.to(dashbutton1, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton2, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton3, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel1, 0, { display: "none" });
    gsap.to(panel2, 0, { display: "block" });
    gsap.to(panel3, 0, { display: "none" });
  };
  const handleSwitchClick3 = () => {
    gsap.to(dashbutton1, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton2, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton3, 0, { backgroundColor: "#fff" });
    gsap.to(panel1, 0, { display: "none" });
    gsap.to(panel2, 0, { display: "none" });
    gsap.to(panel3, 0, { display: "block" });
  };
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

  const handleLogouttt = async () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  const [homeHero, sethomeHero] = useState("");
  const [homeAbout, setAboutHero] = useState("");

  const [homeServices, setHomeService] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate("/home");

  const handleSubmit = async (event) => {
    setEditMode(false);
    event.preventDefault();
    try {
      const response = await axios
        .post("http://194.163.40.249:5000/code/add", {
          homeHero,
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
  // ?/////////////////////////////////////handleSubmitAbout/ ////////////////////////////////////////////
  const handleSubmitAbout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://194.163.40.249:5000/code/addAbout", {
          homeAbout,
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

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://194.163.40.249:5000/code/addServices", {
          homeServices,
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

  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code").then((response) => {
      setarray(response.data.homeHero);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://194.163.40.249:5000/code/homeAbout").then((response) => {
      // setarray(response.data.homeHero);
      setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/homeServices")
      .then((response) => {
        setServicesarray(response.data.homeServices);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <nav className="dashboard-nav">
        <div className="dashboard-item">
          <img src={Mascot} alt="" className="dash-mascot" />
          Codelinear
        </div>
        <div className="logout " onClick={handleLogouttt}>
          <h1 className="logout-txt">Logout</h1>
          <img src={profile} alt="" className="profile" />
        </div>
      </nav>
      <Tabs>
        <TabList className="dashboard-left-nav">
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Dashimg} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> DashBoard</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Home} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> About Us</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={About} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Clients</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Setting} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Services</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Case} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Career</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Blog} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Blogs</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Contact} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1">Contact Us</h1>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="main" style={{ height: "100vh" }}>
            {/* <Job /> */}
            <ChartrComponent />
          </div>
        </TabPanel>

        <TabPanel>
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
                Home Page
              </div>
              <div
                className="about-page-dash-txt"
                ref={(el) => (dashbutton5 = el)}
                onClick={handleSwitchClick5}
                style={{
                  backgroundColor: "#EEEEEE",
                }}
              >
                About Us
              </div>
            </div>

            <div className="about-page-dash-panel" ref={(el) => (panel4 = el)}>
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
                        <img
                          onClick={showinput}
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
                            value={homeHero}
                            onChange={(e) => sethomeHero(e.target.value)}
                            placeholder={array}
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
                          onClick={showinput}
                          src={edit}
                          alt=""
                          className="view"
                        />
                        <img src={close} alt="" className="view" />
                      </div>
                      <h1 className="title-container">Title : </h1>

                      {array}
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
                            value={homeAbout}
                            onChange={(e) => setAboutHero(e.target.value)}
                            placeholder={Aboutarray}
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
                      <h1 className="title-container">Title : </h1>

                      {Aboutarray}
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
                            value={homeServices}
                            onChange={(e) => setHomeService(e.target.value)}
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
                      <h1 className="title-container">Title : </h1>

                      {Servicesarray}
                    </p>
                    <br />
                  </div>
                </>
              )}
            </div>

            {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
            <div
              className="about-page-dash-panel"
              style={{
                display: "none",
              }}
              ref={(el) => (panel5 = el)}
            >
              {/* <AboutTab/> */}
              {/* <HeroAbout /> */}
              <AboutTest />
              <Crewbox />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <AboutTab />
        </TabPanel>

        <TabPanel>
          <div className="main">
            <Servicedo />
            <AbilityService />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <CareerHero />
            <WhyUS />
            <Boxes />
            <Life />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <WrokHero />
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="main"
            style={{
              height: "92vh",
            }}
          >
            <div
              className="about-page-dash"
              style={{
                background: "#EAEAEA",
              }}
            >
              <h1
                className="about-page-dash-txt"
                ref={(el) => (dashbutton1 = el)}
                onClick={handleSwitchClick1}
                style={{
                  backgroundColor: "#EEEEEE",
                }}
              >
                Page Intro
              </h1>
              <h1
                className="about-page-dash-txt"
                ref={(el) => (dashbutton2 = el)}
                onClick={handleSwitchClick2}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                Contact Details
              </h1>
              <h1
                className="about-page-dash-txt"
                ref={(el) => (dashbutton3 = el)}
                onClick={handleSwitchClick3}
                style={{
                  backgroundColor: "#EEEEEE",
                }}
              >
                Enquiry Form
              </h1>
            </div>
            <div
              className="about-page-dash-panel"
              style={{
                display: "none",
              }}
              ref={(el) => (panel1 = el)}
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
            </div>
            <div
              className="about-page-dash-panel"
              style={{
                marginTop: "15vh",
              }}
              ref={(el) => (panel2 = el)}
            >
              <div className="container-address">
                <p className="para-container">
                  <h1 className="title-container">Address : </h1>
                  #671, 26th Main, 17th Cross, 6th Phase,J P Nagar, Bangalore{" "}
                </p>
                <img src={edit} alt="" className="view" />
              </div>
              <div className="container-address">
                <p className="para-container">
                  <h1 className="title-container">Mail Id : </h1>
                  info@codelinear.com{" "}
                </p>
                <img src={edit} alt="" className="view" />
              </div>
              <div className="container-address">
                <p className="para-container">
                  <h1 className="title-container">Phone No. : </h1>
                  +1 415 523 5957{" "}
                </p>
                <img src={edit} alt="" className="view" />
              </div>
            </div>
            <div
              className="about-page-dash-panel"
              style={{
                display: "none",
                marginTop: "15vh",
              }}
              ref={(el) => (panel3 = el)}
            ></div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

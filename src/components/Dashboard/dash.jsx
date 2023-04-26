import profile from "./images/logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
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
import Image from "./WorkTab/Image";
import Mango from "./Allimages/Mango";

export default function Dash() {
  const [editMode, setEditMode] = useState(false);
  const [editModeAbout, setEditModeAbout] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);
  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();
  const navigate = useNavigate("");

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
  const handleEditClickServices = () => {
    if (editModeServices === false) {
      seteditModeServices(true);
    } else {
      seteditModeServices(false);
    }
  };
  const handleLogouttt = async () => {
    localStorage.removeItem("username");
    // navigate("/admin");
    window.location.reload();
  };

  const [homeHero, sethomeHero] = useState("");
  const [homeAbout, setAboutHero] = useState("");
  const [homeAboutPera, sethomeAboutPera] = useState("");
  // const [homeAbout, setAboutHero] = useState("");
  const [homeContent, setContentHero] = useState("");
  const [homeClient, sethomeClient] = useState("");
  const [homeBlog, sethomeBlog] = useState("");
  const [homeServices, setHomeService] = useState("");

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    sethomeHero(event.target.value);
  };
  const handleaboutChange = (event) => {
    setAboutHero(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    setEditMode(false);
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/add", {
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
        .post("http://localhost:5000/code/addAbout", {
          homeAbout,
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

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/addServices", {
          homeServices,
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
    axios.get("http://localhost:5000/code").then((response) => {
      setarray(response.data.homeHero);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/code/homeAbout").then((response) => {
      // setarray(response.data.homeHero);
      setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/code/homeServices").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.homeServices);
      console.log(response.data);
    });
  }, []);

  // const smallParas = array.split(". ");

  return (
    <>
      <nav className="dashboard-nav">
        <div className="dashboard-item">Codelinear</div>

        <img
          src={profile}
          alt=""
          className="profile"
          onClick={handleLogouttt}
        />
      </nav>
      <Tabs>
        <TabList className="dashboard-left-nav">
          <Tab className="dashboard-left-item">Home</Tab>
          <Tab className="dashboard-left-item">About</Tab>
          <Tab className="dashboard-left-item">Services</Tab>
          <Tab className="dashboard-left-item">Career</Tab>
          <Tab className="dashboard-left-item">Work</Tab>
          <Tab className="dashboard-left-item">Contact</Tab>

          <Tab className="dashboard-left-item">Blog</Tab>
          <Tab className="dashboard-left-item">service inner</Tab>
          <Tab className="dashboard-left-item">images Container</Tab>
        </TabList>

        <TabPanel>
          <div className="main">
            <h1 className="title">Home Page</h1>
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
                        value={homeHero}
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
            <h1 className="title">About Section</h1>
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
                          value={homeAbout}
                          onChange={handleaboutChange}
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
            <h1 className="title">Service Section </h1>

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
                          value={homeServices}
                          onChange={(e) => {
                            setHomeService(e.target.value);
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
                          onClick={handleEditClick}
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

            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">
                Testimonial1 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial2 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial3 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial4 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial5 Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <AboutTab />
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Services Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">We Do It All</h2>
              <Servicedo />
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <AbilityService />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Career Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <CareerHero />
            </div>
            <div className="section">
              <h2 className="sub-title">Why Us Section</h2>
              <WhyUS />
            </div>
            <div className="section">
              <h2 className="sub-title">Boxes Section</h2>
              <Boxes />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Work Page</h1>
            <div className="section">
              <WrokHero />
              <Image />
            </div>
            <div className="section">
              <h2 className="sub-title">About Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Contact Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <ContactHero />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Blog Page</h1>
            <h1 className="title">Blog Inner Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Date</h3>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <h3 className="change-h1">Cheese</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">Content Section</h2>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                saepe sequi dolore voluptates ad quo aperiam et totam nesciunt
                itaque iusto ipsam temporibus impedit culpa, eaque ducimus
                officia quas qui perferendis minus illo! Deleniti, deserunt
                quisquam quibusdam iure, dolorum nam earum illo ex reprehenderit
                fuga voluptates recusandae veniam aspernatur id eum? Aut
                excepturi accusantium amet rerum ea consectetur ex distinctio,
                non dignissimos tenetur dolorem odit nobis laudantium ut in.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                saepe sequi dolore voluptates ad quo aperiam et totam nesciunt
                itaque iusto ipsam temporibus impedit culpa, eaque ducimus
                officia quas qui perferendis minus illo! Deleniti, deserunt
                quisquam quibusdam iure, dolorum nam earum illo ex reprehenderit
                fuga voluptates recusandae veniam aspernatur id eum? Aut
                excepturi accusantium amet rerum ea consectetur ex distinctio,
                non dignissimos tenetur dolorem odit nobis laudantium ut in.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                saepe sequi dolore voluptates ad quo aperiam et totam nesciunt
                itaque iusto ipsam temporibus impedit culpa, eaque ducimus
                officia quas qui perferendis minus illo! Deleniti, deserunt
                quisquam quibusdam iure, dolorum nam earum illo ex reprehenderit
                fuga voluptates recusandae veniam aspernatur id eum? Aut
                excepturi accusantium amet rerum ea consectetur ex distinctio,
                non dignissimos tenetur dolorem odit nobis laudantium ut in.
              </h3>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Service Inner Page</h1>

            <div className="section">
              <Cunsulting />
            </div>

            <div className="section">
              <UserExper />
            </div>
            <div className="section">
              <Productdev />
            </div>
            <div className="section">
              <DigitalMarketing />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <div className="flex">
              <div>
                <h1>homeHero</h1>
                <Image />
              </div>
              <div>
                <h1>Mango</h1>
                <Mango />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

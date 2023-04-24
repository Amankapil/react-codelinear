import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Boxes = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);
  const [editModeAbout, setEditModeAbout] = useState(false);

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
        .post("http://localhost:5000/code/addcareerwhyusBoxes", {
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
    axios.get("http://localhost:5000/code/careerBoxes").then((response) => {
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
                    {/* ?/                 kjlkjb                 ;;;;;;;;;;;;;;;;;;;;;;;;;; */}
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={grothHeading}
                      onChange={(e) => {
                        setgrothHeading(e.target.value);
                      }}
                    />

                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={grothPera}
                      onChange={(e) => {
                        setgrothPera(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={flex}
                      onChange={(e) => {
                        setflex(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={flexPera}
                      onChange={(e) => {
                        setflexPera(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={value}
                      type="text w-[70%]"
                      value={value}
                      onChange={(e) => {
                        setvalue(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={valuePera}
                      onChange={(e) => {
                        setvaluePera(e.target.value);
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

                  <div className="w-ful flex flex-col justify-between ">
                    {/* <h2 className="sub-title">Home Hero</h2> */}
                    <h2 className="sub-title text-4xl">{Servicesarray}</h2>

                    <h2 className="sub-title text-4xl">{Aboutarray}</h2>

                    <h2 className="sub-title text-4xl">{array}</h2>

                    <h2 className="sub-title text-4xl">{guiding_pera}</h2>
                    <h2 className="sub-title text-4xl">{vision_pera}</h2>
                    <h2 className="sub-title text-4xl">{editMode}</h2>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <h1 className="title">vision pera</h1> */}
    </div>
  );
};

export default Boxes;

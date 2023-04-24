import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Life = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);

  const [guiding_pera, setguiding_pera] = useState("");

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [lifeHeading, setlifeHeading] = useState("");
  const [lifePera, setlifePera] = useState("");
  const [pera2, setpera2] = useState("");
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
        .post("http://localhost:5000/code/addcareerlifeat", {
          lifeHeading,
          lifePera,
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
    axios.get("http://localhost:5000/code/careerlifeat").then((response) => {
      setServicesarray(response.data.heading);
      setAboutarray(response.data.pera1);
          console.log(response.data);
    });
  }, []);

  return (
    <div className="main">
      <div className="section">
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
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={lifeHeading}
                      onChange={(e) => {
                        setlifeHeading(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={lifePera}
                      onChange={(e) => {
                        setlifePera(e.target.value);
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
                    <h2 className="sub-title text-4xl">{Servicesarray}</h2>
                    <h2 className="sub-title text-4xl">{Servicesarray}</h2>
                    <h2 className="sub-title text-4xl">{Servicesarray}</h2>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;

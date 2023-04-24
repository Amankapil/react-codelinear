import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AbilityService = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);

  const [guiding_pera, setguiding_pera] = useState('');

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
        .post("http://localhost:5000/code/addserviceability", {
          problem_solve,
          problem_pera,
          leader_pera,
          patrons,
          patron_pera,
          leader,
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
    axios.get("http://localhost:5000/code/serviceability").then((response) => {
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
      <h1 className="title">service Page</h1>
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
                      value={problem_solve}
                      onChange={(e) => {
                        setproblem_solve(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={problem_pera}
                      onChange={(e) => {
                        setproblem_pera(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={leader_pera}
                      onChange={(e) => {
                        setleader_pera(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={patrons}
                      onChange={(e) => {
                        setpatrons(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={patron_pera}
                      onChange={(e) => {
                        sepatron_pera(e.target.value);
                      }}
                    />
                    <input
                      className="text-black w-full bg-back border-2 border-red-400"
                      placeholder={Servicesarray}
                      type="text w-[70%]"
                      value={leader}
                      onChange={(e) => {
                        setleader(e.target.value);
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
                    <h2 className="sub-title text-4xl">{editMode}</h2>
                    <h2 className="sub-title text-4xl">{vision_pera}</h2>
                    <h2 className="sub-title text-4xl">{array}</h2>
                    <h2 className="sub-title text-4xl">{guiding_pera}</h2>
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

export default AbilityService;

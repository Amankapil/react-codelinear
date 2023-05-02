import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// Hostinger / Hosting	syedsaif018@gmail.com 	Codelinear@CLSS123

export default function Crew({ isDarkMode }) {
  // const [array, setarray] = useState();
  // const [content, setContent] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:5000/code/").then((response) => {
  //     setarray(response.data.title);
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <>
      <div className=" produc crewclass">
        <h2 className="text-7xl max-xl:text-5xl max-xl:p-5 leading-sng font-extrabold ml max-md:p-0 max-md:ml-5 max-md:text-4xl">
          Meet The Crew : A Clique <br /> Of Visionaries
          {/* {array} */}
        </h2>
        <p className="my-10 text-base w-2/5 max-lg:w-full max-xl:p-5 max-md:p-6 crewpara max-md:my-0">
          A cohort of highly diverse and driven individuals working in
          collaboration to amplify your digital experience. We are visionaries
          who uplift one another, thrive on inclusion, and are determined to
          collectively make a difference for our clients and the world around
          them.
        </p>
        <Link to={"/career"} className="career-crew-btn">
          <p
            style={{ color: isDarkMode ? "#000000" : "#848484" }}
            className="career-crew-content"
          >
            career
          </p>
        </Link>
      </div>
      <div className="crewcontainer">
        <div className="crew-model">
          <div className="crew-model-container">
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">01</p>
                <span className="strategist">Design Architects</span>
              </h1>
              <p className="m-desc">
                The Design Architects orchestrate the project development
                process. From capturing customer expectations to managing the
                budget - they do it all.
              </p>
            </div>
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">02</p>
                <span className="strategist">Strategists</span>
              </h1>
              <p className="m-desc">
                They are the geniuses responsible for formulating, documenting,
                and implementing strategies that operate behind the scene to
                drive results.
              </p>
            </div>
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">03</p>
                <span className="strategist">Tech Experts</span>
              </h1>
              <p className="m-desc">
                Our Tech Experts devise the perfect strategy, prepare a detailed
                roadmap, and leverage the right technology to help you achieve
                your goals.
              </p>
            </div>
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">04</p>
                <span className="strategist">Delivery Managers</span>
              </h1>
              <p className="m-desc">
                Your point-of-contact with Codelinear, who keeps you apprised on
                all the ins and outs of your project and its status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

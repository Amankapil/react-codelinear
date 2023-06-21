import image6 from "./images/Vector.svg";
import image7 from "./images/Vector-1.svg";
import image8 from "./images/Vector-2.svg";
import image9 from "./images/Vector-3.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Whyus({ isDarkMode, toggleDarkMode }) {
  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();
  const [vision_pera, setvision_pera] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [guiding_pera, setguiding_pera] = useState();

  const [grothPera, setgrothPera] = useState("");
  const [flex, setflex] = useState("");
  const [flexPera, setflexPera] = useState("");

  const [lifeHeading, setlifeHeading] = useState("");
  const [lifePera, setlifePera] = useState("");
  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/careerwhyus")
      .then((response) => {
        setServicesarray(response.data.heading);
        setAboutarray(response.data.pera1);
        setarray(response.data.pera2);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/careerBoxes")
      .then((response) => {
        setgrothPera(response.data.grothHeading);
        setflex(response.data.grothPera);
        setflexPera(response.data.flex);
        setguiding_pera(response.data.flexPera);
        setvision_pera(response.data.value);
        setEditMode(response.data.valuePera);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://194.163.40.249:5000/code/careerlifeat")
      .then((response) => {
        setlifeHeading(response.data.lifeHeading);
        setlifePera(response.data.lifePera);
        console.log(response.data);
      });
  }, []);
  return (
    <section className="whyus">
      <div className="why-us-container">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="whyus-h1"
        >
          Why Us?
          {/* {Servicesarray} */}
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="whyus-para"
        >
          We are a diverse blend of experts, young professionals, and even
          mentees. And though we may come from diverse backgrounds, our drive to
          make a difference in society unites us.
          {/* {Aboutarray} */}

          <p
            className="mt-5"
            style={{
              color: "#848484",
            }}
          >
            Our cohort comprises designers, developers, strategists, and
            marketers, and collectively we blend each of our expertise to
            innovate, to impact.
            <br />
            If this sounds like you, we have a role for you!
            {/* {array} */}
          </p>
        </p>
      </div>
      <div className="main-container">
        <div className="whyus-container">
          <div className="whyus-content-container">
            <span className="no">
              COLLECTIVE GROWTH
              {/* {grothPera} */}
            </span>
            <p className="wucontainer-para">
              We ensure the collective growth and upliftment of our crew. We
              organise several workshops, provide access to numerous skill
              development courses, and foster an environment of mentorship
              within the firm.
              {/* {flex} */}
            </p>
          </div>
          <img src={image6} alt="" className="card-imgs" loading="lazy" />
        </div>
        <div className="whyus-container">
          <div className="whyus-content-container">
            <span className="no">{flexPera}</span>
            <p className="wucontainer-para">
              We strive to provide our team with the most flexible and
              autonomous work arrangement, enabling them to drive maximum
              productivity whilst maintaining work-life balance.{" "}
              {/* {guiding_pera} */}
            </p>
          </div>
          <img src={image8} alt="" className="card-imgs" loading="lazy" />
        </div>
        <div className="whyus-container">
          <div className="whyus-content-container">
            <span className="no">
            
            {vision_pera}
            
            </span>
            <p className="wucontainer-para">
              As a part of Codelinear, you will get the opportunity to hone your
              skills as well as disposition by working on a diverse range of
              projects that actually create a tangible impact for clients and
              society.
              {/* {editMode} */}
            </p>
          </div>
          <img src={image7} alt="" className="card-imgs" loading="lazy" />
        </div>
      </div>
      <div className="life-container max-xl:my-10">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="life-h1"
        >
          Life At Codelinear
          {/* {lifeHeading} */}
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="life-para"
        >
          We believe in actions over statements. When we say we are diverse, we
          are inclusive and we are here to give back to the community, we mean
          it! We have painstakingly built an environment of "Community" within
          us, in which we uplift and empower one another, and we take immense
          pride in it.
          {/* {lifePera} */}
        </p>
      </div>
    </section>
  );
}

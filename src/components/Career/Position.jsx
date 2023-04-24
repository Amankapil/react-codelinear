import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

function Position() {
  let positioncard = useRef(null);
  let applyingform = useRef(null);
  let jobdesc = useRef(null);
  let positioncard1 = useRef(null);
  let applyingform1 = useRef(null);
  let jobdesc1 = useRef(null);
  let positioncard2 = useRef(null);
  let applyingform2 = useRef(null);
  let jobdesc2 = useRef(null);
  let positioncard3 = useRef(null);
  let applyingform3 = useRef(null);
  let jobdesc3 = useRef(null);
  let positioncard4 = useRef(null);
  let applyingform4 = useRef(null);
  let jobdesc4 = useRef(null);
  let position = useRef(null);

  const [fristName, SetfristName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [message, Setmessage] = useState("");

  const handleSubmit = async (e) => {
    const data = { fristName, lastName, email, message };
    console.log(data);
    const response = await axios
      .post(
        "https://backend-production-f9ef.up.railway.app/send_mail_career",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Your Application was sent successfully");
          window.refresh();
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const application = () => {
    gsap.to(positioncard, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide = () => {
    gsap.to(positioncard, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow = () => {
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "block" } });
  };
  const application1 = () => {
    gsap.to(positioncard1, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc1, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide1 = () => {
    gsap.to(positioncard1, 0.1, { css: { display: "none" } });
    gsap.to(applyingform1, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc1, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow1 = () => {
    gsap.to(jobdesc1, 0.1, { css: { display: "none" } });
    gsap.to(applyingform1, 0.1, { css: { display: "block" } });
  };
  const application2 = () => {
    gsap.to(positioncard2, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc2, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide2 = () => {
    gsap.to(positioncard2, 0.1, { css: { display: "none" } });
    gsap.to(applyingform2, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc2, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow2 = () => {
    gsap.to(jobdesc2, 0.1, { css: { display: "none" } });
    gsap.to(applyingform2, 0.1, { css: { display: "block" } });
  };
  const application3 = () => {
    gsap.to(positioncard3, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc3, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide3 = () => {
    gsap.to(positioncard3, 0.1, { css: { display: "none" } });
    gsap.to(applyingform3, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc3, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow3 = () => {
    gsap.to(jobdesc3, 0.1, { css: { display: "none" } });
    gsap.to(applyingform3, 0.1, { css: { display: "block" } });
  };
  const application4 = () => {
    gsap.to(positioncard4, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc4, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide4 = () => {
    gsap.to(positioncard4, 0.1, { css: { display: "none" } });
    gsap.to(applyingform4, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc4, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow4 = () => {
    gsap.to(jobdesc4, 0.1, { css: { display: "none" } });
    gsap.to(applyingform4, 0.1, { css: { display: "block" } });
  };

  return (
    <>
      <section className="position-container">
        <div className="position-content-container">
          <h1 className="position-h1">Open Positions</h1>
          <div className="open-pos" ref={(el) => (position = el)}>
            <div className="positions" onClick={application}>
              <h1 className="position-content-h1">Product Designer (UX/UI)</h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application1}>
              <h1 className="position-content-h1">
                Software Development Engineer - Mobile Frontend
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application2}>
              <h1 className="position-content-h1">
                Software Development Engineer - Web Frontend
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application3}>
              <h1 className="position-content-h1">
                Software Development Engineer - Backend
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application4}>
              <h1 className="position-content-h1">
                Software Development Engineer - CMS/E-Commerce
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
          </div>
        </div>
      </section>
      <div className="PD" ref={(el) => (positioncard = el)}>
        <h1 className="job-pd-title">
          Product Designer (UI/UX)
          <div className="jobline" onClick={formhide}>
            <div className="close-line"></div>
          </div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As an experienced UI/ UX
            designer, you will contribute by having a working knowledge of tools
            such as Figma and work as a part of a cross-functional team by
            collaborating with our Creative Director to design products that
            uplift brand values.
          </p>
          <div className="job-req">
            Figma | Wireframes <span className="and"> &</span> User Flows |
            Prototypes UX Research | Personas | Design System
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow}>
            <p className="about_btn_content">apply now</p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard1 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - Mobile Frontend{" "}
          <div className="jobline" onClick={formhide1}>
            <div className="close-line"></div>
          </div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc1 = el)}>
          <p className="job-pd-desc job-loc">
            AAt Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a mobile front-end
            developer, you will work with our front-end experts to build
            high-definition and responsive mobile applications that seamlessly
            interact with users. You will utilise your knowledge of various
            programming languages to build intuitive applications.
          </p>
          <div className="job-req">
            Android Java | Kotlin | Objective-C | Swift | React Native | Flutter
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow1}>
            <p className="about_btn_content">apply now</p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform1 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard2 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - Web Frontend{" "}
          <div className="jobline" onClick={formhide2}>
            <div className="close-line"></div>
          </div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc2 = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a web frontend
            developer, you will collaborate with designers to build
            detail-oriented, and responsive user interfaces. You will design the
            site's layouts and build consistent web platforms that flawlessly
            interact with users, and are highly navigable.
          </p>
          <div className="job-req">
            HTML5 | CSS3 | jQuery | JavaScript | BootStrap | React.js Veu.js |
            Angular
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow2}>
            <p className="about_btn_content">apply now</p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform2 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard3 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - Backend{" "}
          <div className="jobline" onClick={formhide3}>
            <div className="close-line"></div>
          </div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc3 = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a backend developer, you
            will oversee the server side of the projects, including databases,
            architectures and APIs, and write algorithms to build scalable
            applications. You will ensure that the applications perform in
            congruity with the front-end aspects of the products.
          </p>
          <div className="job-req">
            Php | Node.js | Python | Java | Ruby On Rails | Golang
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow3}>
            <p className="about_btn_content">apply now</p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform3 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard4 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - CMS/E-Commerce
          <div className="jobline" onClick={formhide4}>
            <div className="close-line"></div>
          </div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc4 = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a CMS developer, you
            will be a part of a cross-functional team and build high-quality
            websites and e-commerce platforms. You will closely work with
            clients to address their concerns and design websites that resolve
            those.
          </p>
          <div className="job-req">
            WordPress | Shopify | Magento | HubSpot | WooCommerce BigCommerce |
            Drupal | Joomla | Wix | Squarespace Commerce
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow4}>
            <p className="about_btn_content">apply now</p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform4 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Position;

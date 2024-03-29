import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Parent = ({ isDarkMode, toggleDarkMode }) => {
  const url = useLocation();

  const child1Ref = useRef(null);
  const child2Ref = useRef(null);

  const handleChild1Scroll = () => {
    if (child1Ref.current && child2Ref.current) {
      child2Ref.current.scrollLeft = child1Ref.current.scrollTop;
    }
  };
  const handleChild2Scroll = (e) => {
    if (child1Ref.current && child2Ref.current) {
      child1Ref.current.scrollLeft = child2Ref.current.scrollTop;
    }
  };

  if (url.pathname === "/consultingandstrategy") {
    return (
      <div className="ml-0" style={{ display: "flex", height: "400px" }}>
        <div
          style={{
            width: "100%",
            overflowY: "scroll",
            height: "400px",
            position: "absolute",
          }}
          className="snapwala"
          ref={child1Ref}
          onScroll={handleChild1Scroll}
        >
          <div className="snapwala" style={{ height: "1500px" }}>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Market Research
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                As technology is propelling the world into a new realm of
                disruptions, our strategic market research enables you to
                identify the viability of the product by directly taking
                insights from targeted consumers and market trends, enabling you
                to make decisions driven by consumer behaviour and data.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Stakeholder Workshops
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                In order to create a sense of shared purpose and build momentum,
                we take a step ahead and organise stakeholder workshops to gain
                an edge over current scenarios and strategically develop an
                action plan.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Product Strategy and Roadmapping
              </h1>

              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                We align your product vision with strategy to differentiate you
                in a market and drive your business goals.We envision the future
                state of the product and develop a conscious roadmap to
                transform theoretical conjectures into working models.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Technology Consulting and Platform Planning
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Technology is becoming ubiquitous, and so is its impact. We
                assess your entire tech infrastructure, identify gaps, mitigate
                associated threats, and devise strategies that enable you to
                adapt and lead the digital transformation.
              </p>
            </div>

            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                GTM Strategy{" "}
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Our Go-To-Market Strategy entails extensive research into the
                market condition. We devise comprehensive launch and marketing
                strategies for you to position yourself in the market by
                mitigating the risks and capitalising on data-driven insights.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", overflowX: "auto", height: "100%" }}
          className="horizontal-section"
          ref={child2Ref}
          onScroll={handleChild2Scroll}
        >
          <div className="flex" style={{ width: "2500px", height: "100%" }}>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Market Research
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Stakeholder Workshops
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              {" "}
              Product Strategy and Roadmapping{" "}
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Technology Consulting and Platform Planning
            </li>
            {/* <li className="horizontal-animation-para"></li> */}
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              GTM Strategy
            </li>
          </div>
        </div>
      </div>
    );
  } else if (url.pathname === "/userexperience") {
    return (
      <div className="ml-0" style={{ display: "flex", height: "400px" }}>
        <div
          style={{
            width: "100%",
            overflowY: "scroll",
            height: "400px",
            // borderRight: "1px solid black",
            position: "absolute",
          }}
          ref={child1Ref}
          onScroll={handleChild1Scroll}
        >
          <div style={{ height: "1500px" }}>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Ux Audit
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                "Evaluation is Creation." A UX audit is a critical evaluation of
                the website's or application's interface, which enables us to
                gain valuable insights into user behaviour and formulate a
                data-driven action plan for you to hit the ground running.
              </p>
            </div>

            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                UX Research
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                A holistic understanding of the target audience is the key
                driver of growth. Our UX research team strives to provide
                qualitative as well as quantitative insights into end-user
                behaviour, allowing you to take strategic actions to address the
                strengths and weaknesses.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                UI UX Consulting{" "}
              </h1>

              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                It is critical to have a digital presence that conveys your
                brand values while also seamlessly interacting with users. We
                take charge of everything from brainstorming designs to
                conducting ux audits, providing tailored strategies for you to
                thrive in the market and enhance your user experience.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                User Experience Design
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                User Experience is at the core of everything we build at
                Codelinear. Our UX team deligently researches user behaviour and
                strategically builds prototypes and wireframes that provide the
                finest experiences to the end users. We craft designs that are
                the conglomeration of intuition, empathy, and clarity.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                User Interface Design
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                In the era of plummeting user attention span, an engaging user
                interface ensures better customer retention and conversion
                rates. Our UI Team creates high-fidelity interfaces that
                perfectly balance visual aesthetics and usability, enabling
                users to seamlessly interact with them.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Digital Branding
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Given how the digital storm is transforming business processes
                and consumer behaviour, a digital brand image enables you to
                communicate with your audience. We blend creativity with
                strategy to design and build a brand identity that resonates
                with your firm's values and bridges the gap between you and your
                users.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", overflowX: "auto", height: "100%" }}
          className="horizontal-section"
          ref={child2Ref}
          onScroll={handleChild2Scroll}
        >
          <div className="flex" style={{ width: "2500px", height: "100%" }}>
            {/* <div className="horizontal-animation-container"> */}
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              UX Audit
            </li>
            <li className="horizontal-animation-para "></li>

            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para "
            >
              UX Research
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              UI UX Consulting
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              User Experience Design
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              User Interface Design
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Digital Branding
            </li>
          </div>

          {/* </div> */}
        </div>
      </div>
    );
  } else if (url.pathname === "/productdevelopment") {
    return (
      <div className="ml-0" style={{ display: "flex", height: "400px" }}>
        <div
          style={{
            width: "100%",
            overflowY: "scroll",
            height: "400px",
            // borderRight: "1px solid black",
            position: "absolute",
          }}
          ref={child1Ref}
          onScroll={handleChild1Scroll}
        >
          <div style={{ height: "1500px" }}>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Website Development
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                A user's first interaction with your company is through your
                website. We develop and maintain websites to enhance your
                business image and credibility by providing your users with a
                seamless experience across each point of contact.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Web App Development
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                A holistic understanding of the target audience is the key
                driver of growth. Our UX research team strives to provide
                qualitative as well as quantitative insights into end-user
                behaviour, allowing you to take strategic actions to address the
                strengths and weaknesses.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                E-Commerce Development{" "}
              </h1>

              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                "Evaluation is Creation." A UX audit is a critical evaluation of
                the website's or application's interface, which enables us to
                gain valuable insights into user behaviour and formulate a
                data-driven action plan for you to hit the ground running.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                MVP Development
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Minimum Viable Product enables you to launch your product in the
                market and gain valuable feedback for further development. We
                empower ideas by building MVPs that strategically capture the
                essence of the original product with minimal investment.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Native App Development
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Technology is altering the way the world is perceived. We build
                applications that distinguish your app from more than a million
                in the market. Our team of developers utilise their expertise to
                build apps that ensure the epitome of digital experience for
                users, cater to their needs, and Transform your vision into
                reality.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Hybrid App Development
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Our Go-To-Market Strategy entails extensive research into the
                market condition. We devise comprehensive launch and marketing
                strategies for you to position yourself in the market by
                mitigating the risks and capitalising on data-driven insights.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Enterprise App Development
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Our Go-To-Market Strategy entails extensive research into the
                market condition. We devise comprehensive launch and marketing
                strategies for you to position yourself in the market by
                mitigating the risks and capitalising on data-driven insights.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", overflowX: "auto", height: "100%" }}
          className="horizontal-section"
          ref={child2Ref}
          onScroll={handleChild2Scroll}
        >
          <div className="flex" style={{ width: "3000px", height: "100%" }}>
            {/* <div className="horizontal-animation-container"> */}
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Website Development
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Web App Development
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              E-Commerce Development
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              MVP Development
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Native App Development
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Hybrid App Development
            </li>
            <li className="horizontal-animation-para"></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Enterprise App Development
            </li>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ml-0" style={{ display: "flex", height: "400px" }}>
        <div
          style={{
            width: "100%",
            overflowY: "scroll",
            height: "400px",
            // borderRight: "1px solid black",
            position: "absolute",
          }}
          ref={child1Ref}
          onScroll={handleChild1Scroll}
        >
          <div style={{ height: "1500px" }}>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                SEO
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                A user's first interaction with your company is through your
                website. We develop and maintain websites to enhance your
                business image and credibility by providing your users with a
                seamless experience across each point of contact.
              </p>
            </div>

            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Social Media
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                A holistic understanding of the target audience is the key
                driver of growth. Our UX research team strives to provide
                qualitative as well as quantitative insights into end-user
                behaviour, allowing you to take strategic actions to address the
                strengths and weaknesses.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Paid Search{" "}
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                "Evaluation is Creation." A UX audit is a critical evaluation of
                the website's or application's interface, which enables us to
                gain valuable insights into user behaviour and formulate a
                data-driven action plan for you to hit the ground running.
              </p>
            </div>
            <div className="vertical-animation-container">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="vertical-animation-h1"
              >
                Paid Social
              </h1>
              <p
                style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                className="vertical-animation-para"
              >
                Minimum Viable Product enables you to launch your product in the
                market and gain valuable feedback for further development. We
                empower ideas by building MVPs that strategically capture the
                essence of the original product with minimal investment.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", overflowX: "auto", height: "100%" }}
          className="horizontal-section"
          ref={child2Ref}
          onScroll={handleChild2Scroll}
        >
          <div className="flex" style={{ width: "2000px", height: "100%" }}>
            {/* <div className="horizontal-animation-container"> */}
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              SEO
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para "
            >
              Social Media
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Paid Search
            </li>
            <li className="horizontal-animation-para "></li>
            <li
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="horizontal-animation-para"
            >
              Paid Social{" "}
            </li>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
};

export default Parent;

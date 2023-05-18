import About from "./components/about/about";
import Services from "./components/services/services";
import Home from "./components/Home/Home";
import Work from "./components/work/Work";
import Career from "./components/Career/career";
import Blog from "./components/Blog/Blog";
import Talk from "./components/letsTalk/Talk";
import Empathy from "./components/Bloginnerpages/empathy/empathy";
import Trend from "./components/Bloginnerpages/trends/Trends";
import Bing from "./components/Bloginnerpages/Bing/Trends";
import Brand from "./components/Bloginnerpages/Branded/Trends";
import Change from "./components/Bloginnerpages/Changing/Trends";
import Design from "./components/Bloginnerpages/Design/Trends";
import Discovery from "./components/Bloginnerpages/Discovery/Trends";
import Gesalt from "./components/Bloginnerpages/Gesalt/Trends";
import Listen from "./components/Bloginnerpages/Listening/Trends";
import MVP from "./components/Bloginnerpages/MVP/Trends";
import NCR from "./components/Bloginnerpages/NCR/Trends";
import Reactblog from "./components/Bloginnerpages/React/Trends";
import SVM from "./components/Bloginnerpages/SVM/Trends";
import Story from "./components/Bloginnerpages/Story/Trends";
import UXblog from "./components/Bloginnerpages/UX/Trends";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Consulting from "./components/consultingAndStrategy/consulting";
import UX from "./components/userExperience/UX";
import DM from "./components/digitalMarketing/digitalmarketing";
import PD from "./components/productDevelopment/productdevelopment";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Dash from "./components/Dashboard/dash";
import Login from "./components/Dashboard/Login";
import { useState } from "react";
import NotFound from "./components/NotFound";
import { useEffect } from "react";

function App() {
  window.scroll({
    behavior: "smooth",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("jwt");

    if (data) {
      setUser(true);
    } else {
      setUser(false);
    }
  },[]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div style={{ backgroundColor: isDarkMode ? "#FFFFFF" : "#090909" }}>
      <AnimatedCursor
        innerSize={8}
        outerSize={0}
        color="255, 255, 255"
        outerAlpha={0}
        innerScale={1.2}
        outerScale={5}
        hasBlendMode={true}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* <Switch> */}
          <Route
            exact
            path="/"
            element={
              <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route exact path="/admin" element={ user ? <Dash/> : <Login/> } />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/about"
            element={
              <About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/work"
            element={
              <Work isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/career"
            element={
              <Career isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/blog"
            element={
              <Blog isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/services"
            element={
              <Services
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/consultingandstrategy"
            element={
              <Consulting
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/userexperience"
            element={
              <UX isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/productdevelopment"
            element={
              <PD isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/digitalmarketing"
            element={
              <DM isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/let's_talk"
            element={
              <Talk isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/empathy-in-UX"
            element={
              <Empathy
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/digital-marketing-trends-2023"
            element={
              <Trend isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/bing-vs-google"
            element={
              <Bing isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Branded"
            element={
              <Brand isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/changing"
            element={
              <Change isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Discovery"
            element={
              <Discovery
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/Gestalt"
            element={
              <Gesalt isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Listening"
            element={
              <Listen isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/minimum-viable-product"
            element={
              <MVP isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/No-code-revolution"
            element={
              <NCR isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/react-vs-flutter"
            element={
              <Reactblog
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/Design"
            element={
              <Design isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/shopify-vs-magento"
            element={
              <SVM isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Story"
            element={
              <Story isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/UX"
            element={
              <UXblog isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          \
          <Route element={NotFound} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
      {/* </Cursor> */}
    </div>
  );
}

export default App;

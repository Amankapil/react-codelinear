import "./styles/clients.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import React, { useState, useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

import image2 from "./images/Frame 43.png";
import image3 from "./images/Frame 44.png";
import image4 from "./images/Frame 472.png";
import image5 from "../Blog/Images/Frame 45.png";
import image6 from "../Blog/Images/Frame 47.png";
import image7 from "../Blog/Images/Frame 46.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogHome = ({ isDarkMode, handleimgHover, handleButtonHover }) => {
  const url = useLocation();

  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  const handleimgMouseEnter = () => {
    // handleimgHover(true);
    handleButtonHover(true);
  };

  const handleimgMouseLeave = () => {
    // handleimgHover(false);
    handleButtonHover(false);
  };

  const handleButtonMouseEnter = () => {
    // handleButtonHover(true);
    handleimgHover(true);
  };

  const handleButtonMouseLeave = () => {
    // handleButtonHover(false);
    handleimgHover(false);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".headingsection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "bounce.out" });
        })
        .addTo(controller);
    });
  }, []);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesectionlinks");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);

  const swiperRef = useRef(null);
  if (url.pathname === "/") {
    return (
      <>
        <div className="headingsection" id="blog">
          <div
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            id="blog_heading"
            className="-ml20 headingsection"
          >
            We Pen Down Our Brightest Ideas
          </div>
          <div
            onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            className="max-w[100%] w-[100%] mt-40 homeidea -ml-[6%] max-2xl:ml-8 max-xl:ml-8 max-sm:ml-0 max-sm:mt-5 servicchomesectionlinks"
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              slidesPerGroupSkip={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  containerClass: "half-image-container",
                },
                435: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              pagination={true}
              // modules={[Autoplay, Pagination, Navigation]}
              modules={[Autoplay, Pagination, Navigation]}
              className="swiper-container mySwiper h-[30rem] mt-20 pt-20 max-md:mt-0 px-8 w-[100%] -ml20 max-2xl:ml-0 maxxl:w-[100%]"
            >
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <Link
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      to={"/minimum-viable-product"}
                    >
                      <img
                        src={image7}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="sub-heading text-center "
                      style={{
                        fontFamily: "graphikthin",
                        color: isDarkMode ? "#000000" : "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Minimum Viable Product
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo para w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        // color: "#848484",
                        color: isDarkMode ? "#00000099" : "#848484",
                      }}
                    >
                      Building an MVP that attracts investors enough to fund it
                      is indeed a magic potion...
                    </p>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <Link
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      to={"/digital-marketing-trends-2023"}
                    >
                      <img
                        src={image3}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="sub-heading text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: isDarkMode ? "#000000" : "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Digital Marketing
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo para w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: isDarkMode ? "#00000099" : "#848484",
                      }}
                    >
                      We have compiled a list of digital marketing trends that
                      may assist...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <Link
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      to={"/empathy-in-UX"}
                    >
                      <img
                        src={image2}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="sub-heading text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: isDarkMode ? "#000000" : "#d8d6d6",

                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo para w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: isDarkMode ? "#00000099" : "#848484",
                      }}
                    >
                      Empathy is a foundational principle in the concept of
                      design thinking - a user-based approach to...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <Link
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      to={"/shopify-vs-magento"}
                    >
                      <img
                        src={image6}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="sub-heading text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: isDarkMode ? "#000000" : "#d8d6d6",

                        fontWeight: "600",
                      }}
                    >
                      Shopify Vs Meganto
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo para w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: isDarkMode ? "#00000099" : "#848484",
                      }}
                    >
                      While Shopify offers a no-coding and user-friendly
                      platform that can help you run an online shop...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <Link
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      to={"/no-code-revolution"}
                    >
                      <img
                        src={image5}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="sub-heading text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: isDarkMode ? "#000000" : "#d8d6d6",

                        fontWeight: "600",
                      }}
                    >
                      No Code Revolution
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo para w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: isDarkMode ? "#00000099" : "#848484",
                      }}
                    >
                      Building an MVP that attracts investors enough to fund it
                      is indeed a magic potion...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <Link
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      to={"/design"}
                    >
                      <img
                        src={image4}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="sub-heading text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: isDarkMode ? "#000000" : "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Design System
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo para w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: isDarkMode ? "#00000099" : "#848484",
                      }}
                    >
                      A design system is a guide or a standard structure with
                      parameters for design and code...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className=" flex justify-center items-center mt-4 -ml-0">
              <button className="exp_btn ">
                <Link
                  // style={{ color: isDarkMode ? "#000000" : "#848484" }}
                  to="/blog"
                  onMouseEnter={handleimgMouseEnter}
                  onMouseLeave={handleimgMouseLeave}
                  // className="exp_btn-content"
                  className={isDarkMode ? "darkexplore" : "exp_btn-content"}
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/about") {
    return (
      <>
        <>
          <div id="blg" className="servicchomesectionlinks">
            <div className="flex justify-center flex-col items-center w-full">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="heading mt-20 text-center font-bold max-md:p-10 max-sm:p-5"
              >
                Take A Peek At Our <br /> Case Study
              </h1>
              <p
                className="w-96 text-center para mt-8 max-md:px-5 max-sm:w-full"
                style={{
                  color: isDarkMode ? "#00000099" : "#848484",
                  fontFamily: "graphik",
                }}
              >
                We handle all our projects with the utmost discretion. Through
                our case studies take a look at how we drive growth for our
                clients.
              </p>
            </div>
            <div
              onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              className="max-w[100%] w-[100%] homeidea -ml-[0%] max-2xl:ml-8 max-sm:ml-0 mt-5 "
            >
              <Swiper
                ref={swiperRef}
                slidesPerView={3}
                slidesPerGroupSkip={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    containerClass: "half-image-container",
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                pagination={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=" swiper-container mySwiper h-[32rem] mt-20 max-md:mt-0 px-8 w-[100%] -ml20 max-2xl:ml-0 maxxl:w-[100%]"
              >
                <SwiperSlide className="cass flex justify-center items-center mt-20">
                  <div className="cardh mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <Link
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        to={"/minimum-viable-product"}
                      >
                        <img
                          src={image7}
                          alt=""
                          style={{
                            borderRadius: "11.4px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="sub-heading text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: isDarkMode ? "#000000" : "#d8d6d6",

                          fontWeight: "600",
                        }}
                      >
                        Minimum Viable Product
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex para coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: isDarkMode ? "#00000099" : "#848484",
                        }}
                      >
                        Building an MVP that attracts investors enough to fund
                        it is indeed a magic potion...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center mt-20">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <Link
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        to={"/digital-marketing-trends-2023"}
                      >
                        <img
                          src={image3}
                          alt=""
                          style={{
                            borderRadius: "11.4px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="sub-heading text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: isDarkMode ? "#000000" : "#d8d6d6",

                          fontWeight: "600",
                        }}
                      >
                        Digital Marketing
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex para coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: isDarkMode ? "#00000099" : "#848484",
                        }}
                      >
                        We have compiled a list of digital marketing trends that
                        may assist...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center mt-20">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <Link
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        to={"/empathy-in-UX"}
                      >
                        <img
                          src={image2}
                          alt=""
                          style={{
                            borderRadius: "11.4px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="sub-heading text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: isDarkMode ? "#000000" : "#d8d6d6",

                          fontWeight: "600",
                        }}
                      >
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex para coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: isDarkMode ? "#00000099" : "#848484",
                        }}
                      >
                        Empathy is a foundational principle in the concept of
                        design thinking - a user-based approach to...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center mt-20">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <Link
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        to={"/shopify-vs-magento"}
                      >
                        <img
                          src={image6}
                          alt=""
                          style={{
                            borderRadius: "11.4px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="sub-heading text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: isDarkMode ? "#000000" : "#d8d6d6",

                          fontWeight: "600",
                        }}
                      >
                        Shopify Vs Meganto
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex para coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: isDarkMode ? "#00000099" : "#848484",
                        }}
                      >
                        While Shopify offers a no-coding and user-friendly
                        platform that can help you run an online shop...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center mt-20">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <Link
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        to={"/no-code-revolution"}
                      >
                        <img
                          src={image5}
                          alt=""
                          style={{
                            borderRadius: "11.4px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="sub-heading text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: isDarkMode ? "#000000" : "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        No Code Revolution
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex para coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: isDarkMode ? "#00000099" : "#848484",
                        }}
                      >
                        Building an MVP that attracts investors enough to fund
                        it is indeed a magic potion...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center mt-20">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <Link
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        to={"/design"}
                      >
                        <img
                          src={image4}
                          alt=""
                          style={{
                            borderRadius: "11.4px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="sub-heading text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: isDarkMode ? "#000000" : "#d8d6d6",

                          fontWeight: "600",
                        }}
                      >
                        Design System
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex para coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: isDarkMode ? "#00000099" : "#848484",
                        }}
                      >
                        A design system is a guide or a standard structure with
                        parameters for design and code...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      </>
    );
  }
};

export default BlogHome;

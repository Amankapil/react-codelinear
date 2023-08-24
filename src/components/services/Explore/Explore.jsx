import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./explore.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { gsap, Power2 } from "gsap";
import { useEffect, useRef } from "react";

import { FreeMode, Pagination } from "swiper";
import ScrollMagic from "scrollmagic";

import { TweenMax } from "gsap";

const Explore = ({ isDarkMode, handledrag }) => {
  const url = useLocation();
  let arrowswipe = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    tl.fromTo(arrowswipe, 1, { x: "-10px" }, { x: "10px" });
    tl.fromTo(arrowswipe, 1, { x: "10px" }, { x: "10px" });
  }, []);

  const handleButtonMouseEnter = () => {
    handledrag(true);
  };

  const handleButtonMouseLeave = () => {
    handledrag(false);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".about-crew-left");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, {  opacity: 1, x: 0, ease: "easeOut"  });
        })
        .addTo(controller);
    });
  }, []);

  if (url.pathname === "/consultingandstrategy") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1
                className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5"
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              >
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-full max-lg:p-0">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-full  w-[115%] p-5 -ml-28 max-sm:-ml-10 max-lg:w-[100%] max-lg:ml-0 cursor-grab"
              >
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/userexperience" className="px20 cursor-grab">
                    <div className="card1 m48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/productdevelopment" className="px20 cursor-grab">
                    <div className="card1 mx48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/digitalmarketing" className="px20 cursor-grab">
                    <div className="card1 ml48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/userexperience") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1
                className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5"
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              >
                {" "}
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p-0">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-full  w-[115%] p-5 -ml-28 max-sm:-ml-10 max-lg:w-[100%] max-lg:ml-0 cursor-grab"
              >
                <SwiperSlide className="flex justify-center items-center">
                  <Link
                   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave} 
                    to="/consultingandstrategy"
                    className="px20 cursor-grab z-10"
                  >
                    <div className="card1  z-10 mx-4 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img1 z-10 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100 z-50">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60 z-50 "
                        >
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                  <Link
                   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/productdevelopment" className="px20 cursor-grab">
                    <div className="card1 mx48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/digitalmarketing" className="px20 cursor-grab">
                    <div className="card1 ml48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/productdevelopment") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1
                className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5"
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              >
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p-0">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-full  w-[115%] p-5 -ml-28 max-sm:-ml-10 max-lg:w-[100%] max-lg:ml-0 cursor-grab"
              >
                <SwiperSlide className="flex justify-center items-center">
                  <Link 
                   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave} 
                    to="/consultingandstrategy"
                    className="px20 cursor-grab z-10"
                  >
                    <div className="card1  z-10 mx-4 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img1 z-10 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100 z-50">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60 z-50 "
                        >
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/userexperience" className="px20 cursor-grab">
                    <div className="card1 m48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/digitalmarketing" className="px20 cursor-grab">
                    <div className="card1 ml48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/digitalmarketing") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1
                className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5"
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              >
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p-0">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-full  w-[115%] p-5 -ml-28 max-sm:-ml-10 max-lg:w-[100%] max-lg:ml-0 cursor-grab"
              >
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave} 
                    to="/consultingandstrategy"
                    className="px20 cursor-grab z-10"
                  >
                    <div className="card1  z-10 mx-4 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img1 z-10 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100 z-50">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60 z-50 "
                        >
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/userexperience" className="px20 cursor-grab">
                    <div className="card1 m48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/productdevelopment" className="px20 cursor-grab">
                    <div className="card1 mx48 max-md:mx-0 hideee relative cursor-grab">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center  about-crew-left">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1
                className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5"
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}

               
              >
                Explore Our Services
              </h1>
            </div>
            <div
              className="scroll"
              style={{
                color: "#d8d6d6",
                fontFamily: "graphik",
                opacity: "0.7",
              }}
            >
              Drag
              <div className="linecontainer">
                <div className="ball" ref={(el) => (arrowswipe = el)}></div>
              </div>
            </div>
            <div  className="cards tett p-10  w-ful max-lg:p-0">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-full  w-[115%] p-5 -ml-28 max-sm:-ml-10 max-lg:w-[100%] max-lg:ml-0 cursorgrab"
              
              >
                <SwiperSlide className="flex justify-center items-center">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}   to="/consultingandstrategy" className="px20 cursrab z0">
                    <div
                     
                      className="card1   z10 mx-4 max-md:mx-0 hideee relative cursorrab"
                    >
                      <div className="img1 z10 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100 z-50">
                        <p
                          // style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          // className="name text-2xl max-md:-ml28 max-xl:-mt-60 z-50"
                          className={
                            isDarkMode
                              ? "name text-2xl max-md:-ml28 max-xl:-mt-60 z-50"
                              : "namelight  text-2xl max-md:-ml28 max-xl:-mt-60 z-50"
                          }
                        >
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center ">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/userexperience" className="px20 cursorgrab">
                    <div className="card1 m48 max-md:mx-0 hideee relative cursorgrab">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center ">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/productdevelopment" className="px20 cursorgrab">
                    <div className="card1 mx48 max-md:mx-0 hideee relative cursorgrab">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center ">
                  <Link  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  to="/digitalmarketing" className="px20 cursorgrab">
                    <div className="card1 ml48 max-md:mx-0 hideee relative cursorgrab">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end coloo max-lg:opacity-100">
                        <p
                          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                          className="name text-2xl max-md:-ml28 max-xl:-mt-60"
                        >
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Explore;

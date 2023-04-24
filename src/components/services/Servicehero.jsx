import { gsap, Power0 } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import React, { useState, useEffect, useRef } from "react";

export default function Serviceshero() {
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  let wordanimation = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: true,
      ease: Power0,
    });
    tl.fromTo(wordanimation, 1, { y: 0 }, { y: 0 });
    tl.fromTo(wordanimation, 2, { y: 0 }, { y: -97 });
    tl.fromTo(wordanimation, 2, { y: -97 }, { y: -197 });
    tl.fromTo(wordanimation, 2, { y: -197 }, { y: -292 });
  }, []);
  return (
    <>
      <section id="hero_services">
        <div className="vision w-full mb-52  flex justify-center h-full relative  items-center">
          <div className="wthh max-md:flex-col  max-sm:ml-0   ml20 max-2xl:ml-24 max-xl:ml-20  max-md:ml-5 max-md:p-0  w-9/10 flex relative">
           
            <div className=" mt max-xl:ml-12 max-sm:ml-2 flex w-full  max-sm:flex-col">
              <h1
                className="text-6xl w-full max-2xl:w-[100%] max-sm:w-[100%] mt6 ml-4 max-2xl:ml-0 max-xl:mb-5 max-md:text-3xl font-extrabold text-white"
                style={{
                  color: "#d8d6d6",
                }}
              >
                Leading The Way From
              </h1>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                direction={"vertical"}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwi -ml-5 max-2xl:-ml-4   w-[100%] h-40 max-sm:h-20 max-sm:-ml-5"
              >
                <SwiperSlide className="">
                  <h1
                    className="text-6xl  mt16 ml-8 max-xl:ml-5 max-md:text-3xl font-extrabold"
                    style={{
                      color: "#d8d6d6",
                    }}
                  >
                    Strategy To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="-ml">
                  <h1
                    className="text-6xl  mt16 ml-8 max-xl:ml-5 max-md:text-3xl font-extrabold"
                    style={{
                      color: "#d8d6d6",
                    }}
                  >
                    Design To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1
                    className="text-6xl  mt16 ml-8 max-xl:ml-5 max-md:text-3xl font-extrabold"
                    style={{
                      color: "#d8d6d6",
                    }}
                  >
                    Marketing to Success
                  </h1>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

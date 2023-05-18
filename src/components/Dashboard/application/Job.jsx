import React from "react";

const Job = () => {
  return (
    <>
      <div className=" mx-8 jobbox h-80 border-2  w-72 border-black">
        <div className="flex items-center w-full flex-col  justify-center">
          <div className="bg-[#868484] h-8 w-72 flex items-center  justify-center">
            <h1 className="text-2xl">job application</h1>
          </div>
          <div className="ul">
            <ul>
              <li className="bg-[#c7c3c3] my-4 w-60 p-4 text-black hover:bg-[#ffc117bf]">
                <span className="text-black font-extrabold">
                  Aman Kapil ||{" "}
                </span>
                <span className="text-black font-extrabold">Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;

import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="w-full h-screen absolute top-0 left-0 bg-black/20 "></div>
      <div className="w-full h-full absolute top-0 justify-center text-center items-center flex flex-col p-4">
        <div className="w-full max-w-[768px]">
          <h3 className="text-3xl font-bold text-white py-4">
            First Class Travell
          </h3>
          <h4 className=" text-2xl font-bold text-white py-4">
            Top 1% Locations Worldwide
          </h4>
          <div className=" w-full flex justify-between border border-gray-400 rounded-md bg-gray-200 p-1">
            <input
              className=" w-full px-4 bg-transparent focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
            <button className="px-4">
              <BiSearch size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

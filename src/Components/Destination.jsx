import React from "react";
import borabora1 from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives1 from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] py-16 px-4 mx-auto text-center ">
      <h3 className=" text-3xl font-bold py-2">All-Inclusive Resorts</h3>
      <p className=" text-xl py-2">On The Caribbeans Best Beaches</p>
      <div className="grid md:grid-cols-5  gap-2 md:gap-4 py-4">
        <img
          className=" w-full h-full object-cover md:col-span-3 col-span-2 row-span-2"
          src={borabora1}
          alt=""
        />
        <img className=" w-full h-full object-cover " src={borabora2} alt="" />
        <img className=" w-full h-full object-cover " src={maldives1} alt="" />
        <img className=" w-full h-full object-cover " src={maldives2} alt="" />
        <img className=" w-full h-full object-cover " src={keywest} alt="" />
      </div>
    </div>
  );
};

export default Destination;

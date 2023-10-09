import React from "react";

const SelectsCard = (props) => {
  return (
    <div className=" relative">
      <img className=" w-full h-full object-cover" src={props.bg} alt="" />
      <div className=" absolute top-0 left-0 bg-gray-900/20 w-full h-full">
        <p className=" absolute bottom-4 left-4 text-xl font-bold text-white">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;

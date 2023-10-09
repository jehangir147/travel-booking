import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(1);

  const length = sliderData.length;

  const next = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const prev = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className=" relative max-w-[1240px] py-16 mx-auto px-4">
      {sliderData.map((item, index) => (
        <div className="w-full">
          {slide === index && (
            <img className=" rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
      <BsArrowLeftSquareFill
        className=" absolute top-[50%] left-8 text-white text-4xl cursor-pointer"
        onClick={prev}
      />
      <BsArrowRightSquareFill
        className=" absolute top-[50%] right-8 text-white text-4xl cursor-pointer"
        onClick={next}
      />
    </div>
  );
};

export default Carousel;

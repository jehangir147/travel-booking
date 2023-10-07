import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full px-4 ">
      <div className="w-full flex justify-between items-center">
        <div>
          <h3 className=" py-4 text-4xl font-bold">BEACHES.</h3>
        </div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
        <div className="hidden md:flex">
          <BiSearch className="mx-4" size={25} />
          <BsPerson className="" size={25} />
        </div>
        <AiOutlineMenu
          className="block md:hidden"
          size={25}
          onClick={handleNav}
        />
      </div>
      <div
        className={
          nav
            ? "absolute top-0 left-[-100%] w-full bg-gray-100 px-4 md:hidden ease-out duration-200"
            : "absolute top-0 left-0 w-full bg-gray-100 px-4 md:hidden ease-in duration-200"
        }
      >
        <div className=" flex justify-between items-center">
          <h3 className=" py-4 text-4xl font-bold">BEACHES.</h3>
          <AiOutlineClose size={25} onClick={handleNav} />
        </div>
        <ul className=" flex flex-col px-8">
          <li className="px-6 border-b border-gray-500">Home</li>
          <li className="px-6 border-b border-gray-500">Destination</li>
          <li className="px-6 border-b border-gray-500">Travel</li>
          <li className="px-6 border-b border-gray-500">View</li>
          <li className="px-6 border-b border-gray-500">Book</li>
        </ul>
        <div className=" flex flex-col py-8">
          <button className=" mb-6">Search</button>
          <button className=" mb-6">Account</button>
        </div>
        <div className=" flex justify-between  pb-4">
          <FaFacebook className=" text-[var(--primary-dark)]" size={25} />
          <FaTwitter className=" text-[var(--primary-dark)]" size={25} />
          <FaYoutube className=" text-[var(--primary-dark)]" size={25} />
          <FaPinterest className=" text-[var(--primary-dark)]" size={25} />
          <FaInstagram className=" text-[var(--primary-dark)]" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

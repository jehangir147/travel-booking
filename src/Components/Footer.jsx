import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full mx-auto px-4 bg-gray-100">
      <div className=" max-w-[1240px] mx-auto py-16">
        <div className="flex xs:flex-col md:flex-row md:justify-between">
          <h3 className=" pb-6 text-3xl font-bold text-center md:text-start">
            BEACHES.
          </h3>
          <div className=" min-w-[450px] flex justify-between  pb-4">
            <FaFacebook className=" text-[var(--primary-dark)]" size={25} />
            <FaTwitter className=" text-[var(--primary-dark)]" size={25} />
            <FaYoutube className=" text-[var(--primary-dark)]" size={25} />
            <FaPinterest className=" text-[var(--primary-dark)]" size={25} />
            <FaInstagram className=" text-[var(--primary-dark)]" size={25} />
          </div>
        </div>
        <div className=" flex justify-between">
          <ul className=" flex xs:flex-col lg:flex-row">
            <li>About</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="flex xs:flex-col lg:flex-row text-right">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

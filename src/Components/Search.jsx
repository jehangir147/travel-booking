import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className=" w-full py-16 px-4">
      <div className=" max-w-[1240px] mx-auto ">
        <div className=" grid md:grid-cols-3 gap-8 items-center">
          <div className=" md:col-span-2 py-6">
            <h3 className=" text-3xl font-bold">
              LUXURY INCLUDED VACATION FOR TWO PEOPLE
            </h3>
            <p className=" py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quas facilis maxime quaerat repudiandae optio minima recusandae
              nobis, deleniti explicabo animi temporibus veniam voluptate
              eveniet fuga dolores tempore dolorem officiis quisquam? Animi
              placeat neque eos eveniet inventore, velit distinctio in est
              adipisci rem deserunt, et molestiae ut incidunt cupiditate soluta!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quas facilis maxime quaerat repudiandae optio minima recusandae
              nobis, deleniti explicabo animi temporibus veniam voluptate
              eveniet fuga dolores tempore dolorem officiis quisquam? Animi
              placeat neque eos eveniet inventore,
            </p>
            <div className=" grid lg:grid-cols-2 gap-4">
              <div className=" py-4 flex flex-col md:flex-row items-center text-center">
                <button className=" p-4 w-20 h-20 text-5xl">
                  <RiCustomerService2Fill />
                </button>
                <div>
                  <h4 className=" text-xl font-bold pb-4 pt-2 md:p-2">
                    LEADING SERVICE
                  </h4>
                  <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
              </div>
              <div className=" flex flex-col md:flex-row items-center text-center">
                <button className=" p-4 w-20 h-20 text-5xl">
                  <MdTravelExplore />
                </button>
                <div>
                  <h4 className=" text-xl font-bold pb-4 pt-2 md:p-2">
                    AUTOMATED BOOKING
                  </h4>
                  <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-center border rounded-md">
              <p className="py-2">GET AN ADDITIONAL 10% OFF</p>
              <p className="py-2">12 HOURS LEFT</p>
              <p className="py-2 bg-black text-white">BOOK NOW AND SAVE</p>
            </div>
            <form>
              <div className="flex flex-col py-2">
                <label>Destination</label>
                <select className="p-2 border rounded-md">
                  <option value="">Grande Antiqua</option>
                  <option value="">Key West</option>
                  <option value="">Maldives</option>
                  <option value="">Bora Bora</option>
                </select>
              </div>
              <div className="flex flex-col py-2">
                <label>Check In</label>
                <input className="p-2 border rounded-md" type="date" />
              </div>
              <div></div>
              <div className="flex flex-col py-2">
                <label>Check Out</label>
                <input className="p-2 border rounded-md" type="date" />
              </div>
              <button className=" w-full p-4 mt-4">
                Rates & Availabilities
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

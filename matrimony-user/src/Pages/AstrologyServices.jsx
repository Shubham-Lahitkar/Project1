import React, { useState } from "react";
import astro from "../Assets/Images/astro_cover.png";
import NavbarThree from "../Components/Common/NavbarThree";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RedButton from "../Components/Astrology/RedButton";
import Header from "../Components/Astrology/Header";
import { FirstCardData } from "../Data/Astrology/FirstCredData";
import { SecondCardData } from "../Data/Astrology/SecondCardData";
import Image from "../Assets/Images/astro_star.png";
import { Button } from "@material-tailwind/react";

const AstrologyServices = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="">
      <img className="absolute w-full" src={astro} alt="" />
      <div className="relative w-[990px] flex flex-col justify-center item-center mx-auto">
        <NavbarThree />
        <div className="text-white mt-10">
          <p className="text-3xl text-left font-sans font-semibold mt-12 mb-8">
            Hello Capricorn!
          </p>
          <p className="text-xs text-left font-sans font-semibold text-gray-400 mb-2">
            TODAY'S HOROSCOPE
          </p>
          <p className="text-base text-left font-sans  tracking-wide w-[800px] mb-10">
            A complex dilemma could emerge, testing your problem-solving skills.
            Carefully weigh your options and make thoughtful choices to navigate
            the challeng... <span className="font-semibold">Read more</span>
          </p>
        </div>
        <div className="bg-white rounded-lg px-20 mb-24">
          {/* Section 1 */}
          <div className="pt-8">
            <Header
              titleOne="JANAMPATRI"
              titleTwo="Ask the stars, the planets, the moon!"
              titleThree="We'll create your janampatri, just help us with these two details"
            ></Header>
            <div className="flex flex-row justify-between items-center py-6">
              <div className="w-[250px] flex flex-col gap-2 ">
                <p className="text-xs text-left font-sans font-medium tracking-wide text-gray-500">
                  Date of Birth
                </p>
                <label>
                  <input
                    className="w-full h-[40px] flex flex-row items-center justify-center border-[0.5px] border-gray-200 rounded-md px-5"
                    type="date"
                  />
                </label>
              </div>
              <div className="w-[250px] flex flex-col gap-2 ">
                <p className="text-xs text-left font-sans font-medium tracking-wide text-gray-500">
                  Time of Birth
                </p>
                <label>
                  <input
                    className="w-full h-[40px] flex flex-row items-center justify-center border-[0.5px] border-gray-200 rounded-md px-5"
                    type="time"
                  />
                </label>
              </div>
              <div className="w-[250px] flex flex-col gap-2 ">
                <p className="text-xs text-left font-sans font-medium tracking-wide text-gray-500">
                  Place of Birth
                </p>
                <label>
                  <select
                    className="w-full h-[40px] flex flex-row items-center justify-center border-[0.5px] border-gray-200 rounded-md  "
                    name=""
                    id=""
                  >
                    <option value="">Select City</option>
                    <option value="">Nashik</option>
                    <option value="">Pune</option>
                    <option value="">Mumbai</option>
                  </select>
                </label>
              </div>
            </div>
            <RedButton text="Create janampatri" />
          </div>

          {/* Section 2 */}
          <div className="pt-12 pb-10">
            <Header
              titleOne="KUNDLI MILAN"
              titleTwo="Check compatibility with profiles you like!"
              titleThree="Here's what you get,"
            ></Header>
            <div className="flex flex-row justify-between items-center pt-4 pb-8 shadow-sm">
              {FirstCardData.map((item, index) => {
                return (
                  <div
                    className="w-[180px] flex flex-col justify-center items-start  py-4 gap-2"
                    key={index}
                  >
                    <img className="w-[50px]" src={Image} alt="" />
                    <p className="text-sm text-left font-sans font-medium tracking-wide text-gray-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <RedButton text="Get Kundli Milan" />
          </div>

          {/* Section 3 */}
          <div className="bg-[#f5f5ff] -mx-20 px-20 pt-4 pb-8">
            <Header
              titleOne="GUESS THE RIGHT ANSWER"
              titleTwo="Which Guna holds maximum significance in Ashtakoota"
            ></Header>
            <div className="grid grid-cols-3 py-4 gap-y-5">
              <div className="bg-white w-[260px] h-[40px] rounded-full shadow-md flex flex-row justify-center items-center font-semibold font-sans text-gray-500">
                Bhakoot
              </div>
              <div className="bg-white w-[260px] h-[40px] rounded-full shadow-md flex flex-row justify-center items-center font-semibold font-sans text-gray-500">
                Yoni
              </div>
              <div className="bg-white w-[260px] h-[40px] rounded-full shadow-md flex flex-row justify-center items-center font-semibold font-sans text-gray-500">
                Graha Maitri
              </div>
              <div className="bg-white w-[260px] h-[40px] rounded-full shadow-md flex flex-row justify-center items-center font-semibold font-sans text-gray-500">
                Nadi
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-[#fef5e6] -mx-20 px-20 pt-4 pb-10">
            <Header titleOne="DID YOU KNOW?"></Header>
            <div className="flex flex-row justify-between items-center gap-4">
              {SecondCardData.map((item, index) => {
                return (
                  <div className="border-[0.5px] border-gray-300 rounded-lg px-2 py-4" key={index}>
                    <p className="text-sm text-left font-sans font-medium tracking-wide text-gray-700">{item.title}</p>
                    <p className="text-sm text-left font-sans tracking-wide text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyServices;

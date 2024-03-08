import React from "react";
import Card from "./CardOne";
import ImageOne from "../../Assets/Home/match-hour.svg";
import ImageTwo from "../../Assets/Home/voice-call.svg";
import ImageThree from "../../Assets/Home/video-profile.svg";
import CardTwo from '../Home/CardTwo'
import VerticalSwiper from "./VerticalSwiper";

const SectionThree = () => {
  return (
    <div className="relative  py-[40px]  rounded-md bg-[#f8f9f9] px-[70px]">
      <div className="my-10">
        <p className="text-sm font-bold text-gray-400 ">
          MEET FROM HOME
        </p>
        <p className="text-3xl font-md font-sans">
          Impress them Over the<span className="text-[#d9475c]">Distance</span>
        </p>
      </div>
      <div className="flex flex-row justify-between  items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <CardTwo />
        </div>
        <div>
          <VerticalSwiper />
          <img src={ImageOne} alt="" />
          {/* <img src={ImageTwo} alt="" /> */}
          {/* <img src={ImageThree} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

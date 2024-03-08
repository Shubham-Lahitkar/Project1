import React from "react";
import ImageFour from "../../Assets/Home/4.png";
import ImageFive from "../../Assets/Home/5.png";
import ImageSix from "../../Assets/Home/6.png";

const SectionFour = () => {
  return (
    <div className="relative px-[70px] py-[40px] rounded-md bg-[#f8f9f9] ">
      <div className="my-10">
        <p className="text-sm font-bold text-gray-400 ">
          MEET FROM HOME
        </p>
        <p className="text-3xl font-normal font-sans">
        Find the <span className="text-[#d9475c]">One for You </span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-left gap-4">
          <img className="h-[100px]" src={ImageFour} alt="" />
          <p className="text-sm font-semibold">
            <span className="text-[#d9475c]">01.</span> Define Your Partner
            Preferences
          </p>
        </div>
        <div className="flex flex-col justify-center items-left gap-4">
          <img className="h-[100px]" src={ImageFive} alt="" />
          <p className="text-sm font-semibold">
            <span className="text-[#d9475c]">02.</span> Browse Profiles
          </p>
        </div>
        <div className="flex flex-col justify-center items-left gap-4">
          <img className="h-[100px]" src={ImageSix} alt="" />
          <p className="text-sm font-semibold">
            <span className="text-[#d9475c]">03.</span> Send Interests & Connect
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center my-8">
    
        <button className="bg-[#d9475c] w-[200px] h-[40px] rounded-sm text-white text-md font-semibold font-sans">Get Started</button>
        </div>
    </div>
  );
};

export default SectionFour;

import React from "react";
import bg from "../../Assets/Home/JS_Exclusive_Image_final_min.png";
import ImageOne from "../../Assets/Home/7.png";
import ImageTwo from "../../Assets/Home/8.png";
import ImageThree from "../../Assets/Home/9.png";

const SectionSix = () => {
  return (
    <div className="h-[620px] px-[70px] mb-[80px]">
      <div className="flex flex-col justify-center items-center  ">
        <img className="absolute w-[840px] mt-[420px]" src={bg} alt="" />
        <div className="relative flex flex-col justify-center items-center my-16 gap-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md font-bold text-gray-500 ">
              PERSONALISED MATCH-MAKING SERVICE
            </p>
            <p className="text-3xl font-md font-sans">
              Introducing
              <span className="text-[#d9475c]">Exclusive</span>
            </p>
          </div>
          <button className="bg-[#ea556b] w-[100px] h-[30px] text-white text-sm font-semibold rounded-sm">
            EXCLUSIVE
          </button>
        </div>
      </div>
      <div className="my-[340px]">
        <div className="mt-[320px] flex flex-row justify-center items-start ">
          <div className="flex flex-col justify-center items-start p-2 gap-2">
            <div className="flex flex-row justify-start items-center gap-2">
              <div>
                <img className="w-[30px]" src={ImageOne} alt="" />
              </div>
              <p className="text-sm font-semibold">Meet Your Relationship Manager</p>
            </div>
            <div className="text-xs">
              Connect with our highly experienced advisor who manages your
              profile.
            </div>
          </div>
          <div className="flex flex-col justify-center items-start border-x-2 border-gray-300 p-2 gap-2">
            <div className="flex flex-row justify-start items-center gap-2">
              <div>
                <img className="w-[30px]" src={ImageTwo} alt="" />
              </div>
              <p className="text-sm font-semibold">Communicate your preferences</p>
            </div>
            <div className="text-xs">
              Consultation to understand your expectations in a prospective
              partner.
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-2 gap-2">
            <div className="flex flex-row justify-start items-center gap-2">
              <div>
                <img className="w-[30px]" src={ImageThree} alt="" />
              </div>
              <p className="text-sm font-semibold">Choose from handpicked profiles</p>
            </div>
            <div className="text-xs">
              We shortlist profiles matching your criteria for offline
              interactions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;

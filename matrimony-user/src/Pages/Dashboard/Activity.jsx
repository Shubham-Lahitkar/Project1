import React from "react";
import { Card } from "../../Data/Activity/Card";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "../../Assets/Dashboard/ProfileImage.png";

const Activity = () => {
  return (
    <div className="overflow-hidden pb-[400px]">
      {/* overflow-x-scroll no-scrollbar */}
      <div className="flex flex-row text-[#768493] gap-4 py-10 px-4">
        {Card.map((element, index) => {
          return (
            <div
              key={index}
              className="w-[110px] flex flex-col gap-1 bg-gray-100 rounded-lg px-4 py-4"
            >
              <BiMailSend size={24} />
              <div className="text-2xl font-bold font-sans">
                {element.number}
              </div>
              <div className="text-sm font-sans font-semibold tracking-wide">
                {element.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative w-full bg-[#ebf2fb]  pt-10 pb-20 px-4 mb-40">
        <div className="text-xl font-sans font-bold tracking-wide text-gray-700 pb-1">
          This might interest you
        </div>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-500 pb-6">
          We've curated some insights that you might like
        </div>
        <div className="absolute w-[200px] flex flex-col justify-center items-center gap-4 bg-white rounded-lg shadow-lg p-10">
          <img className="w-[50px] rounded-full" src={image} alt="" />
          <div className="text-sm text-center font-sans font-semibold tracking-wide text-gray-700">
            19 Profiles Visited by You
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between px-4">
        <div>
          <div className="text-xl font-sans font-bold tracking-wide text-gray-700 pb-1">
            Shortlisted Profiles (0)
          </div>
          <div className="text-sm font-sans font-semibold tracking-wide text-gray-500 pb-6">
            Move ahead with your decision by sending an interest!
          </div>
        </div>
        <AiOutlineArrowRight fontSize={18} color={"#34495e"} />
      </div>
    </div>
  );
};

export default Activity;

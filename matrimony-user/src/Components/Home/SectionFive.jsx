import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { Membership } from "../../Data/Membership";

const SectionFive = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f8f9f9] px-[70px]">
      <div className="my-6">
        <p className="text-3xl font-md font-sans">
          <span className="text-[#d9475c]">Membership</span> Plans
        </p>
      </div>
      <p className="text-center text-lg text-gray-600">
        Upgrade your plan as per your customized requirements. With a paid
        membership, you can seamlessly connect with your prospects and get more
        responses. Here are some key benefits:
      </p>
      <div className="absolute -mb-[550px] h-[220px] w-[990px] bg-[#34495e]"></div>
      <div className="relative flex flex-row justify-center items-center py-10">
        <div>
          <div className=" flex flex-col bg-white p-[25px] rounded-sm shadow-lg gap-4">
            <div className="flex flex-col gap-2">
              <div className="h-[3px] w-[35px] bg-[#d9475c] "></div>
              <div className="text-2xl text-gray-800 font-sans font-semibold">
                FREE
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {Membership.map((items, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`flex flex-row justify-start items-center text-md font-normal gap-2`}
                    >
                      <span className={`${items.colorOne} text-xl`}>
                        {items.sign}
                      </span>
                      <span className={`${items.colourTwo}`}>{items.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="bg-[#d9475c] w-full h-[35px] rounded-sm text-white text-md font-semibold font-sans">
              Register Free
            </button>
          </div>
        </div>
        <div>
          <div className=" flex flex-col p-[30px] bg-[#d9475c] rounded-md shadow-xl gap-4">
            <div className="flex flex-col gap-2">
              <div className="h-[3px] w-[35px] bg-white "></div>
              <div className="text-2xl text-white font-sans font-semibold">
                Paid
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {Membership.map((items, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`flex flex-row justify-start items-center text-md font-normal gap-2`}
                    >
                      <span className={`${items.colorThree} text-xl`}>
                        {items.sign}
                      </span>
                      <span className={`${items.colorThree}`}>
                        {items.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="bg-white w-full h-[35px] rounded-sm text-[#d9475c] text-md font-semibold font-sans">
              Register Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;

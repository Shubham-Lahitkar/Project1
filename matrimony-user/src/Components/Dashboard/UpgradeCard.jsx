import React from "react";
import ImageOne from "../../Assets/Dashboard/1.png";
import ImageTwo from "../../Assets/Dashboard/2.png";
import ImageThree from "../../Assets/Dashboard/3.png";
import ImageFour from "../../Assets/Dashboard/4.png";
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom";

const UpgradeCard = () => {
  return (
    <div on className="sticky top-24 w-[280px] h-[500px] bg-white border-[0.5px] border-gray-200 rounded-lg px-8 py-8 flex flex-col gap-6 shadow-sm">
      <div className="text-base text-center font font-bold text-gray-700 tracking-wide">
        You are <span className="text-[#d8465c]">missing</span> out on the
        premium benefits!
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-center items-center gap-6">
          <img className="w-[55px] rounded-full" src={ImageOne} alt="" />
          <p className="text-gray-700 tracking-wide font-medium ">
            Get upto 3x more profile views
          </p>
        </div>
        <div className="flex flex-row justify-center items-center font gap-6">
          <img className="w-[54px] rounded-full" src={ImageTwo} alt="" />
          <p className="text-gray-700 tracking-wide font-medium ">
            Unlimited voice & video calls
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <img className="w-[54px] rounded-full" src={ImageThree} alt="" />
          <p className="text-gray-700 tracking-wide font-medium ">
            Get access to contact details
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <img className="w-[55px] rounded-full" src={ImageFour} alt="" />
          <p className="text-gray-700 tracking-wide font-medium ">
            Perform unlimited searches{" "}
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-600 tracking-wide font-semibold text-center pb-2">Flat 61% OFF till 31 Oct</p>
        <Link to="/upgrade"><button className="flex flex-row justify-center items-center gap-2 text-white text-base font-semibold tra bg-[#d8465c] rounded-lg mx-auto w-full py-2">Upgrade now <AiOutlineArrowRight/></button></Link>
        
      </div>
    </div>
  );
};

export default UpgradeCard;

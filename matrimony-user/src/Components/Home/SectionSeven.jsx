import React from "react";
import HorizontalSwiper from "./HorizontalSwiper";

const SectionSeven = () => {
  return (
    <div className="relative flex flex-col justify-center items-start px-[70px] py-[50px] rounded-md bg-white gap-8">
      <div>
        <p className="text-sm font-bold text-gray-400 ">
        LAKHS OF HAPPY COUPLES
        </p>
        <p className="text-3xl font-md font-sans">
          Matched By <span className="text-[#d9475c]">Jeevansathi</span>
        </p>
      </div>  
      <HorizontalSwiper/>
    </div>
  );
};

export default SectionSeven;

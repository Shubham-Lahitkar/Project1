import React from "react";
import CardOne from "./CardOne";

const Section_2 = () => {
  return (
    <div className="relative flex flex-col justify-center items-start px-[70px] py-[50px] rounded-md bg-white gap-8">
      <div>
        <p className="text-sm font-bold text-gray-400 ">MORE THAN 20 YEARS OF</p>
        <p className="text-3xl font-md font-sans">Bringing People <span className="text-[#d9475c]">Together</span></p>
      </div>
    
      <CardOne></CardOne>
  
      
    </div>
  );
};

export default Section_2;

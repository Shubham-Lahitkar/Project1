import React from "react";
import Navbar from "../Components/Common/Navbar";
import help_bg from "../Assets/Help/bg-image.jpg";

const Help = () => {
  return (
    <div className=" bg-[#e7e6e6] h-[1000px] ">
      <img
        className="z-0 fixed w-[100vw] h-[130px] backdrop-blur-sm "
        src={help_bg}
        alt=""
      />

      <div className="w-[990px] flex flex-col justify-center item-center mx-auto">
        <Navbar margin={"top-8"}/>
        <div className="bg-white">

        </div>
      </div>
    </div>
  );
};

export default Help;

import React from "react";
import NavbarThree from "./NavbarThree";
import bg from "../../Assets/Help/bg-image.jpg";
import { Link } from "react-router-dom";

const UploadPhotosHeader = ({ header }) => {
  return (
    <div>
      <div className=" bg-[#e7e6e6] h-[190px] ">
        <img
          className="z-20 absolute w-[100vw] h-[200px] backdrop-blur-sm "
          src={bg}
          alt=""
        />

        <div className="w-[990px] flex flex-col justify-center item-center mx-auto">
          <NavbarThree />
        </div>
      </div>
    </div>
  );
};

export default UploadPhotosHeader;

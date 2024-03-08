import React, { useState } from "react";
import logo from "../../Assets/Common/desktopLogo.svg";
import { NavbarThree } from "../../Data/NavbarThree";
import { SlBell } from "react-icons/sl";
import Image from "../../Assets/Registration/5.png";
import { Link } from "react-router-dom";
import { Profile } from "../../Data/Dashboard/Profile";

const UploadPhotosNavbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="relative top-9 z-50 w-[990px] h-[64px] bg-[#36495c] mx-auto ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-8">
            <div className="w-[165px] bg-white">
              <img className="h-[64px] m-auto" src={logo} alt="" />
            </div>

            <div className="flex flex-row justify-center items-center gap-12">
              {NavbarThree.map((ele, index) => {
                return (
                  <Link to={ele.link}>
                    <div className="  text-white text-sm uppercase font-thin tracking-wide ">
                      {ele.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-10 px-8">
            <div className="text-white text-lg ">
              <SlBell />
            </div>
            <div
              onMouseOver={() => {
                setMenu(true);
              }}
            >
              <img
                className="w-[45px] h-[45px] rounded-full"
                src={Image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          {menu && (
            <div
              className="absolute z-50 flex flex-col right-0 top-[66px] bg-[#36495c] opacity-90 text-white text-base p-4 pr-20 gap-5"
              onMouseOver={() => {
                setMenu(true);
              }}
              onMouseOut={() => {
                setMenu(false);
              }}
            >
              {Profile.map((ele, index) => {
                return (
                  <Link to={ele.link}>
                    <div className="">{ele.name}</div>
                  </Link>
                );
              })}
              <Link to="/">
                <div className="">Sign out</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPhotosNavbar;

import React from "react";
import Logo from "../../Assets/Dashboard/Logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BiBell } from "react-icons//bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ProfileImage from "../../Assets/Dashboard/ProfileImage.png";
import { DashboardMenu } from "../../Data/Dashboard/DashboardMenu";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProfileNavbar = ({ menu, setMenu }) => {
  return (
    <div className="max-w-screen ">
      <div className=" fixed z-50 bg-white w-full h-[73px] border-b-[0.5px] border-gray-300 shadow-md">
        <div className="max-w-[1250px]  mx-auto flex flex-row justify-between items-center px-2">
          <div>
            <Link to="/">
              <img className="h-[72px]" src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-9 text-[22px] font-thin text-gray-500">
            <Link to="/dashboard/profile">
            <AiOutlineUser />

            </Link>
            <Link to="/dashboard/notifications"><BiBell /></Link>
            
            <div onClick={() => setMenu(true)} className="px-2 py-2">
              <HiOutlineMenuAlt3 />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed overflow-hidden z-50 ${
          menu ? "inset-y-0 right-0 " : "inset-y-0 -right-[380px]"
        } transition-all ease-in duration-200  bg-white w-[360px] h-screen rounded-l-3xl px-7 py-8`}
      >
        <div className="border-b-[0.5px] border-gray-200 flex flex-row items-center gap-4 pt-2 pb-4">
          <div>
            <img className="w-[60px] rounded-full" src={ProfileImage} alt="" />
          </div>
          <div className="">
            <p className="text-xl font-bold text-gray-700 pb-1">Hi Gaurav!</p>
            <p className="text-xs font-semibold text-gray-500">
              VRVY1121
              <span onClick={()=>setMenu(false)} className="text-[#d8465c]">
                <Link to="/dashboard/profile">{" "}Edit Profile</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="py-4">
          <p className="text-gray-500 tracking-wide font-semibold text-center pb-2">
            Flat 61% OFF till 31 Oct
          </p>
          <Link to="/upgrade">
            <button className="flex flex-row justify-center items-center gap-2 text-white text-normal font-semibold tra bg-[#d8465c] rounded-lg mx-auto w-full tracking-wide py-2.5">
              Upgrade Membership
            </button>
          </Link>
        </div>
        <div onClick={()=>setMenu(false)} className="flex flex-col justify-center py-2">
          {DashboardMenu.map((ele, index) => {
            return (
              <Link to={ele.link}>
                <div
                  key={index}
                  className="flex flex-row justify-between items-center text-sm font-[700] text-gray-600 py-4"
                >
                  <div className="tracking-wide">{ele.name}</div>
                  <BiChevronRight fontWeight={500} fontSize={22} />
                </div>
              </Link>
            );
          })}
        </div>
        <Link to="/">
          <div className="absolute py-6 text-sm font-[700] text-gray-600 tracking-wide">
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavbar;

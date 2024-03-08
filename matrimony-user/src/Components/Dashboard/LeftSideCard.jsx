import React from "react";
import ProfileImage from "../../Assets/Dashboard/ProfileImage.png";
import { Dashboard } from "../../Data/Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const LeftSideCard = () => {
  return (
    <div className="sticky top-24 w-[270px] h-[380px] bg-white border-[0.5px] border-gray-200 rounded-lg flex flex-col p-6 shadow-sm">
      <div className="border-b-[0.5px] border-gray-200 flex flex-row justify-center items-center gap-4 pt-2 pb-4">
        <div>
          <img className="w-[60px] rounded-full" src={ProfileImage} alt="" />
        </div>
        <div className="">
          <p className="text-xl font-bold text-gray-700 pb-1">Hi Gaurav!</p>
          <p className="text-xs font-semibold text-gray-500">
            VRVY1121
            <span className="text-[#d8465c]">
              <Link to="/dashboard/profile">{" "}Edit Profile</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center py-4">
        {Dashboard.map((ele, index) => {
          return (
            <Link to={ele.link}>
              <div
                key={index}
                className="flex flex-row justify-between items-center text-sm font-[530] text-gray-500 py-4"
              >
                <div className="tracking-wide">{ele.name}</div>
                <BiChevronRight fontWeight={500} fontSize={22} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideCard;

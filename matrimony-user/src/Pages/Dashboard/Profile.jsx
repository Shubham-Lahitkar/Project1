import React, { useState } from "react";
import Dummy from "../../Assets/Dashboard/Dummy.jpg";
import { AiOutlineLeft, AiOutlineEye } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import EditMyProfile from "../../Components/Profile/EditMyProfile"
import EditPartnerProfile from "../../Components/Profile/EditPartnerProfile"
import { useNavigate } from "react-router";

const Profile = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  return (
    <div>
      <div className="relative w-[650px] h-[360px]">
        <img className="absolute" src={Dummy} alt="" />
        <div className="absolute w-full flex flex-row justify-between items-center  text-white top-5 right-0 px-8 ">
          <div onClick={() => navigate(-1)} className="w-[35px] h-[35px] flex flex-col justify-center items-center bg-black rounded-full bg-opacity-50">
            <AiOutlineLeft size={15} />
          </div>
          <div className="flex flex-row gap-4">
            <div className="px-2 flex flex-row items-center justify-center gap-2 bg-black rounded-md bg-opacity-50 border-[1px]">
              <BiImageAdd size={20} />
              <div className="text-xs font-semibold">Add Photos</div>
            </div>
            <div className="w-[35px] h-[35px] flex flex-col justify-center items-center bg-black rounded-full bg-opacity-50">
              <AiOutlineEye size={20} />{" "}
            </div>
          </div>
        </div>
        <div className="absolute text-left text-white bottom-0 mx-8">
          <div className="my-6 flex flex-col gap-2">
            <p className="text-3xl font-sans font-bold tracking-wide">
              Savita Shrimant Gaikwad
            </p>
            <p className="text-medium font-sans font-medium tracking-wide">
              ID - VSUV3519
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-end gap-4 px-4 pt-8 border-b-[0.5px] text-gray-600">
        <button
          onClick={() => setActive(true)}
          className={`text-sm font-sans font-bold tracking-wide border-b-[3px] ${
            active ? "border-[#d8465c]" : "border-white"
          }  px-2 py-2`}
        >
          {" "}
          About Me
        </button>
        <button
          onClick={() => setActive(false)}
          className={`text-sm font-sans font-bold tracking-wide border-b-[3px] ${
            active ? "border-white" : "border-[#d8465c]"
          }  px-2 py-2`}
        >
          {" "}
          Family
        </button>
      </div>

      <div className="px-4 pt-4 pb-40">
        {active ? <EditMyProfile/>:<EditPartnerProfile/>}
      </div>
    </div>
  );
};

export default Profile;

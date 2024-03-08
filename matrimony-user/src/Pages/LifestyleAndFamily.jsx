import React from "react";
import RegistrationHeader from "../Components/Common/RegistrationHeader";
import { WhyRegister } from "../Data/Registration/WhyRegister";
import { Link } from "react-router-dom";

const LifestyleAndFamily = () => {
  return (
    <div>
      <RegistrationHeader />
      <div className="flex flex-col justify-center items-center">
        <div className="w-[990px] flex flex-col justify-center items-center">
          <p className="text-[22px] text-gray-600 mt-10">
            Great! You are about to complete your Jeevansathi profile.
          </p>
          <div className="flex flex-row justify-center item-center gap-10 my-10">
            <div className="">
              <form className="flex flex-col items-end gap-8" action="">
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Family type</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Father's Occupation</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Mother's Occupation</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Brother</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Sister</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Family living in</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className=" text-[16px]">Contact address</p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <div className="flex flex-row gap-4">
                  <p className=" text-[16px]">About my family</p>
                  <textarea
                    className="w-[500px] h-[150px] rounded-sm text-black text-sm border-[1px] border-gray-300 px-4 pt-2"
                    placeholder="Write about your parents and brothers or sisters. Where do they live? What are they doing?"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="flex flex-row justify-center items-center gap-6 mr-[98px]"><Link to="/registration/desired-partner-profile">
                  <button className="bg-[#d9475c] text-white w-[250px] h-[50px] text-xl">
                    Add to my profile
                  </button>
                </Link>
                <Link to="/registration/desired-partner-profile"><p className="text-[16px]">I will add this later</p></Link></div>
                
              </form>
            </div>
            <div className=" flex flex-col items-center text-center w-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleAndFamily;

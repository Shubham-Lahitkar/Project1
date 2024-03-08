import React from "react";
import RegistrationHeader from "../Components/Common/RegistrationHeader";
import {WhyRegister} from "../Data/Registration/WhyRegister";
import { Link } from "react-router-dom";

const ProfileDetails = () => {

  return (
    <div>
      <RegistrationHeader />
      <div className="flex flex-col justify-center items-center">
      <div className="w-[990px] flex flex-col justify-center items-center">
        <p className="text-[22px] text-gray-600 mt-10">
          Complete your profile now to contact members you like and to receive
          interests
        </p>
        <div className="flex flex-row justify-center item-center gap-10 my-10">
          <div className="">
            <form className="flex flex-col items-end gap-8" action="">
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Groom's Name <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Date of Birth <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Mother Tongue <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Religion <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Caste <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Are ou manglik? <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Match is necessary? <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Marital status <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <label className="flex flex-row justify-center items-center gap-4">
                <p className="flex flex-row gap-1 text-[16px]">
                  Height <p className="text-[30px] text-[#d9475c]"><sup > *</sup></p>
                </p>
                <input
                  className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                  type="text"
                  placeholder=""
                />
              </label>
              <Link to="/registration/career-details"><button className="bg-[#d9475c] text-white mr-[300px] w-[200px] h-[50px] text-xl">Continue</button></Link>
              
            </form>
          </div>
          <div className=" flex flex-col items-center text-center w-[120px]">
            <div className="py-2 border-b-2 border-gray-500 text-[16px]">WHY REGISTER</div>
            <div  className="py-5">
              {WhyRegister.map((ele, index) => {
                return (
                  <div className="flex flex-col justify-center items-center" key={index}>
                    <img src={ele.image} alt="" />
                    <div>{ele.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProfileDetails;

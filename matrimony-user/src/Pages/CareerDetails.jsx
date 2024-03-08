import React, { useState } from "react";
import RegistrationHeader from "../Components/Common/RegistrationHeader";
import { Link } from "react-router-dom";

const CareerDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
                  <p className="flex flex-row gap-1 text-[16px]">
                    Country{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    State{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    City living in{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    Pincode{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    Higest Degree{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    Employed In{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    Occupation{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-row justify-center items-center gap-4">
                  <p className="flex flex-row gap-1 text-[16px]">
                    Annual Income{" "}
                    <p className="text-[30px] text-[#d9475c]">
                      <sup> *</sup>
                    </p>
                  </p>
                  <input
                    className="w-[500px] h-[50px] rounded-sm text-black px-2 text-sm border-[1px] border-gray-300"
                    type="text"
                    placeholder=""
                  />
                </label>
              </form>
            </div>
            <div className=" flex flex-col items-center text-center w-[100px]"></div>
          </div>
        </div>
        <div className="w-[990px] h-[2px] bg-gray-300"></div>
        <div className="w-[990px] flex flex-col justify-center items-center  gap-8 my-10">
          <p className="text-[22px] text-gray-600 ">
            Here is your chance to make your profile stand out!
          </p>
          <div className="w-[500px] flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div className="h-5 w-14 rounded-full bg-[#E5E7EB] shadow-inner"></div>
                  <div className="dot shadow-switch-1 absolute left-0 -top-1 h-7 w-7 rounded-full bg-white transition"></div>
                </div>
              </label>
              <p>Write in Hindi</p>
            </div>
            <div className="text-[#d9475c]">need help writing?</div>
          </div>
          <div className="flex flex-row justify-center item-center">
            <div className="">
              <form className="flex flex-col item-center gap-8" action="">
                <textarea
                  className="w-[500px] h-[150px] rounded-sm text-black text-sm border-[1px] border-gray-300 px-4 pt-2"
                  placeholder="Express Yourself!"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                

                <Link to="/registration/lifestyle-and-family">
                  <button className="bg-[#d9475c] text-white w-[250px] h-[50px] text-xl">
                    Complete Registration
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;

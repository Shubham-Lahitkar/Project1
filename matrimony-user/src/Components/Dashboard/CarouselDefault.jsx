import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { FiFilter } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import Dummy from "../../Assets/Dashboard/Dummy.jpg";
import Image from "../../Assets/Dashboard/ProfileImage.png";

import { PreferenceList } from "../../Data/Matches/PreferenceList";
import { DesiredLifestyle } from "../../Data/Matches/DesiredLifestyle";
import { DesiredEducation } from "../../Data/Matches/DesiredEducation";

export function CarouselDefault() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="mb-[500px]">
            <div className="flex flex-row items-center justify-start px-4 py-3 gap-2">
              <button className="flex flex-row justify-center items-center gap-2 px-4 py-2 border-[0.5px] border-gray-300 text-gray-700  text-sm  font-medium tracking-wide font-sans rounded-full">
                <span>
                  <FiFilter color="#d8465c"/>
                </span>
                Filters
              </button>
              <button className="px-4 py-2 border-[0.5px] border-gray-300 text-gray-700  text-sm  font-medium tracking-wide font-sans rounded-full">
                Verified
              </button>
              <button className="px-4 py-2 border-[0.5px] border-gray-300 text-gray-700  text-sm  font-medium tracking-wide font-sans rounded-full">
                Just joined
              </button>
              <button className="px-4 py-2 border-[0.5px] border-gray-300 text-gray-700  text-sm  font-medium tracking-wide font-sans rounded-full">
                Nearby
              </button>
            </div>
            <div className="relative w-full h-[360px]">
              <img className="absolute" src={Dummy} alt="" />
              <div className="absolute flex flex-row gap-4 text-white top-5 right-0 mx-8 ">
                <div className="p-2 bg-black rounded-full bg-opacity-50">
                  <BiPhotoAlbum />
                </div>
                <div className="p-2 bg-black rounded-full bg-opacity-50">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="absolute text-left text-white bottom-0 mx-8">
                <div className="my-4 flex flex-col gap-1">
                  <p className="text-sm font-sans font-normal tracking-wide">
                    Last seen on 30-0ct-23
                  </p>
                  <p className="text-2xl font-sans font-bold tracking-wide">
                    Savita Shrimant Gaikwad, 21
                  </p>
                  <p className="text-sm font-sans font-medium tracking-wide">
                    ID - VSUV3519
                  </p>
                </div>

                <div className="flex flex-row justify-start items-end gap-8">
                  <button className="text-sm font-sans font-bold tracking-wide border-b-[3px] border-[#d8465c] px-2 py-2">
                    {" "}
                    About Me
                  </button>
                  <button className="text-sm font-sans text-gray-300 font-medium tracking-wide mb-[3px]  px-2 py-2">
                    {" "}
                    Family
                  </button>
                  <button className="text-sm font-sans text-gray-300 font-medium tracking-wide mb-[3px] px-2 py-2">
                    {" "}
                    Looking For
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 mx-4 py-6">
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>Profile managed by Sibling</p>
              </div>
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>4' 11"</p>
              </div>
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>Hindu • Maratha 96 Kuli Maratha</p>
              </div>
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>Mother tongue is Marathi</p>
              </div>
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>Pune/ Chinchwad, India</p>
              </div>
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>Rs. O - 1 Lakh per Annum</p>
              </div>
              <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide px-2 py-2">
                <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
                <p>Never Married</p>
              </div>
            </div>
            <div className="flex flex-row items-center bg-[#fef0f3] rounded-xl mx-4 mb-4 px-2 py-4 gap-4">
              <div className="w-[50px]">
                <img src={Image} alt="" />
              </div>

              <div className="flex flex-col justify-center items-start">
                <p className="text-base font-bold tracking-wide text-gray-700 font-sans">
                  It's an 76% Match!
                </p>
                <p className="text-sm  font-medium font-sans text-gray-500">
                  Based on mutual preferences
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mx-4 py-8">
              <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
                Education
              </p>
              <div className="flex flex-row justify-left items-center gap-6  px-2 py-6">
                <RiUserSettingsLine fontSize={20} color="#768493" />
                <p className="text-gray-800 font-sans font-semibold text-base tracking-wide">
                  B.A - Undergraduate Degree
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mx-4">
              <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
                Contact
              </p>
              <div className=" w-full flex flex-col items-start justify-center bg-[#fef0f3] rounded-xl  px-6 py-6 my-6 ">
                <p className="text-base font-bold tracking-wide text-gray-700 font-sans mb-1">
                  Go Premium to contact matches
                </p>
                <p className="text-sm  font-medium font-sans text-gray-600 tracking-wide text-left mb-4">
                  Inititate a voice or a video call with the profiles you like
                  by upgrading to a membership
                </p>
                <p className="text-[#d8465c] text-base font-bold tracking-wide font-sans">
                  Upgrade Now
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mx-4 pt-8">
              <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
                Career
              </p>
              <div className="flex flex-row justify-left items-center gap-6  px-2 py-6">
                <RiUserSettingsLine fontSize={20} color="#768493" />
                <div>
                  <p className="text-gray-800 font-sans font-semibold text-base tracking-wide">
                    Looking for job
                  </p>
                  <p className="text-sm  font-medium font-sans text-gray-400 tracking-wide text-left">
                    Not Working
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mx-4 pt-8">
              <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
                Kundli and Astro
              </p>
              <div className="flex flex-row justify-left items-center gap-6  px-2 py-6">
                <RiUserSettingsLine fontSize={20} color="#768493" />
                <p className="text-gray-800 font-sans font-semibold text-base tracking-wide">
                  Jan 26, 2002
                </p>
              </div>
              <p className="text-[#d8465c] font-sans font-semibold text-base tracking-wide">
                Request horoscope
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1 mx-4 pt-12">
              <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
                Who is she looking for...
              </p>
              <p className="text-sm  font-medium font-sans text-gray-600 tracking-wide text-left mb-4">
                These are her desired partner qualities
              </p>
            </div>
            <div className="flex flex-row justify-between items-center mx-4 my-4">
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-gray-800 font-sans font-semibold text-base tracking-wide">
                  Her Preference
                </p>
                <div className="w-[60px]">
                  <img src={Image} alt="" />
                </div>
              </div>
              <div className=" ">
                <p className="bg-gray-200 rounded-lg text-sm  font-medium font-sans text-gray-600 tracking-wide text-left px-4 py-2 mt-10">
                  You match 7/11 of her preference
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-gray-800 font-sans font-semibold text-base tracking-wide">
                  You Match
                </p>
                <div className="w-[60px]">
                  <img src={Image} alt="" />
                </div>
              </div>
            </div>
            <div className="mx-4 mt-4">
              <p className="text-gray-800 font-sans font-semibold text-left text-base tracking-wide py-2">
                Basic Details
              </p>
              <div className="">
                {PreferenceList.map((element, index) => {
                  return (
                    <div
                      className="flex flex-row justify-between items-center py-4 border-b-[1px] "
                      key={index}
                    >
                      <div className=" text-sm font-medium font-sans  tracking-wide text-left">
                        <p className="text-gray-600">{element.key}</p>
                        <p className="text-gray-400">{element.value}</p>
                      </div>
                      <FiCheck color="#31ab3d" size={25} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mx-4 mt-10">
              <p className="text-gray-800 font-sans font-semibold text-left text-base tracking-wide py-2">
                Desired Education & Occupation
              </p>
              <div className="">
                {DesiredEducation.map((element, index) => {
                  return (
                    <div
                      className="flex flex-row justify-between items-center py-4 border-b-[1px] "
                      key={index}
                    >
                      <div className=" text-sm font-medium font-sans  tracking-wide text-left">
                        <p className="text-gray-600">{element.key}</p>
                        <p className="text-gray-400">{element.value}</p>
                      </div>
                      <FiCheck color="#31ab3d" size={25} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mx-4 mt-10">
              <p className="text-gray-800 font-sans font-semibold text-left text-base tracking-wide py-2">
                Desired Lifestyle
              </p>
              <div className="">
                {DesiredLifestyle.map((element, index) => {
                  return (
                    <div
                      className="flex flex-row justify-between items-center py-4 border-b-[1px] "
                      key={index}
                    >
                      <div className=" text-sm font-medium font-sans  tracking-wide text-left">
                        <p className="text-gray-600">{element.key}</p>
                        <p className="text-gray-400">{element.value}</p>
                      </div>
                      <FiCheck color="#31ab3d" size={25} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

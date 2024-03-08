import React from "react";
import UploadPhotosHeader from "../Components/Common/UploadPhotosHeader";
import ProfileImage from "../Assets/Registration/5.png";
import ImageOne from "../Assets/Registration/6.png";
import ImageTwo from "../Assets/Registration/7.png";
import ImageThree from "../Assets/Registration/8.png";
import ImageFour from "../Assets/Registration/9.png";
import Imagefive from "../Assets/Registration/10.png";
import { FiMonitor } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const UploadPhotos = () => {
  return (
    <div className="absolute w-full pb-[100px] bg-[#e7e6e6]">
      <UploadPhotosHeader />
      <div className="w-[990px] mx-auto flex flex-col justify-center">
        <Link to="/dashboard/matches">
        <div className="text-right text-xs underline pt-4">
          I will do this later
        </div>
        </Link>
        <div className="text-center text-2xl font-thin text-gray-500 mt-2 mb-6">
          Profile with photos get 8 times more responses
        </div>
        <div className="flex flex-row  items-center justif-center  bg-[#f0f2f7] border-b-[1px] border-gray-300">
          <div>
            <img className="w-[300px]" src={ProfileImage} alt="" />
          </div>
          <div className="flex flex-col justify-center item-center text-center gap-6 py-4 px-6 ">
            <p className="text-2xl font-thin text-gray-600">
              Upload photos from
            </p>
            <div className="flex flex-row justify-center items-center gap-8">
              <div className="flex flex-row justify-center items-center text-white">
                <div className="bg-[#de5d70] w-[64px] h-[64px] flex justify-center items-center text-4xl">
                  <FiMonitor />
                </div>
                <div className="bg-[#e15065] w-[270px] h-[64px] flex justify-center items-center text-2xl font-bold">
                  My Computer
                </div>
              </div>
              <div className="flex flex-row justify-center items-center text-white">
                <div className="bg-[#536da5] w-[64px] h-[64px] flex justify-center items-center text-4xl">
                  <FaFacebookF />
                </div>
                <div className="bg-[#3b5998] w-[270px] h-[64px] flex justify-center items-center text-2xl font-bold">
                  Facebook
                </div>
              </div>
            </div>
            <p className="px-[100px] text-gray-500">
              Strong Photo Privacy Options | No downloads allowed | Photos are
              Watermarked Jpeg, Jpg, PNG | Upto 10MB | 20 photos only
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-600 px-10 py-5">
          <div>
            <p className="text-lg">Photo Privacy</p>
            <div className="flex flex-col  py-5 gap-2">
              <div class="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-base font-medium text-gray-600 dark:text-gray-300"
                >
                  Visible to All (Recommended)
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-base font-medium text-gray-600 dark:text-gray-300"
                >
                  Visibility only to paid members
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-base font-medium text-gray-600 dark:text-gray-300"
                >
                  Visible ONLY to those you have accepted or expressed interest
                  in.
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-10 py-10">
            <div className="text-center">
              <p className="text-xl mb-5">What to avoid</p>
              <p className="text-sm">Do not upload photos that look like any of these</p>
            </div>
            <img className="w-[150px]" src={ImageOne} alt="" />
            <img className="w-[150px]" src={ImageThree} alt="" />
            <img className="w-[150px]" src={ImageTwo} alt="" />
            <img className="w-[150px]" src={ImageFour} alt="" />
          </div>
          <div className="flex flex-row justify-between">
          <img className="w-[180px]" src={Imagefive} alt="" />
          <img className="w-[180px]" src={Imagefive} alt="" />
          <img className="w-[180px]" src={Imagefive} alt="" />
          <img className="w-[180px]" src={Imagefive} alt="" />
          <img className="w-[180px]" src={Imagefive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;

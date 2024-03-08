import React from "react";
import { FiFilter } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Title from "./Title";
import { MdEdit } from "react-icons/md";

const EditPartnerProfile = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Basic Details */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
            Basic Details
          </p>
          <MdEdit color="#808080" fontSize={22} />
        </div>
        <div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>Profile managed by Sibling</p>
          </div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" /> <p>4' 11"</p>
          </div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>Hindu • Maratha 96 Kuli Maratha</p>
          </div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>Mother tongue is Marathi</p>
          </div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>Doesn't Matter</p>
          </div>
        </div>
      </div>
      {/* Education and Occupation */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
            Education and Occupation
          </p>
          <MdEdit color="#808080" fontSize={22} />
        </div>
        <div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                Highest degree achieved
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                Occupation could be
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                hould be earning
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Religion and Ethnicity */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
          Religion and Ethnicity
          </p>
          <MdEdit color="#808080" fontSize={22} />
        </div>
        <div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                Highest degree achieved
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                Occupation could be
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                hould be earning
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Lifestyle and Appearance*/}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
          Lifestyle and Appearance
          </p>
          <MdEdit color="#808080" fontSize={22} />
        </div>
        <div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                Highest degree achieved
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                Occupation could be
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-left items-center gap-6 py-4 border-b-[1px]">
            <RiUserSettingsLine fontSize={20} color="#768493" />
            <div>
              <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide pb-1">
                hould be earning
              </p>
              <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
                Doesn't Matter
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About My Partner */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center  ">
          <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
          About My Partner
          </p>
          <div className="text-sm font-sans font-bold tracking-wide text-[#d8465c]">Add</div>

        </div>
        <input className="rounded-lg border-[1px] px-4 py-4" type="text" placeholder="Write your thoughts about your partner..." />
      </div>
    </div>
  );
};

export default EditPartnerProfile;

import React from "react";
import { FiFilter } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Title from "./Title";

const EditMyProfile = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Basic Details */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"Basic Details"}
          sub={"Brief outline of personal information"}
        />
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
            <p>Pune/ Chinchwad, India</p>
          </div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>Rs. O - 1 Lakh per Annum</p>
          </div>
          <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>Never Married</p>
          </div>
        </div>
      </div>
      {/* About Me */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title main={"About Me"} sub={"Describe yourself in a few words"} />{" "}
        <p className="text-sm  font-medium font-sans text-gray-600 tracking-wide text-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          autem, amet iste debitis sapiente, illum ipsam nostrum temporibus odit
          asperiores eligendi soluta recusandae! Deserunt tempore perspiciatis
          velit. Optio dolorem autem ut eius laudantium enim! Vero aperiam, est
          fugiat voluptate aut et iure. Quos perspiciatis consequuntur porro ab,
          laudantium a facere!{" "}
        </p>
        <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
          <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
          <p>Profile managed by self</p>
        </div>
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide">
          <p className=" text-gray-500 ">Disability, Thalassemia, HIV+</p>
          <div className="text-[#d8465c]">Add</div>
        </div>
      </div>
      {/* Education */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"Education"}
          sub={"Showcase your educational qualification"}
        />
        <div className="flex flex-row justify-left items-center gap-6">
          <RiUserSettingsLine fontSize={20} color="#768493" />
          <div>
            <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide">
              B.E/B.Tech - Undergraduate Degree{" "}
            </p>
            <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
              UG College
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide">
          <p className=" text-gray-500 ">School Name, UG College</p>
          <div className="text-[#d8465c]">Add</div>
        </div>
      </div>
      {/* Career */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"Career"}
          sub={"Give a glimpse of your professinal life"}
        />
        <div className="flex flex-row justify-left items-center gap-6">
          <RiUserSettingsLine fontSize={20} color="#768493" />
          <div>
            <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide">
              Software Professional
            </p>
            <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
              Government/Public Sector
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide">
          <p className=" text-gray-500 ">Organisation Name</p>
          <div className="text-[#d8465c]">Add</div>
        </div>
      </div>
      {/* Family */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"Family"}
          sub={"Introduce our family members, values and background"}
        />
        <div className="flex flex-row justify-left items-center gap-4 text-gray-600 font-sans font-medium text-sm tracking-wide py-2">
          <RiUserSettingsLine fontSize={20} color="#768493" /> <p>From India</p>
        </div>
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide gap-10">
          <p className=" text-gray-500 ">
            Family Status, Family Type, Family Value, Gothra, Fathers
            Occupation, Mothers Occupation, Brother(s), Sister(s), Living with
            parents?
          </p>
          <div className="text-[#d8465c]">Add</div>
        </div>
      </div>
      {/* Contact */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"Contact"}
          sub={"Details that would help profiles get in touch with you"}
        />
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide">
          <div className="flex flex-row gap-4 text-gray-800 ">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>gauravkhalase12@gmail.com</p>
          </div>
          <div className="text-[#d8465c]">Verify</div>
        </div>
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide">
          <div className="flex flex-row gap-4 text-gray-800 ">
            <RiUserSettingsLine fontSize={20} color="#768493" />{" "}
            <p>+91 9658247852</p>
          </div>
          <div className="text-[#d8465c]">Verify</div>
        </div>
        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide">
          <p className=" text-gray-600 ">
            Alternate Email, Alternate Mobile No.
          </p>
          <div className="text-[#d8465c]">Add</div>
        </div>
      </div>
      {/* Kundli and Astro */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"Kundli and Astro"}
          sub={"These details help increase chances of compatibility"}
        />
        <div className="flex flex-row justify-left items-center gap-6">
          <RiUserSettingsLine fontSize={20} color="#768493" />
          <div>
            <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide">
              Non Manglik
            </p>
            <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
              Nakshatra
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-left items-center gap-6">
          <RiUserSettingsLine fontSize={20} color="#768493" />
          <div>
            <p className="text-gray-900 font-sans font-semibold text-medium tracking-wide">
              1 Jan 2000 • Time of Birth
            </p>
            <p className="text-xs  font-medium font-sans text-gray-500 tracking-wide text-left">
              Place of birth
            </p>
          </div>
        </div>
      </div>
      {/* My Lifestyle & Interests */}
      <div className="px-5 py-8 shadow-md flex flex-col gap-4">
        <Title
          main={"My Lifestyle & Interests"}
          sub={"Give other profiles a glimpse of your favourite activities"}
        />
        <p className=" text-gray-900 text-base font-sans font-medium tracking-wide">
          Habbits
        </p>
        <div className="flex flex-row justify-start gap-4">
          <div className="flex flex-col gap-4 p-4 border-[1px] text-gray-500 rounded-md">
            <BiPhotoAlbum fontSize={20} />
            <p className="text-xs  font-medium font-sans  tracking-wide">
              Add Drinking Habits
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 border-[1px] text-gray-500 rounded-md">
            <BiPhotoAlbum fontSize={20} />
            <p className="text-xs  font-medium font-sans  tracking-wide">
              Add Drinking Habits
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 border-[1px] text-gray-500 rounded-md">
            <BiPhotoAlbum fontSize={20} />
            <p className="text-xs  font-medium font-sans  tracking-wide">
              Add Drinking Habits
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center font-sans font-medium text-sm tracking-wide gap-10">
          <p className=" text-gray-900 text-base">Assets</p>
          <div className="text-[#d8465c]">Add</div>
        </div>
      </div>
    </div>
  );
};

export default EditMyProfile;

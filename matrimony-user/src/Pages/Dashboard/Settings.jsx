import React from "react";
import DashboardPagesHeader from "../../Components/Common/DashboardPagesHeader";
import { AiOutlineSetting } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Settings = () => {
  const settings = [
    {
      id: 1,
      icon: <AiOutlineSetting />,
      title: "Privacy Settings",
    },
    {
      id: 2,
      icon: <AiOutlineSetting />,
      title: "Alert Manager",
    },
    {
      id: 3,
      icon: <AiOutlineSetting />,
      title: "Hide Profile",
    },
    {
      id: 4,
      icon: <AiOutlineSetting />,
      title: "Delete Profile",
    },
    {
      id: 5,
      icon: <AiOutlineSetting />,
      title: "Change Password",
    },
  ];
  return (
    <div className="min-h-[600px]">
      <DashboardPagesHeader page="Account & Settings" />
      <div className="text-md font-sans font-medium text-gray-500 text-center tracking-wider mb-16 -mt-5">Update these details to get suitable matches</div>
      <div className="text-xs font-sans font-medium text-gray-500 text-left tracking-wide px-10 py-2">Manage Account</div>
      <div className=" flex flex-col gap-3 px-10 ">
        {settings.map((item) => {
          return (
            <div
              className="flex flex-row justify-between items-center border-b-[0.5px] border-gray-200 py-3"
              key={item.id}
            >
              <div className="flex flex-row justify-center items-center gap-4 ">
                <div className="text-gray-500 text-2xl">{item.icon}</div>
                <div className="text-lg font-sans font-semibold text-gray-500 text-center tracking-wide">{item.title}</div>
              </div>
              <div className="text-gray-500 text-xl">
                <FiChevronRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;

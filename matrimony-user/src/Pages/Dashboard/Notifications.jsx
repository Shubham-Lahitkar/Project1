import React from "react";
import DashboardPagesHeader from "../../Components/Common/DashboardPagesHeader";
import ProfileImage from "../../Assets/Dashboard/ProfileImage.png";

const notifications = [
  {
    id: 1,
    image: `${ProfileImage}`,
    title:
      "1Your profile is now live! Start sending interests to matches you like!",
    Duration: "1w",
  },
  {
    id: 2,
    image: `${ProfileImage}`,
    title:
      "2Your profile is now live! Start sending interests to matches you like!",
    Duration: "1w",
  },
  {
    id: 3,
    image: `${ProfileImage}`,
    title:
      "3Your profile is now live! Start sending interests to matches you like!",
    Duration: "1w",
  },
  {
    id: 4,
    image: `${ProfileImage}`,
    title:
      "4Your profile is now live! Start sending interests to matches you like!",
    Duration: "1w",
  },
];

const newNotifications = notifications.reverse();

const Notifications = () => {
  return (
    <div className="min-h-[600px]">
      <DashboardPagesHeader page="What's New?" />
      <div className="px-10 py-2 text-medium font-sans font-semibold text-gray-600 tracking-wide">Older</div>
      <div className="flex flex-col gap-4 px-8 pt-2 pb-10">
        {newNotifications.map((item) => {
          return (
            <div className="flex flex-row justify-between items-start gap-4 px-5 py-2 bg-[#ffe7ea] rounded-md text-medium font-sans font-semibold text-gray-600 tracking-wide" ket={item.id}>
              <div className="w-[50px] ">
                <img className="rounded-full" src={item.image} alt="" />
              </div>
              <div>{item.title}</div>
              <div>{item.Duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;

import React, { useState } from "react";
import Matches from "./Matches";
import Activity from "./Activity";
import Search from "./Search";
import Messanger from "./Messanger";
import BlockedProfiles from "./BlockedProfiles";
import Phonebook from "./Phonebook";
import Settings from "./Settings";
import Profile from "./Profile";
import Notifications from "./Notifications";
import ProfileNavbar from "../../Components/Dashboard/ProfileNavbar"
import LeftSideCard from "../../Components/Dashboard/LeftSideCard"
import UpgradeCard from "../../Components/Dashboard/UpgradeCard"

const Dashboard = () => {
  const [menu, setMenu] = useState(false);

  const token = window.location.pathname.split("/").at(-1);
  console.log(token);

  return (
    <div className={`bg-[#f6f7fa] min-h-screen pb-32 ${menu ? "" : ""} no-scrollbar`}>
      <ProfileNavbar menu={menu} setMenu={setMenu} />

      <div
        onClick={() => setMenu(false)}
        className=" relative top-24 max-w-[1250px] mx-auto flex flex-row gap-6"
      >
        <LeftSideCard />
        <div className="relative w-[650px] bg-white  rounded-lg flex flex-col items-center shadow-md">
          {token === "profile" ? <Profile /> : <div></div>}
          {token === "matches" ? <Matches /> : <div></div>}
          {token === "activity" ? <Activity /> : <div></div>}
          {token === "search" ? <Search /> : <div></div>}
          {token === "messenger" ? <Messanger /> : <div></div>}
          {token === "blocked-profiles" ? <BlockedProfiles /> : <div></div>}
          {token === "notifications" ? <Notifications /> : <div></div>}
          {token === "phonebook" ? <Phonebook /> : <div></div>}
          {token === "settings" ? <Settings /> : <div></div>}
        </div>
        <UpgradeCard />
      </div>
    </div>
  );
};

export default Dashboard;

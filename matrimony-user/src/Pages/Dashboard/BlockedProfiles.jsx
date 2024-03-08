import React from "react";
import DashboardPagesHeader from "../../Components/Common/DashboardPagesHeader";
import { Link } from "react-router-dom";

const BlockedProfiles = () => {
  return (
    <div className="min-h-[600px]">
      <DashboardPagesHeader page="Blocked/Ignored Members" />
      <div className="h-[450px] flex flex-col justify-center items-center px-8">
        <p className="text-lg font-sans font-medium text-gray-900 tracking-wide">Review all your blocked profiles here!</p>
        <p className="text-md font-sans font-semibold text-gray-500 text-center tracking-wide">
          Blocking profiles that you dislike would mean that they no longer see
          you on Jeevansathi
        </p>
        <Link to="/dashboard/matches">
          <p className="text-md font-sans font-semibold text-[#d8465c] text-center tracking-wide my-4">View Matches</p>
        </Link>
      </div>
    </div>
  );
};

export default BlockedProfiles;

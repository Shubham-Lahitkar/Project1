import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router";

const DashboardPagesHeader = (props) => {
    const navigate = useNavigate();

  return (
    <div className="w-[650px] h-[80px] flex flex-row justify-between items-center px-10">
      <div onClick={() => navigate(-1)} className="w-[20px]">
        <FiChevronLeft color="#616161" fontSize={24}></FiChevronLeft>
      </div>
      <div className="text-2xl font-semibold font-sans text-gray-700 tracking-wide">{props.page}</div>
      <div className="w-[20px]"></div>
    </div>
  );
};

export default DashboardPagesHeader;

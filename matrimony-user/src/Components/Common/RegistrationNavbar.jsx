import React from "react";
import logo from "../../Assets/Common/desktopLogo.svg";

const RegistrationNavbar = () => {
  return (
    <div>
      <div
        className={`relative top-9 z-50 w-[990px] h-[64px] bg-[#36495c] mx-auto flex flex-row justify-between `}
        
      >
        <div className="flex flex-row justify-between gap-8">
          <div className="w-[165px] bg-white flex justify-center items-center ">
            <img className="h-[64px] m-auto" src={logo} alt="" />
          </div>
          <div className="flex flex-row justify-center items-center text-white text-sm font-medium uppercase sans-serif gap-12"></div>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <div className="flex justify-center items-center px-[20px] text-white text-sm font-medium uppercase sans-serif">
            LIVE CHAT
          </div>
          <div className="flex justify-center items-center px-[20px] text-white text-sm font-medium uppercase sans-serif">
            1-800-419-6299 (Toll Free)
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RegistrationNavbar;

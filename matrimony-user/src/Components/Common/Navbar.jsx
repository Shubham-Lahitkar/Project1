import React, { useState } from "react";
import logo from "../../Assets/Common/desktopLogo.svg";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({margin}) => {
  const [isShown, setIsShown] = useState(false);
  const [isSearchShown, setIsSearchShown] = useState(false);

  const browseProfiles = [
    "MOTHER TOUNGUE",
    "CASTE",
    "RELIGION",
    "CITY",
    "OCCUPATION",
    "STATE",
    "NRI",
    "COLLAGE",
  ];

  return (
    <div className={`fixed ${margin} z-50 w-[990px] h-[64px] bg-[#334759] mx-auto flex flex-row justify-between `}>
      <div className="flex flex-row justify-between gap-8">
        <div className="w-[165px] bg-white flex justify-center items-center ">
          <img className="h-[64px] m-auto" src={logo} alt="" />
        </div>

        <div className="flex flex-row justify-center items-center text-white text-sm font-medium uppercase sans-serif gap-12">
          <div
            className="flex flex-row justify-center items-center gap-1 h-full"
            onMouseOver={() => setIsShown(true)}
            onMouseOut={() => setIsShown(false)}
          >
            <p>Browse profiles by</p>
            <div className="h-[20px] w-[20px]">
              <BiChevronDown fontSize={20} color="white" fontWeight="thin" />
              <div className="mt-[22px] -ml-[193px]  ">
                {isShown && (
                  <div
                    className="relative z-30 bg-[#34495e] w-[200px] pb-6 flex flex-col " 
                  >
                    {browseProfiles.map((ele, i) => {
                      return (
                        <div
                          key={i}
                          className="text-sm font-medium "
                          onMouseOut={() => setIsShown(false)}

                        >
                          <div className="flex flex-row justify-between bg-transparent hover:bg-[#d9475c] px-[20px] py-[12px] font-medium">
                            {ele}
                            <BsChevronRight />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="flex flex-row justify-center items-center gap-1 h-full "
            onMouseOver={() => setIsSearchShown(true)}
            onMouseOut={() => setIsSearchShown(false)}
          >
            <p>Search</p>
            <div className="h-[20px] w-[20px]">
              <BiChevronDown fontSize={20} color="white" fontWeight="thin" />
              <div className="mt-[22px] -ml-[80px]">
                {isSearchShown && (
                  <div
                    className="relative z-30 bg-[#34495e] w-[250px] flex flex-col " 
                  >
                    {["Search","Search by Profile ID"].map((ele, i) => {
                      return (
                        <div
                          key={i}
                          className="text-sm font-medium "
                          onMouseOut={() => setIsSearchShown(false)}

                        >
                          <div className="flex flex-row justify-between bg-transparent hover:bg-[#d9475c] px-[20px] py-[14px] text-xs font-semibold">
                            {ele}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <Link to="/help"><div>Help</div>
          </Link>
          
        </div>
      </div>
      <div className="flex justify-center items-center px-[50px] text-white text-sm font-medium uppercase sans-serif">
        Login
      </div>
    </div>
  );
};

export default Navbar;

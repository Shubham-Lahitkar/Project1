import React from "react";

const Header = (props) => {
  return (
    <div>
      <p className="text-md text-left font-sans font-medium tracking-wide text-[#df5b6f] py-2"> {props.titleOne}</p>
      <p className="text-xl text-left font-sans font-bold tracking-wide text-gray-600 "> {props.titleTwo}</p>
      <p className="text-sm text-left font-sans font-medium tracking-wide text-gray-500 py-1"> {props.titleThree}</p>
    </div>
  );
};

export default Header;

import React from "react";
import { MdEdit } from "react-icons/md";

const Title = ({ main, sub }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col items-start justify-center gap-1 ">
        <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
          {main}{" "}
        </p>
        <p className="text-sm  font-medium font-sans text-gray-500 tracking-wide text-left ">
          {sub}{" "}
        </p>
      </div>
      <MdEdit color="#808080" fontSize={22} />
    </div>
  );
};

export default Title;

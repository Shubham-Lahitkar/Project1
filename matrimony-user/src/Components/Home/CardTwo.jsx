import React from "react";
import { Distance } from "../../Data/Distance";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 w-[350px] ">
      {Distance.map((item, index) => {
        return (
          <div
            key={index}
          >
            <div className="flex flex-col justify-center items-start gap-1 text-gray-400 hover:text-black">
              <p className="text-xl font-semibold">{item.heading}</p>
              <div className="h-[1.5px] w-[50px] bg-[#d9475c]"></div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

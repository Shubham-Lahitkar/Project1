import React from "react";
import { BringTogether } from "../../Data/BringTogether";

const Card = ({ cardData }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-4">
      {BringTogether.map((item, index) => {
        return (
          <div
            className="flex flex-col justify-center items-start gap-4"
            key={index}
          >
            <img className="w-[50px]" src={item.image} alt="" />
            <div className="flex flex-col justify-center items-start gap-1">
              <p className="text-md font-semibold">{item.heading}</p>
              <div className="h-[2px]  w-[40px] bg-[#d9475c]"></div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

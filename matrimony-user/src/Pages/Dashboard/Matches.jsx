import React from "react";
import { CarouselDefault } from "../../Components/Dashboard/CarouselDefault";

import { BiStar,BiMailSend } from "react-icons/bi";
import { BsChat } from "react-icons/bs";

const Matches = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CarouselDefault />
      <div className="fixed bottom-6 z-50 w-[580px] flex flex-row justify-around items-center bg-[#d8465c] py-[16px] px-4 rounded-lg text-white ">
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]"> 
          <BiMailSend size={22}/>
          <p className="text-sm font-sans font-bold tracking-wider">Send Interest</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]">
          <BiStar  size={22}/>
          <p className="text-sm font-sans font-bold tracking-wider">Shortlist</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]">
          <BsChat  size={20}/>
          <p className="text-sm font-sans font-bold tracking-wider">Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Matches;

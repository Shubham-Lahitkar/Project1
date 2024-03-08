import React, { useState } from "react";

const Messanger = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="h-[600px] flex flex-col justify-center items-center">
      <div className="fixed z-50 bg-white top-24 w-[650px]   border-b-[0.5px] border-gray-200 pt-6 px-8">
        <p className="text-gray-700 text-xl font-sans font-bold tracking-wide ">
          Education
        </p>
        <div className="flex flex-row justify-start items-end gap-4 pt-6">
          <button
            onClick={() => setActive(0)}
            className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
              active === 0 ? " border-[#c94055]" : "border-white"
            }`}
          >
            Acceptances
          </button>
          <button
            onClick={() => setActive(1)}
            className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
              active === 1 ? " border-[#c94055]" : "border-white"
            }`}
          >
            Interests
          </button>
          <button
            onClick={() => setActive(2)}
            className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
              active === 2 ? " border-[#c94055]" : "border-white"
            }`}
          >
            Calls
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messanger;

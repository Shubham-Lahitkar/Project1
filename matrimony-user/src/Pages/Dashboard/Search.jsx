import React, { useState } from "react";
import SearchByCriteria from "../../Components/Search/SearchByCriteria";
import SearchByProfileID from "../../Components/Search/SearchByProfileID";

const Search = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="fixed z-50 bg-white top-24 w-[650px] flex flex-row justify-center items-end gap-4  border-b-[0.5px] border-gray-200 pt-6">
        <button
          onClick={() => setActive(true)}
          className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
            active ? " border-[#c94055]" : "border-white"
          }`}
        >
          Search by Criteria
        </button>
        <button
          onClick={() => setActive(false)}
          className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
            !active ? " border-[#c94055]" : "border-white"
          }`}
        >
          Search by Profile ID
        </button>
      </div>
      <div className="z-20">
      {active ? <SearchByCriteria /> : <SearchByProfileID />}
      </div>
      
    </div>
  );
};

export default Search;

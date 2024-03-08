import React from "react";

const SearchByCriteria = () => {
  return (
    <div className=" relative h-[530px] overflow-y-scroll no-scrollbar w-[400px] my-10 pb-16">
      <div className="border-b-[0.5px] border-gray-200 pt-16">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Age
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          18 Years - 25 Years
        </div>
      </div>
      <div className="border-b-[0.5px] border-gray-200 pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Height
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          4' 5" (1.35 mts) - 5' 5" (1.65 mts)
        </div>
      </div>

      <div className=" pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Marital Status
        </p>
      </div>
      <div className=" pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Religion
        </p>
      </div>
      <div className="border-b-[0.5px] border-gray-200 pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Caste
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          Doesn't Matter
        </div>
      </div>
      <div className="border-b-[0.5px] border-gray-200 pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Mother Tongue
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          Marathi
        </div>
      </div>
      <div className="border-b-[0.5px] border-gray-200 pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Annual Income
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          Rs. 2 Lakh - and above
        </div>
      </div>
      <div className=" pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Show Profiles
        </p>
      </div>
      <div className=" pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Manglik
        </p>
      </div>
      <div className=" pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Diet
        </p>
      </div>
      <div className="border-b-[0.5px] border-gray-200 pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Education
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          Doesn't Matter
        </div>
      </div>
      <div className="border-b-[0.5px] border-gray-200 pt-8">
        <p className="text-xs font-sans font-semibold tracking-wide text-gray-600">
          Occupation
        </p>
        <div className="text-sm font-sans font-semibold tracking-wide text-gray-800 pt-2 pb-3">
          Doesn't Matter
        </div>
      </div>
      <div className="fixed bottom-16 text-sm font-sans font-semibold tracking-wide z-50 w-[360px] text-center bg-[#d8465c] py-3 rounded-lg text-white mx-[20px]">
        Show Me Profiles
      </div>
    </div>
  );
};

export default SearchByCriteria;

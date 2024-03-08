import React from 'react'

const SearchByProfileID = () => {
  return (
    <div className="relative pt-16 w-[400px] h-[400px] my-10">
        <label>
          <input
            className="w-full h-[40px] px-0.5 rounded-none outline-none border-b-2 border-black placeholder-gray-500"
            type="text"
            placeholder="Enter Profile ID"
          />
        </label>
        <div className="absolute bottom-0 text-sm font-sans font-semibold tracking-wide z-50 w-full text-center bg-[#d8465c] py-3 rounded-lg text-white">
          Show Me Profiles
        </div>
      </div>
  )
}

export default SearchByProfileID
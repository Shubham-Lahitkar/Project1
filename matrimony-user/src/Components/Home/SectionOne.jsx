import React from "react";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className="relative mt-[70px] mb-[40px] z-20">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-end text-white">
          <p className="font-serif font-bold text-5xl py-2">
            Now, chat for free!
          </p>
          <p className="font-sans font-semibold text-xl">
            Finding your perfect match just became easier
          </p>
        </div>

        <div className="w-[370px]">
          <form className="flex flex-col justify-center bg-black bg-opacity-60 text-white text-xs p-4 rounded-md gap-3">
            <label className="flex flex-col justify-center gap-2">
              <p>Create Profile For</p>

              <select
                className="h-[37px] rounded-sm text-black px-2 text-sm"
                name="create-profile"
                id=""
              >
                <option value="Select">Select</option>
                <option value="saab">Self</option>
                <option value="Daughter">Daughter</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Relative">Relative/Friend</option>
                <option value="Client-marriage">Client-marriage Bureau</option>
              </select>
            </label>
            <label className="flex flex-col justify-center gap-2">
              <p>Email Address</p>
              <input
                className="h-[37px] rounded-sm text-black px-2 text-sm"
                type="email"
                placeholder="someone@example.com"
              />
            </label>
            <label className="flex flex-col justify-center gap-2">
              <p>Mobile No.</p>
              <input
                className="h-[37px] rounded-sm text-black px-2 text-sm"
                type="number"
              />
            </label>
            <label className="flex flex-col justify-center gap-2">
              <p>Password</p>
              <input
                className="h-[37px] rounded-sm text-black px-2 text-sm"
                type="text"
              />
            </label>
            <Link to="/registration/profile-details">
            <button className="w-full h-[37px] bg-[#d9475c] font-thin rounded-sm">
              Register Free
            </button>
            </Link>
            <div>
              By clicking on 'Register Free', you confirm that you accept the{" "}
              <span className="text-[#d9475c]">Terms of Use</span>
              and{" "}
              <span className="text-[#d9475c] font-sans text-xs">
                Privacy Policy
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

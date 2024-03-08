import React from "react";
import RegistrationHeader from "../Components/Common/RegistrationHeader";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const DesiredPartnerProfile = () => {
  return (
    <div className="w-full pb-[100px] bg-[#e7e6e6]">
      <RegistrationHeader
        header={
          "Welcome Gaurav kailas Khalase ! We have set some partner preferences for you"
        }
      />
      <div className="w-[990px] flex flex-col justify-center item-center mx-auto bg-white px-20">
        <div className="flex flex-row justify-end items-center border-b-[1px] border-gray-400">
          <Link to="/registration/upload-photos ">
            <p className="text-sm underline text-gray-600 my-1">
              I will do this later
            </p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center font-extralight text-center">
          <p className="text-xl text-gray-700 text-thin mt-5 mb-3">
            Desired Partner Profile
          </p>
          <p className="text-base py-4 text-gray-700">
            The criteria you mention here determines the ‘Desired Partner
            Matches’ you see. So please review this information carefully.
            Moreover, Filters determine whose Interests/Calls you want to
            receive.
          </p>
          <div className="bg-[#374a5b] text-white text-xl font-extralight w-full py-3">
            No. of Mutual Matches with below criteria - 8
          </div>
          <div className="flex flex-row items-start gap-2 py-5 ">
            <input className="mt-[5px] w-4 h-4" type="checkbox" name="" id="" />
            <div className="flex flex-col items-start">
              <p className="text-lg font-medium">
                I also want to receive matches based on the history of my
                interests and acceptances
              </p>
              <p className="text-[16px] text-gray-500">
                These matches may not fully fulfil your Desired Partner
                Preference.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-gray-400"></div>
        <div>
          <div className="flex flex-row justify-center items-center gap-6 pt-6">
            <p className="text-lg font-medium text-gray-800 py-2">
              Basic details
            </p>
            <p className="flex flex-row justify-center items-center gap-[2px] text-[#d9475c] ">
              <MdEdit />
              Edit
            </p>
          </div>
          <div className="flex flex-row justify-center items-center border-b-[1px] border-gray-400">
            <table className="w-full mx-8 mb-4">
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Age
                </td>
                <td className="text-base text-gray-500">19-24 years</td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Height
                </td>
                <td className="text-base text-gray-500">5' 0" - 5' 5"</td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Marital Status
                </td>
                <td className="text-base text-gray-500">Never Married</td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Country
                </td>
                <td className="text-base text-gray-500">Doesn't Matter</td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Residential Status
                </td>
                <td className="text-base text-gray-500">Doesn't Matter</td>
                
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-6 pt-6">
            <p className="text-lg font-medium text-gray-800 py-2">
              Religion & Ethnicity
            </p>
            <p className="flex flex-row justify-center items-center gap-[2px] text-[#d9475c] ">
              <MdEdit />
              Edit
            </p>
          </div>
          <div className="flex flex-row justify-center items-center border-b-[1px] border-gray-400">
            <table className="w-full mx-8 mb-4">
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Religion
                </td>
                <td className="text-base text-gray-500">Hindu</td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Caste
                </td>
                <td className="text-base text-gray-500">
                  Maratha, Nayee (Barber), Vishwakarma, Bari, ...more
                </td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Mother Tongue
                </td>
                <td className="text-base text-gray-500">Marathi</td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Manglik
                </td>
                <td className="text-base text-gray-500">Doesn't Matter</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-6 pt-6">
            <p className="text-lg font-medium text-gray-800 py-2">
              Education & Work
            </p>
            <p className="flex flex-row justify-center items-center gap-[2px] text-[#d9475c] ">
              <MdEdit />
              Edit
            </p>
          </div>
          <div className="flex flex-row justify-center items-center border-b-[1px] border-gray-400">
            <table className="w-full mx-8 mb-4">
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Highest Education
                </td>
                <td className="text-base text-gray-500">-</td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Occupation
                </td>
                <td className="text-base text-gray-500">-</td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Income
                </td>
                <td className="text-base text-gray-500">-</td>
                <td className="text-right">
                  <button className="bg-[#d9475c] text-white px-2 py-1">
                    Strict filter On
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-6 pt-6">
            <p className="text-lg font-medium text-gray-800 py-2">Lifestyle</p>
            <p className="flex flex-row justify-center items-center gap-[2px] text-[#d9475c] ">
              <MdEdit />
              Edit
            </p>
          </div>
          <div className="flex flex-row justify-center items-center border-b-[1px] border-gray-400">
            <table className="w-full mx-8 mb-4">
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Dietary habits
                </td>
                <td className="text-base text-gray-500">-</td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Drinking habits
                </td>
                <td className="text-base text-gray-500">-</td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Smoking habits
                </td>
                <td className="text-base text-gray-500">-</td>
              </tr>
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                  Challenged
                </td>
                <td className="text-base text-gray-500">-</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-6 pt-6">
            <p className="text-lg font-medium text-gray-800 py-2">
            Desired partner 
            </p>
            <p className="flex flex-row justify-center items-center gap-[2px] text-[#d9475c] ">
              <MdEdit />
              Edit
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <table className="w-full mx-8 mb-4">
              <tr>
                <td className="w-[180px] text-right pr-8 text-base py-3">
                Desired partner 
                </td>
                <td className="text-base text-gray-500">-</td>
                
              </tr>
              
            </table>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center my-10">
          <Link to="/registration/upload-photos">
            <button className="bg-[#d9475c] text-white w-[220px] h-[50px] text-xl">
              Looks good, proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesiredPartnerProfile;

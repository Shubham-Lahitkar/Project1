import React from "react";
import {
  AiOutlineApple,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="w-[100%] bg-[#34495e] flex flex-col justify-center items-center">
        <div className="w-[990px]  text-gray-100 flex flex-row justify-between p-[30px] ">
          <div className="">
            <p className="text-lg font-semibold pb-2">Explore</p>
            {[
              "Home",
              "Advanced search",
              "Success stories",
              "Sitemap",
              "Create Horoscope",
            ].map((ele, i) => {
              return (
                <div key={i} className="text-sm font-medium pb-2">
                  {ele}
                </div>
              );
            })}
          </div>
          <div className="">
            <p className="text-lg font-semibold pb-2">Services</p>
            {["Membership Options", "Jeevansathi Careers"].map((ele, i) => {
              return (
                <div key={i} className="text-sm font-medium pb-2">
                  {ele}
                </div>
              );
            })}
          </div>
          <div className="">
            <p className="text-lg font-semibold pb-2">Help</p>
            {["Contact us", "Jeevansathi Centers (32)"].map((ele, i) => {
              return (
                <div key={i} className="text-sm font-medium pb-2">
                  {ele}
                </div>
              );
            })}
          </div>
          <div className="">
            <p className="text-lg font-semibold pb-2">Legal</p>
            {[
              "About Us",
              "Fraud Alert",
              "Terms of use",
              "3rd party terms of use",
              "Privacy Policy",
              "Cookie Policy",
              "Privacy Features",
              "Summons/Notices",
              "Grievances",
            ].map((ele, i) => {
              return (
                <div key={i} className="text-sm font-medium pb-2">
                  {ele}
                </div>
              );
            })}
          </div>
        </div>

        <div></div>
      </div>

      <div className="w-[100%] flex flex-row justify-center items-center bg-[#2e4154] text-white text-2xl font-semibold p-6">
        <div className="flex flex-row justify-between items-center w-[990px]">
          <div>
            <p className="text-sm mb-1">App available on</p>
            <div className="flex gap-1">
              <BiLogoPlayStore />
              <AiOutlineApple />
            </div>
          </div>
          <div>
            <p className="text-sm mb-1">Follow us on</p>
            <div className="flex gap-1">
              <BiLogoFacebookSquare />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

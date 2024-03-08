import React from "react";
import Image from "../../Assets/Home/jeevansathi.png";

const SectionTen = () => {
  return (
    <div>
      <div className="p-[40px] flex flex-col gap-5">
        <img className="w-[200px] " src={Image} alt="" />
        <p className="text-sm leading-6 text-gray-600 text-justify">Jeevansathi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families.</p>
        <p className="text-xs leading-6 text-gray-600">Please note: Jeevansathi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Jeevansathi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content.</p>
      </div>
    </div>
  );
};

export default SectionTen;

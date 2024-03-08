import React from 'react'
import RegistrationNavbar from './RegistrationNavbar'
import bg from "../../Assets/Images/bgProfileDetails.jpg"
import { Link } from "react-router-dom";


const RegistrationHeader = ({header}) => {
  return (
    <div>    <div className=" bg-[#e7e6e6] h-[190px] ">
    <img
      className="z-20 absolute w-[100vw] h-[190px] backdrop-blur-sm "
      src={bg}
      alt=""
    />

    <div className="w-[990px] flex flex-col justify-center item-center mx-auto">
      <RegistrationNavbar />
      <div className=" absolute z-50  flex flex-row justify-center mt-[240px]  text-[16px] font-medium ">{
        header ? (<div className=' w-[990px] flex flex-row justify-center item-center'><p className=' text-[20px] text-gray-100 font-thin tracking-wide'>{header}</p></div>):(<div className=" w-[990px] flex flex-row justify-around border-b-[1px] border-gray-400 text-gray-400 pb-[10px] ">
        <Link to="/registration/profile-details">
        <div className="mx-[70px]">Profile Details</div>
        </Link>
        
        <div className="mx-[70px]">Career Details</div>
        <div className="mx-[70px]">Lifestyle and Family</div>
  
  </div>)
      }
          
      </div>
    </div>
    
  </div></div>
  )
}

export default RegistrationHeader
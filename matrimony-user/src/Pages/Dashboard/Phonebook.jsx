import React from 'react'
import DashboardPagesHeader from "../../Components/Common/DashboardPagesHeader";
import { Link } from 'react-router-dom';


const Phonebook = () => {
  return (
    <div className="min-h-[600px]">
      <DashboardPagesHeader page="Phonebook" />
      <div className="h-[450px] flex flex-col justify-center items-center px-8">
        <p className="text-lg font-sans font-medium text-gray-900 tracking-wide">Discover your viewed contacts here
</p>
        <p className="text-md font-sans font-semibold text-gray-500 text-center tracking-wide">
        Find contact details of your matches & get to know them better with a membership

        </p>
        <Link to="/dashboard/matches">
          <p className="text-md font-sans font-semibold text-[#d8465c] text-center tracking-wide my-4">Upgrade Membership</p>
        </Link>
      </div>
    </div>
  )
}

export default Phonebook
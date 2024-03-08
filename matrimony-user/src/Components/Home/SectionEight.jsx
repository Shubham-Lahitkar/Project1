import React from 'react'
import Image from '../../Assets/Home/Group_64_new.png'
import AppStore from '../../Assets/Home/app store.png'
import PlayStore from '../../Assets/Home/Play Store.png'

const SectionEight = () => {
  return (
    <div className='flex flex-row bg-[#34495e] px-[70px] '>
      <div className='flex flex-col w-[600px] gap-6 pt-[50px]'>
        <div>
          <p className='text-gray-300 text-md font-bold'>STAY CONNECTED WITH</p>
          <p className='text-3xl font-semibold text-white'>Jeevansathi Apps</p>
        </div>
        <div className='text-white text-md font-medium'>Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment.</div>
        <div className='flex flex-row gap-2'>
          <img className='w-[180px]' src={AppStore} alt="" />
          <img className='w-[180px]' src={PlayStore} alt="" />
        </div>
        <div className='text-white text-md font-medium'><a href="#">Click here to view more about Apps</a></div>
      </div>
      <div>
        <img className='w-[550px] pt-[20px]' src={Image} alt="" />
      </div>
    </div>
  )
}

export default SectionEight
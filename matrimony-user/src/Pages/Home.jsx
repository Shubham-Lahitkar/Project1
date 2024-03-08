import React, { useState } from 'react'
import home_bg from "../Assets/Home/cover_img_free_chat.png";
import Navbar from '../Components/Common/Navbar';
import SectionOne from '../Components/Home/SectionOne';
import SectionTwo from '../Components/Home/SectionTwo';
import SectionThree from '../Components/Home/SectionThree';
import SectionFour from '../Components/Home/SectionFour';
import SectionFive from '../Components/Home/SectionFive';
import SectionSix from '../Components/Home/SectionSix';
import SectionSeven from '../Components/Home/SectionSeven';
import SectionEight from '../Components/Home/SectionEight';
import SectionNine from '../Components/Home/SectionNine';
import SectionTen from '../Components/Home/SectionTen';
import Footer from '../Components/Common/Footer';


const Home = () => {

const [show, setShow] = useState(true);

  return (
    <div>
        <img className='absolute z-0 w-[100%] h-[622px]' src={home_bg} alt="" />
        <div className='w-[990px] flex flex-col justify-center item-center mx-auto'>
          <Navbar margin={"top-0"}/>
          {/* <div className={`pt-40 relative z-90 ${show ? "visible":"invisible"}`}>lorem50</div> */}
          <SectionOne/>
          <SectionTwo />
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
          <SectionSix/>
          <SectionSeven/>
          <SectionEight/>
          <SectionNine/>
          <SectionTen/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
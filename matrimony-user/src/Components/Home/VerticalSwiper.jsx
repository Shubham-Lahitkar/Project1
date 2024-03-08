import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./VerticalSwiper.css";
import ImageOne from "../../Assets/Home/match-hour.svg";
import ImageTwo from "../../Assets/Home/voice-call.svg";
import ImageThree from "../../Assets/Home/video-profile.svg";

const VerticalSwiper = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        loop={true}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={ImageOne} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={ImageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageThree} alt="" />
        </SwiperSlide> */}
        
        
      </Swiper>
    </>
  );
};

export default VerticalSwiper;

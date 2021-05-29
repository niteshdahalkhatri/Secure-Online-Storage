import React from "react";
import * as s from "./Slider.style";

// import Swiper core and required modules
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

function Slider() {
  return (
    <s.SliderContainer>
      <s.TextContainer>
        <p>Recent Uploads</p>
      </s.TextContainer>
      <Swiper
        style={{ width: "70%" }}
        spaceBetween={20}
        slidesPerView={5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ stopOnLastSlide: false, delay: 2000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <s.IconContainer>
            <s.FileIcon />1
          </s.IconContainer>
        </SwiperSlide>
        <SwiperSlide>
          <s.IconContainer>
            <s.FileIcon />1
          </s.IconContainer>
        </SwiperSlide>
        <SwiperSlide>
          <s.IconContainer>
            <s.FileIcon />1
          </s.IconContainer>
        </SwiperSlide>
        <SwiperSlide>
          <s.IconContainer>
            <s.FileIcon />1
          </s.IconContainer>
        </SwiperSlide>
        <SwiperSlide>
          <s.IconContainer>
            <s.FileIcon />1
          </s.IconContainer>
        </SwiperSlide>
        <SwiperSlide>
          <s.IconContainer>
            <s.FileIcon />1
          </s.IconContainer>
        </SwiperSlide>
      </Swiper>
    </s.SliderContainer>
  );
}

export default Slider;

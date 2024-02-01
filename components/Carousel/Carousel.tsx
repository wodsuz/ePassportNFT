import React from "react";
import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <div className={styles.Container}>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/Nfts/bighead.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-1.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-2.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-3.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-4.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-5.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-6.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-7.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-8.svg" alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Nfts/bighead-9.svg" alt="The Weirdos" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

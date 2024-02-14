import React from "react";
import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 1.svg"
            alt="ePassport swipe first item"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 2.svg"
            alt="ePassport swipe second item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 3.svg"
            alt="ePassport swipe third item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 4.svg"
            alt="ePassport swipe fourth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 5.svg"
            alt="ePassport swipe fifth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 6.svg"
            alt="ePassport swipe sixth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 7.svg"
            alt="ePassport swipe seventh item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 8.svg"
            alt="ePassport swipe right item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 9.svg"
            alt="ePassport swipe nineth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 10.svg"
            alt="ePassport swipe tenth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 11.svg"
            alt="ePassport swipe eleventh item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 12.svg"
            alt="ePassport swipe twelfth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 13.svg"
            alt="ePassport swipe thirteenth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 14.svg"
            alt="ePassport swipe fourteenth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 15.svg"
            alt="ePassport swipe fifteenth item"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.Images}
            width={100}
            height={100}
            src="/assets/Nfts/Group 16.svg"
            alt="ePassport swipe sixteenth item"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

import Image from "next/image";
import Link from "next/link";
import sliderImg from "/data";

import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../Banner/Slider.module.css";

export default function Slider() {
  return (
    <>
      {sliderImg?.mainSlider ? (
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          navigation
          pagination={false}
          className={styles.homeslider}
        >
          {sliderImg?.mainSlider.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={styles.imgback}>
                  <Image
                    src={item.mainSliderImgUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                  <div className={styles.hscontent}>
                    <h1>{item.title}</h1>
                    <h3>{item.textSlider}</h3>
                    <Link href="#">
                      <a>{item.link}</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <span>No data</span>
      )}
    </>
  );
}

import React, { useState } from "react";
import category from "/data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import styles from "../category/Category.module.css";
import Link from "next/link";
import Image from "next/image";

function CategorySlider() {
  //console.log(category[0], "textimg");
  return (
    <>
      <section className={styles.homecategory}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.sectiontitle}>
                <h2>Shop by category</h2>
              </div>
              <div>
                {category?.categoryItem ? (
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={false}
                    navigation={true}
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                      },
                    }}
                    className="category"
                  >
                    {category?.categoryItem.map((item, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className={styles.cateimage}>
                            {item?.categoryImgUrl && (
                              <Link href="#">
                                <a>
                                  <Image
                                    src={item.categoryImgUrl}
                                    layout="fill"
                                    alt="cateimage"
                                  />
                                </a>
                              </Link>
                            )}
                            <span>{item.title}</span>
                            <p>{item.item} item</p>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  <span>No data</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategorySlider;

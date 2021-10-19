import Link from "next/link";
import Image from "next/image";
import newsList from "/data";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../RecentNews/News.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

function RecentNews() {
  return (
    <>
      <section className={styles.recentNewsmain}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.sectiontitle}>
                <h2>Recent News</h2>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="recentSliderin"
              >
                {newsList?.recentnews.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className={styles.newsBox}>
                        <div className={styles.newsImg}>
                          <Link href="#">
                            <a>
                              <Image
                                src={item.blogImgUrl}
                                alt="news-image"
                                layout="fill"
                                objectFit="cover"
                                className="img-fluid"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="newsContent">
                          <div className={styles.newsdatecomment}>
                            <span className={styles.newsdate}>
                              <MdDateRange />
                              {item.newsdate}
                            </span>
                            <Link href="#">
                              <a>
                                <i className="ti-comment-alt"></i>
                                {item.comment} Comment
                              </a>
                            </Link>
                          </div>
                          <div className={styles.newstitle}>
                            <h4>{item.newstitle}</h4>
                          </div>
                          <p className={styles.newsdescription}>
                            {item.newsdescription}
                          </p>
                          <div className={styles.morenews}>
                            <Link href="#">
                              <a className={styles.readlink}>
                                {item.newsLink} <BiRightArrowAlt />{" "}
                              </a>
                            </Link>
                            <span className={styles.newsadmin}>
                              By
                              <span className={styles.newseditor}>
                                {item.newsadmin}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default RecentNews;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);
//import featuredpro from "/data";
import Link from "next/link";
import Image from "next/image";
import styles from "../Product/Product.module.css";
//import { BsStar, BsStarFill } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/router";
import { twoDecimals } from "../../../utils/format";

export default function ProductSlider({ products }) {
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   getProduct();
  // }, []);
  // async function getProduct() {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     //console.log(response.data, "response");
  //     setProduct(response.data);
  //   } catch {}
  // }

  function removePath(imagePath) {
    const str = "https://fakestoreapi.com/";
    const newPath = imagePath.replace(str, "");
    return newPath;
  }

  const router = useRouter();

  // const localStorageData = localStorage.getItem("basket");
  // [
  //   {
  //     category: "",
  //     title: "",
  //   },
  // ];

  // addToCart = (data) => {
  //   if (cart) {
  //     cart.push(data);
  //   }
  //   let newCart = [];
  //   newCart.push(data);
  //   localstorage.setItem("basket", newCart);
  // };

  //

  const addToCart = (item) => {
    //const cartData = localStorage.getItem("cart");
    const cartData = JSON.parse(localStorage.getItem("cart"));
    console.log(item, "1");
    if (cartData) {
      cartData.push(item);
      localStorage.setItem("cart", JSON.stringify(cartData));
    } else {
      let newCart = [];
      newCart.push(item);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    // const localStorageData = localStorage.setItem("cart", JSON.stringify(cart));
    // let newCart = [...cart];
    // let itemInCart = newCart.find((item) => item.name === item.name);
    // if (itemInCart) {
    //   itemInCart.quantity++;
    // } else {
    //   itemInCart = {
    //     ...item,
    //     quantity: 1,
    //   };
    //   newCart.push(itemInCart);
    // }
    // setCart(newCart);
  };

  return (
    <>
      <section className={styles.productslidermain}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.sectiontitle}>
                <h2>Featured products</h2>
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
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="productSliderin"
              >
                {products &&
                  products.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className={styles.productsitems}>
                          <div className={styles.tredpro}>
                            <div className={styles.trproimg}>
                              <Link href={`/products/${item.id}`}>
                                <a>
                                  <Image
                                    src={removePath(item.image)}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                  />
                                  <Image
                                    src={removePath(item.image)}
                                    className={styles.additionalimage}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className={styles.prolable}>
                              <span className={styles.ptext}>
                                {item.category}
                              </span>
                            </div>
                            <div className="proicn"></div>
                          </div>
                          <div className={styles.caption}>
                            <h3>{item.title}</h3>
                            <div className={styles.rating}>
                              <span className={styles.rt}>
                                {item.rating.rate}
                              </span>
                              <span className={styles.count_text}>
                                {item.rating.count}
                              </span>
                            </div>
                            <div className={styles.proprice}>
                              <span className={styles.newprice}>
                                ${twoDecimals(item.price)}
                              </span>
                              <span className={styles.oldprice}>
                                <del>$.179.00 USD</del>
                              </span>
                            </div>
                            <button
                              className={styles.addcart}
                              onClick={() => addToCart(item)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <div className="text-center">
                <Link href="/products">
                  <a className="all_button"> View all </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// };

//export default ProductSlider;

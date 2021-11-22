/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../components/basket/Cart.module.css";
import Image from "next/image";
import _map from "lodash/map";
import _sum from "lodash/sum";
import { twoDecimals } from "../../utils/format";

const cartList = () => {
  const [cartData, setcartData] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    setcartData(JSON.parse(localStorage.getItem("cart")));
    calculatePrice();
  }, []);

  const delItem = (i) => {
    const selectedItem = cartData[i];
    //console.log(cartData[i]);
    localStorage.removeItem("cart");
    setcartData(cartData.filter((item) => item !== selectedItem));
  };

  //let _total = 0;

  const calculatePrice = () => {
    console.log(cartData, "1price");
    const priceArr = _map(cartData, "price");
    const TotalPrice = _sum(priceArr, "TotalPrice");
    setcartTotal(TotalPrice);
    console.log(priceArr, "price");
  };

  function removePath(imagePath) {
    const str = "https://fakestoreapi.com/";
    const newPath = imagePath.replace(str, "");
    return newPath;
  }

  return (
    <section className={styles.cart_page}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.cart_area}>
              <div className="cart_details">
                <div className={styles.cart_item}>
                  <span className={styles.cart_head}>My cart:</span>
                  <span className={styles.c_items}>
                    {cartData ? cartData.length : 0} item
                  </span>
                </div>
                {cartData &&
                  cartData.length &&
                  cartData.map((cartItem, i) => {
                    return (
                      <div key={i} className={styles.cart_all_pro}>
                        <div className={styles.cart_pro}>
                          <div className={styles.cart_pro_image}>
                            <Link href="/">
                              <a>
                                <Image
                                  src={removePath(cartItem.image)}
                                  layout="fill"
                                  objectFit="contain"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className={styles.pro_details}>
                            <h4>
                              <Link href="/">
                                <a>{cartItem.title}</a>
                              </Link>
                            </h4>
                            <span className={styles.pro_size}>
                              <span className={styles.size}>Size:</span> 5kg
                            </span>
                            <span className={styles.pro_shop}>Petro-demo</span>
                            <span className={styles.cart_pro_price}>
                              $ {twoDecimals(cartItem.price)}
                            </span>
                          </div>
                        </div>
                        <div className={styles.qty_item}>
                          <div className={styles.bx_center}>
                            <div className={styles.plus_minus}>
                              <span>
                                <Link href="javascript:void(0)">
                                  <a className={styles.add_btn}>-</a>
                                </Link>
                                <input
                                  className={styles.form_input}
                                  type="text"
                                  name="name"
                                  value="1"
                                />
                                <Link href="javascript:void(0)">
                                  <a className={styles.add_btn}>+</a>
                                </Link>
                              </span>
                            </div>
                            <span className={styles.pro_remove}>Remove</span>
                          </div>
                        </div>
                        <div className={styles.all_pro_price}>
                          <span>${twoDecimals(cartItem.price)}</span>
                        </div>
                      </div>
                    );
                  })}
                <div className={styles.total_bt}>
                  <span className={styles.cart_head}>Total</span>
                  <span className={styles.cart_total}>
                    ${twoDecimals(cartTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cartList;

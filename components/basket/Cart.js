/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../components/basket/Cart.module.css";
import Image from "next/image";
import _map from "lodash/map";
import _sum from "lodash/sum";
import { twoDecimals } from "../../utils/format";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counter/counterSlice";

const cartList = () => {
  const [cartData, setcartData] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
                              <Link href={`/products/${cartItem.id}`}>
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
                                <button onClick={() => dispatch(decrement())}>
                                  -
                                </button>
                                <div className={styles.cont_a}>{count}</div>
                                <button onClick={() => dispatch(increment())}>
                                  +
                                </button>
                              </span>
                            </div>
                            <span
                              className={styles.pro_remove}
                              onClick={() => delItem(i)}
                            >
                              Remove
                            </span>
                          </div>
                        </div>
                        <div className={styles.all_pro_price}>
                          <span>${twoDecimals(cartItem.price)}</span>
                        </div>
                      </div>
                    );
                  })}
                <div className={styles.total_bt}>
                  <span className={styles.cart_head}>SubTotal</span>
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

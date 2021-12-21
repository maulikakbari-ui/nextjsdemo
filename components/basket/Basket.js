import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "../basket/Basket.module.css";
import { twoDecimals } from "../../utils/format";
import Image from "next/image";
import Link from "next/link";
import _map from "lodash/map";
import _sum from "lodash/sum";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counter/counterSlice";

const Basket = () => {
  const [showBasketModel, setShowBasketModel] = useState(false);
  const [cartData, setcartData] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setcartData(JSON.parse(localStorage.getItem("cart")));
    calculatePrice();
  }, []);
  //console.log(cartData, "test1");

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
    <>
      <li className="side-wrap">
        <div className="search-rap">
          <a onClick={() => setShowBasketModel(true)}>
            <HiOutlineShoppingBag />
            <span className={styles.count_in}>
              {cartData ? cartData.length : 0}
            </span>
          </a>
        </div>
        <div className={`mini_cart ${showBasketModel ? "active" : ""}`}>
          <div
            className={styles.sitebar_close}
            onClick={() => setShowBasketModel(false)}
          ></div>
          <a
            className={styles.shopping_cart_close}
            onClick={() => setShowBasketModel(false)}
          >
            <IoClose />
          </a>
          <div className={styles.cart_item_title}>
            <p>
              <span className="cart-count-desc">There are</span>
              <span className={styles.bigcounter}>
                {cartData ? cartData.length : 0}
              </span>
              <span className="cart-count-desc">Products</span>
            </p>
          </div>
          {cartData && cartData.length ? (
            <>
              <ul className={styles.cart_item_loop}>
                {cartData &&
                  cartData.length &&
                  cartData.map((cartItem, i) => {
                    return (
                      <li key={i} className={styles.cart_item}>
                        <div className={styles.cart_img}>
                          <Image
                            src={removePath(cartItem.image)}
                            layout="fill"
                            objectFit="contain"
                            alt=""
                          />
                        </div>
                        <div className={styles.cart_title}>
                          <h6>
                            <Link href={`/products/${cartItem.id}`}>
                              <a>{cartItem.title}</a>
                            </Link>
                          </h6>
                          <div className={styles.cart_pro_info}>
                            <div className="cart-qty-price">
                              <span className="quantity">1 x </span>
                              <span className="price-box">
                                ${cartItem.price}
                              </span>
                              <div className={styles.quantity_count}>
                                <div className={styles.count_inq}>
                                  <span onClick={() => dispatch(decrement())}>
                                    -
                                  </span>
                                  <div className={styles.cont_a}>{count}</div>
                                  <span onClick={() => dispatch(increment())}>
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.delete_item_cart}>
                              <span onClick={() => delItem(i)}>
                                <AiOutlineDelete />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>

              <ul className={styles.subtotal_title_area}>
                <li className="subtotal-info">
                  <div className={styles.subtotal_titles}>
                    <h6>Sub total:</h6>
                    <span className="subtotal-price">
                      ${twoDecimals(cartTotal)}{" "}
                    </span>
                  </div>
                </li>
                <li className="mini-cart-btns">
                  <div className={styles.cart_btns}>
                    <Link
                      href="/cart"
                      onClick={() => setShowBasketModel(false)}
                    >
                      <a className={styles.btn_style1}>View cart</a>
                    </Link>
                    <a href="#" className={styles.btn_style1}>
                      Checkout
                    </a>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <div className={styles.cart_cnt}>Your cart is empty</div>
          )}
        </div>
      </li>
    </>
  );
};

export default Basket;

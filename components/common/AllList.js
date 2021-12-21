/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsListUl, BsGrid, BsGrid3X3Gap, BsStarFill } from "react-icons/bs";
import axios from "axios";
import styles from "../common/List.module.css";
import { twoDecimals } from "../../utils/format";

import { useSelector } from "react-redux";
import Filter from "./Filter";
import Pagination from "rc-pagination";

const AllList = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const [productList, setProductList] = useState([]);
  const [showA, setShowA] = useState("3");
  const [gList, setGList] = useState(styles.grid_items);
  const [paginationList, setPaginationList] = useState(0);

  useEffect(() => {
    getProductList();
  }, []);
  async function getProductList() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data, "response");
      setProductList(response.data);
    } catch {}
  }

  function removePath(imagePath) {
    const str = "https://fakestoreapi.com/";
    const newPath = imagePath.replace(str, "");
    return newPath;
  }

  const addToCart = (items) => {
    //const cartData = localStorage.getItem("cart");
    const cartData = JSON.parse(localStorage.getItem("cart"));
    console.log(items, "1");
    if (cartData) {
      cartData.push(items);
      localStorage.setItem("cart", JSON.stringify(cartData));
    } else {
      let newCart = [];
      newCart.push(items);
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

  const onChange = (page) => {
    console.log(page);
    setPaginationList(page);
  };

  return (
    productList &&
    productList.length && (
      <div className={styles.product_list}>
        <div className="container">
          <div className="row">
            <Filter />
            <div className="col-lg-9 col-md-8 col-12">
              <div className="grid_list_area">
                <div className={styles.grid_list_select}>
                  <ul className={styles.grid_list}>
                    <li
                      className={`colloction-icn ${
                        showA === "1" ? "active" : ""
                      } `}
                      onClick={() => {
                        setGList(styles.grid_items_s);
                        setShowA("1");
                      }}
                    >
                      <span>
                        <BsListUl />
                      </span>
                    </li>
                    <li
                      className={`colloction-icn ${
                        showA === "2" ? "active" : ""
                      }`}
                      onClick={() => {
                        setGList(styles.grid_items_t);
                        setShowA("2");
                      }}
                    >
                      <span>
                        <BsGrid />
                      </span>
                    </li>
                    <li
                      className={`colloction-icn ${
                        showA === "3" ? "active" : ""
                      }`}
                      onClick={() => {
                        setGList(styles.grid_items);
                        setShowA("3");
                      }}
                    >
                      <span>
                        <BsGrid3X3Gap />
                      </span>
                    </li>
                  </ul>
                  <ul className={styles.grid_list_selector}>
                    <li>
                      <label>Sort by</label>
                      <select>
                        <option>Featured</option>
                        <option>Best selling</option>
                        <option>Alphabetically,A-Z</option>
                        <option>Alphabetically,Z-A</option>
                        <option>Price, low to high</option>
                        <option>Price, high to low</option>
                        <option>Date new to old</option>
                        <option>Date old to new</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.grid_pro}>
                <ul className={styles.grid_product}>
                  {productList &&
                    productList.length &&
                    productList.map((items, i) => {
                      return (
                        <li key={i} className={gList}>
                          <Link href={`/products/${items.id}`}>
                            <a>
                              <div className={styles.pro_grid_box}>
                                <div className={styles.tred_pro}>
                                  <div className={styles.tr_pro_img}>
                                    <Image
                                      src={removePath(items.image)}
                                      layout="fill"
                                      objectFit="contain"
                                      alt=""
                                    />
                                    <Image
                                      src={removePath(items.image)}
                                      className={styles.additionalimage}
                                      layout="fill"
                                      objectFit="contain"
                                      alt=""
                                    />
                                  </div>
                                  <div className={styles.Pro_lable}>
                                    <span>{items.category}</span>
                                  </div>
                                </div>
                                <div className={styles.caption}>
                                  <h3>
                                    <Link href="/">
                                      <a>{items.title}</a>
                                    </Link>
                                  </h3>
                                  <div className={styles.ratings_in}>
                                    <span className={styles.star_in}>
                                      <BsStarFill /> {items.rating.rate}
                                    </span>
                                    <span>{items.rating.count}</span>
                                  </div>
                                  <div className={styles.pro_pricein}>
                                    <span> $ {twoDecimals(items.price)}</span>
                                    <span className={styles.old_price}>
                                      <del>$.179.00 USD</del>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                          <button
                            className={styles.addcart}
                            onClick={() => addToCart(items)}
                          >
                            Add to Cart
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className={styles.pagination_list}>
                <Pagination
                  onChange={onChange}
                  current={paginationList}
                  total={25}
                  showTitle={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AllList;

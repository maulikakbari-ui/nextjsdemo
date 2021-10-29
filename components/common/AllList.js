/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsListUl, BsGrid, BsGrid3X3Gap, BsStarFill } from "react-icons/bs";
import axios from "axios";
import styles from "../common/List.module.css";

const AllList = () => {
  const [productList, setProductList] = useState([]);
  const [showA, setShowA] = useState("3");
  const [gList, setGList] = useState(styles.grid_items);

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

  return (
    productList &&
    productList.length && (
      <div className={styles.product_list}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="all_filter">
                <div className={styles.categories_page_filter}>
                  <h4 className="filter-title">Categories</h4>
                  <Link href="#category-filter">
                    <a data-bs-toggle="collapse" className="filter-link">
                      <span>Categories </span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul className="all-option collapse" id="category-filter">
                    <li className="grid-list-option">
                      <input id="category-1" type="checkbox" />
                      <label htmlFor="category-1">
                        Baker's rack <span className="grid-items">(4)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-2" type="checkbox" />
                      <label htmlFor="category-2">
                        Bestseller<span className="grid-items">(6)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-3" type="checkbox" />
                      <label htmlFor="category-3">
                        Breakfast <span className="grid-items">(8)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-4" type="checkbox" />
                      <label htmlFor="category-4">
                        Dairy & chesse <span className="grid-items">(7)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-5" type="checkbox" />
                      <label htmlFor="category-5">
                        Dairy & chesse <span className="grid-items">(3)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-6" type="checkbox" />
                      <label htmlFor="category-6">
                        Deal collection <span className="grid-items">(10)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-7" type="checkbox" />
                      <label htmlFor="category-7">
                        Dinner <span className="grid-items">(12)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-8" type="checkbox" />
                      <label htmlFor="category-8">
                        Featured product{" "}
                        <span className="grid-items">(11)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-9" type="checkbox" />
                      <label htmlFor="category-9">
                        Fresh fruits <span className="grid-items">(16)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-10" type="checkbox" />
                      <label htmlFor="category-10">
                        Fresh meat <span className="grid-items">(18)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-11" type="checkbox" />
                      <label htmlFor="category-11">
                        Fresh vegetable <span className="grid-items">(16)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-12" type="checkbox" />
                      <label htmlFor="category-12">
                        Green seafood <span className="grid-items">(12)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-13" type="checkbox" />
                      <label htmlFor="category-13">
                        Lunch <span className="grid-items">(14)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-14" type="checkbox" />
                      <label htmlFor="category-14">
                        New product <span className="grid-items">(20)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-15" type="checkbox" />
                      <label htmlFor="category-15">
                        Organic dryfruit{" "}
                        <span className="grid-items">(21)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-16" type="checkbox" />
                      <label htmlFor="category-16">
                        Organic juice <span className="grid-items">(23)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-17" type="checkbox" />
                      <label htmlFor="category-17">
                        Organic wine <span className="grid-items">(17)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-18" type="checkbox" />
                      <label htmlFor="category-18">
                        Sea & fish <span className="grid-items">(1)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-19" type="checkbox" />
                      <label htmlFor="category-19">
                        Special product <span className="grid-items">(5)</span>
                      </label>
                    </li>
                    <li className="grid-list-option">
                      <input id="category-20" type="checkbox" />
                      <label htmlFor="category-20">
                        Starters <span className="grid-items">(9)</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className={styles.price_filter}>
                  <h4 className="filter-title">Filter by price</h4>
                  <Link href="#price-filter">
                    <a data-bs-toggle="collapse" className="filter-link">
                      <span>Filter by price </span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul className="all-price collapse" id="price-filter">
                    <li className="f-price">
                      <input type="checkbox" />
                      <label>0-100</label>
                    </li>
                    <li className="f-price">
                      <input type="checkbox" />
                      <label>100-200</label>
                    </li>
                    <li className="f-price">
                      <input type="checkbox" />
                      <label>200-300</label>
                    </li>
                  </ul>
                </div>
                <div className={styles.pro_size}>
                  <h4 className="filter-title">Filter by size</h4>
                  <Link href="#size-filter">
                    <a data-bs-toggle="collapse" className="filter-link">
                      <span>Filter by size </span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul className="all-size collapse" id="size-filter">
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>10kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>10ltr</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>1kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>1ltr</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>2kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>3kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>5kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>5ltr</label>
                    </li>
                  </ul>
                </div>
                <div className={styles.filter_tag}>
                  <h4 className="filter-title">Filter by tags</h4>
                  <Link href="#tags-filter">
                    <a data-bs-toggle="collapse" className="filter-link">
                      <span>Filter by tags </span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul className="all-tag collapse" id="tags-filter">
                    <li className="tag">
                      <Link href="/">
                        <a>Almond</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Banana</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Bitrrot</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Blackberry</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Chikoo</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Coconet</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Guava</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>juice</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Ladiesfinger</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Litchi</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Minirrot</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Mussel</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Onion</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Organic-food</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Potato</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Shrimp</a>
                      </Link>
                    </li>
                    <li className="tag">
                      <Link href="/">
                        <a>Tomato</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.vendor_filter}>
                  <h4 className="filter-title">Filter by vendor</h4>
                  <Link href="#vendor">
                    <a data-bs-toggle="collapse" className="filter-link">
                      <span>Filter by vendor </span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul className="all-vendor collapse" id="vendor">
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Fargglad</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Flisat</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Kyrre</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Lustigt</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Sundvik</label>
                    </li>
                  </ul>
                </div>
                <div className="filter-banner">
                  <Link href="/">
                    <a className="grid-banner">
                      <img
                        src="image/grid-banner.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
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
                                    <span> $ {items.price}</span>
                                    <span className={styles.old_price}>
                                      <del>$.179.00 USD</del>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AllList;

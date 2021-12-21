/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Breadcrumb from "../../components/common/Breadcrumb";
import { twoDecimals } from "../../utils/format";

import styles from "../products/Products.module.css";

const ProductInner = () => {
  const [productInList, setProductInList] = useState({});
  const router = useRouter();
  useEffect(() => {
    getProductInList();
  }, [router.query]);
  //console.log(router, "tes");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getProductInList() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${router.query.productId}`
      );
      //console.log(response.data, "response data");
      setProductInList(response.data);
    } catch {}
  }

  console.log(productInList);

  function removePath(imagePath) {
    const str = "https://fakestoreapi.com/";
    if (imagePath) {
      const newPath = imagePath.replace(str, "");
      return newPath;
    }
    return null;
  }

  const addToCart = () => {
    //const cartData = localStorage.getItem("cart");
    const cartData = JSON.parse(localStorage.getItem("cart"));
    console.log(productInList, "1");
    if (cartData) {
      cartData.push(productInList);
      localStorage.setItem("cart", JSON.stringify(cartData));
    } else {
      let newCart = [];
      newCart.push(productInList);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <>
      <Breadcrumb
        title="Home"
        type="All Products"
        subtype={productInList?.title}
      />

      <section className={styles.product_details}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 larg-image">
              <div className={styles.product_img}>
                {productInList?.image && (
                  <Image
                    src={removePath(productInList?.image)}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 pro-info">
              <div className={styles.product_info}>
                <span className={styles.categ}>{productInList?.category}</span>
                <h1>{productInList?.title}</h1>
                <div className={styles.rating_in}>
                  <span className={styles.star_in}>
                    {productInList?.rating?.rate}
                  </span>
                  <span>{productInList?.rating?.count}</span>
                </div>
                <strong>${twoDecimals(productInList?.price)}</strong>
                <p>{productInList?.description}</p>
                <button className={styles.addcart} onClick={() => addToCart()}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductInner;

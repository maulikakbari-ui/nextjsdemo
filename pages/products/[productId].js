import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Breadcrumb from "../../components/common/Breadcrumb";

import styles from "../products/Products.module.css";

const ProductInner = () => {
  const [productInList, setProductInList] = useState({});
  const router = useRouter();
  useEffect(() => {
    getProductInList();
  }, [router.query]);
  //console.log(router, "tes");
  async function getProductInList() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${router.query.productId}`
      );
      console.log(response.data, "response data");
      setProductInList(response.data);
    } catch {}
  }

  //console.log(productInList);

  function removePath(imagePath) {
    const str = "https://fakestoreapi.com/";
    if (imagePath) {
      const newPath = imagePath.replace(str, "");
      return newPath;
    }
    return null;
  }
  return (
    <>
      <Breadcrumb />

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
                <strong>$ {productInList?.price}</strong>
                <p>{productInList?.description}</p>
                <button>Add cart </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductInner;
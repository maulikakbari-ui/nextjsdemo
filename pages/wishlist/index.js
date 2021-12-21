/* eslint-disable @next/next/no-img-element */
import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import styles from "../../pages/wishlist/Wishlist.module.css";

const Wishlist = () => {
  return (
    <>
      <Breadcrumb title="Home" type="Wishlist" />
      <div className={styles.wishlist_page}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.wishlist_area}>
                <div className={styles.wishlist_item}>
                  <span className={styles.wishlist_head}>My wishlist:</span>
                  <span className="wishlist_items">3 item</span>
                </div>
                <div className={styles.wishlist_all_pro}>
                  <div className={styles.wishlist_pro}>
                    <div className={styles.wishlist_pro_image}>
                      <a href="#">
                        <img
                          src="image/cart-page/cart-1/image1.jpg"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className={styles.pro_details}>
                      <h4>
                        <a href="#">Vegetable tomato fresh</a>
                      </h4>
                      <span className={styles.all_size}>
                        Size: <span className={styles.pro_size}>5kg</span>
                      </span>
                      <span className={styles.wishlist_text}>Petro-demo</span>
                    </div>
                  </div>
                  <div className={styles.qty_item}>
                    <a href="#" className={styles.add_wishlist}>
                      Add to cart
                    </a>
                    <a href="#" className={styles.add_wishlist}>
                      Buy now
                    </a>
                  </div>
                  <div className={styles.all_pro_price}>
                    <span className={styles.new_price}>$384.51 USD</span>
                    <span className={styles.old_price}>
                      <del>$405.00 USD</del>
                    </span>
                    <span>
                      <i className="ion-android-close"></i>
                    </span>
                  </div>
                </div>
                <div className={styles.wishlist_all_pro}>
                  <div className={styles.wishlist_pro}>
                    <div className={styles.wishlist_pro_image}>
                      <a href="#">
                        <img
                          src="image/cart-page/cart-1/image1.jpg"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className={styles.pro_details}>
                      <h4>
                        <a href="#">Vegetable tomato fresh</a>
                      </h4>
                      <span className={styles.all_size}>
                        Size: <span className={styles.pro_size}>5kg</span>
                      </span>
                      <span className={styles.wishlist_text}>Petro-demo</span>
                    </div>
                  </div>
                  <div className={styles.qty_item}>
                    <a href="#" className={styles.add_wishlist}>
                      Add to cart
                    </a>
                    <a href="#" className={styles.add_wishlist}>
                      Buy now
                    </a>
                  </div>
                  <div className={styles.all_pro_price}>
                    <span className={styles.new_price}>$384.51 USD</span>
                    <span className={styles.old_price}>
                      <del>$405.00 USD</del>
                    </span>
                    <span>
                      <i className="ion-android-close"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;

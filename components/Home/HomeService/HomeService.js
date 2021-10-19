import { FiTruck } from "react-icons/fi";
import { IoLogoUsd } from "react-icons/io";
import { BiHeadphone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import styles from "../HomeService/Service.module.css";

function Service() {
  return (
    <>
      <section className={styles.homeservice}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.service}>
                <div className={styles.servicebox}>
                  <div className={styles.sbox}>
                    <FiTruck />
                    <div className={styles.servicecontent}>
                      <span>Free delivary</span>
                      <p>Orders from all item</p>
                    </div>
                  </div>
                </div>
                <div className={styles.servicebox}>
                  <div className={styles.sbox}>
                    <IoLogoUsd />
                    <div className={styles.servicecontent}>
                      <span>Return & refund</span>
                      <p>Money back guarantee</p>
                    </div>
                  </div>
                </div>
                <div className={styles.servicebox}>
                  <div className={styles.sbox}>
                    <BiHeadphone />
                    <div className={styles.servicecontent}>
                      <span>Quality support</span>
                      <p>Alway online 24/7</p>
                    </div>
                  </div>
                </div>
                <div className={styles.servicebox}>
                  <div className={styles.sbox}>
                    <HiOutlineMail />
                    <div className={styles.servicecontent}>
                      <span>Join newslleter</span>
                      <p>20% off by subscribing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;

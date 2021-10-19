import Link from "next/link";
import Image from "next/image";
import footerBg from "/data";
import styles from "../Footer/Footer.module.css";
import { MdCall, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerbg}>
        <Image
          src={footerBg.footerBg[0].footerImgUrl}
          layout="fill"
          objectFit="cover"
          alt="cateimage"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.newsletter}>
              <div className={styles.newscontent}>
                <h2>Get the latest deals</h2>
                <span>Receive $20 coupon for first shopping</span>
              </div>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email Address"
                />
                <a href="#" className="btn btn-style1">
                  <i className="ion-paper-airplane"></i>
                </a>
              </form>
            </div>
            <div className={styles.footerMainin}>
              <div className={styles.flogo}>
                <ul className={styles.footerul}>
                  <li className={styles.footerlogo}>
                    <a href="#">freshbox</a>
                  </li>
                  <li className={styles.footercontact}>
                    <ul className={styles.fulliul}>
                      <li className="footer-icon">
                        <MdCall />
                      </li>
                      <li className={styles.footerinfo}>
                        <a href="tel:1-800-222-000">Phone: 1-800-222-000</a>
                        <a href="mailto:demo@demo.com">Email: demo@demo.com</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.footermap}>
                    <ul className={styles.fulliul}>
                      <li className="footer-icon">
                        <div>
                          <MdLocationOn />
                        </div>
                      </li>
                      <li className={styles.footerinfo}>
                        <span>401 Broadway 24th floor</span>
                        <span>Near ant mall cross road</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.footerbottom}>
                <div className={styles.footerlink} id="footer-accordian">
                  <div className={styles.flink}>
                    <h2 className="h-footer">Top categories</h2>
                    <a
                      href="#t-cate"
                      data-bs-toggle="collapse"
                      className={styles.hfooter}
                    >
                      <span>Top categories</span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className="f-link-ul collapse"
                      id="t-cate"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <a href="product-style-5.html">Fruits</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="product-style-5.html">Fast foods</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="product-style-5.html">Vegetable</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="product-style-5.html">Salads</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="product-style-5.html">Bestseller</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.flink}>
                    <h2 className="hfooter">Services</h2>
                    <a
                      href="#services"
                      data-bs-toggle="collapse"
                      className={styles.hfooter}
                    >
                      <span>Services</span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className="f-link-ul collapse"
                      id="services"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <a href="about-us.html">About vegist</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="faq's.html">Faqs</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="contact.html">Contact us</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="blog-style-5-3-grid.html">News</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="sitemap.html">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.flink}>
                    <h2 className="h-footer">Privacy &amp; terms</h2>
                    <a
                      href="#privacy"
                      data-bs-toggle="collapse"
                      className={styles.hfooter}
                    >
                      <span>Privacy &amp; terms</span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className="f-link-ul collapse"
                      id="privacy"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <a href="payment-policy.html">Payment policy</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="privacy-policy.html">Privacy policy</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="return-policy.html">Return policy</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="shipping-policy.html">Shipping policy</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="terms-conditions.html">
                          Terms &amp; conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.flink}>
                    <h2 className="h-footer">My account</h2>
                    <a
                      href="#services1"
                      data-bs-toggle="collapse"
                      className={styles.hfooter}
                    >
                      <span>My account</span>
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul
                      className="f-link-ul collapse"
                      id="services1"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <a href="account.html">My account</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="cart-2.html">My cart</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="tracking.html">Order history</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="wishlist.html">My wishlist</a>
                      </li>
                      <li className="f-link-ul-li">
                        <a href="addresses.html">My address</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

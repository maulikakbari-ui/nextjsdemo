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
                <Link href="#">
                  <a className="btn btn-style1">
                    <i className="ion-paper-airplane"></i>
                  </a>
                </Link>
              </form>
            </div>
            <div className={styles.footerMainin}>
              <div className={styles.flogo}>
                <ul className={styles.footerul}>
                  <li className={styles.footerlogo}>
                    <Link href="/">
                      <a>freshbox</a>
                    </Link>
                  </li>
                  <li className={styles.footercontact}>
                    <ul className={styles.fulliul}>
                      <li className="footer-icon">
                        <MdCall />
                      </li>
                      <li className={styles.footerinfo}>
                        <Link href="tel:1-800-222-000">
                          <a>Phone: 1-800-222-000</a>
                        </Link>
                        <Link href="mailto:demo@demo.com">
                          <a>Email: demo@demo.com</a>
                        </Link>
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
                    <Link href="#t-cate">
                      <a data-bs-toggle="collapse" className={styles.hfooter}>
                        <span>Top categories</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </Link>
                    <ul
                      className="f-link-ul collapse"
                      id="t-cate"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Fruits</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Fast foods</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Vegetable</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Salads</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Bestseller</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.flink}>
                    <h2 className="hfooter">Services</h2>
                    <Link href="#services">
                      <a data-bs-toggle="collapse" className={styles.hfooter}>
                        <span>Services</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </Link>
                    <ul
                      className="f-link-ul collapse"
                      id="services"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>About vegist</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Faqs</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Contact us</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>News</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Sitemap</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.flink}>
                    <h2 className="h-footer">Privacy &amp; terms</h2>
                    <Link href="#privacy">
                      <a data-bs-toggle="collapse" className={styles.hfooter}>
                        <span>Privacy &amp; terms</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </Link>
                    <ul
                      className="f-link-ul collapse"
                      id="privacy"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Payment policy</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Privacy policy</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Return policy</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Shipping policy</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Terms &amp; conditions</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.flink}>
                    <h2 className="h-footer">My account</h2>
                    <Link href="#services1">
                      <a data-bs-toggle="collapse" className={styles.hfooter}>
                        <span>My account</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </Link>
                    <ul
                      className="f-link-ul collapse"
                      id="services1"
                      data-bs-parent="#footer-accordian"
                    >
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>My account</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>My cart</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>Order history</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>My wishlist</a>
                        </Link>
                      </li>
                      <li className="f-link-ul-li">
                        <Link href="/">
                          <a>My address</a>
                        </Link>
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

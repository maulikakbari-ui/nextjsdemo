import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import styles from "../contact/Contactus.module.css";
import { FaStreetView, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb title="Home" type="Contact Us" />
      <section className={styles.contact_padding}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="map_area">
                <div className={styles.map_title}>
                  <h1>Contact us</h1>
                </div>
                <div className="map"></div>
                <div className={styles.map_details}>
                  <div className={styles.contact_info}>
                    <div className={styles.contact_details}>
                      <h4>Drop us message</h4>
                      <form>
                        <label>Your name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                        <label>Email</label>
                        <input
                          type="text"
                          name="Email"
                          placeholder="Enter your email address"
                        />
                        <label>Message</label>
                        <textarea
                          rows="5"
                          placeholder="Your message hare..."
                        ></textarea>
                      </form>
                      <a href="" className="btn-style1">
                        Submit <i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.contact_info}>
                    <div className={styles.information}>
                      <h4>Get in touch</h4>
                      <p className="info_description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum earum eveniet dolorum suscipit nesciunt
                        incidunt animi repudiandae ab at, tenetur distinctio
                        voluptate vel illo similique.
                      </p>
                      <div className={styles.contact_in}>
                        <ul className="info_details">
                          <li>
                            <FaStreetView />
                          </li>
                          <li>
                            <h4>Address</h4>
                            <p>255 Parker St. Englishtown, NJ 07726</p>
                          </li>
                        </ul>
                        <ul className="info_details">
                          <li>
                            <FaPhoneAlt />
                          </li>
                          <li>
                            <h4>Phone</h4>
                            <p>+12345678999</p>
                          </li>
                        </ul>
                        <ul className="info_details">
                          <li>
                            <FaEnvelope />
                          </li>
                          <li>
                            <h4>Email</h4>
                            <p>yoursite@demo.com</p>
                          </li>
                        </ul>
                      </div>
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
};

export default ContactUs;

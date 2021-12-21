/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import styles from "../aboutus/Aboutus.module.css";

const aboutUs = () => {
  return (
    <>
      <Breadcrumb title="Home" type="About Us" />
      <section className={styles.about_content}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.about_title}>
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sed libero vel ex maximus vulputate nec eu ligula.
                  Vestibulum elementum nisi ut fermentum lobortis. Sed quis
                  iaculis felis.
                </p>
              </div>
              <div className={styles.about_details}>
                <p>
                  There is something about the saree that makes a woman look
                  dignified, glorifying and every bit stylish. Mikshaa was set
                  up in the year 2017 with a motive to offer its designer
                  collection at competitive price and merchantable quality to
                  its whole seller and worldwide online customer.
                </p>
                <p>
                  No matter what your individual style may be, you are sure to
                  find a beautiful saree that will match your taste, given the
                  large collection of stunning Indian sarees that can be worn
                  almost on all the occasions be it wedding, formal parties,
                  Bridal, family get togethers and more!
                </p>
                <p>
                  Mikshaa is the trusted online ethnic wears store and feels
                  proud in Indian heritage and cultural diversity in women
                  wears. With so many different styles of drape, so many
                  different patterns and fabric choices, sarees can fill every
                  wardrobe with much needed variety. When in doubt, it’s your
                  best bet at looking elegant and put-together. Every state in
                  India and worldwide are put together to cater best in terms of
                  Indian fashion trends and women clothing range.
                </p>
                <p>
                  Mikshaa goals is the all worldwide delivered to ethnic wears
                  for women. Celebrate big fat Indian occasions such as Diwali,
                  Navratri, Durga Puja, Holi and marriage celebration with our
                  evergreen collection of online Indian ethnic wears for women.
                  A wide Variety of option are available at the click of mouse.
                </p>
                <p>
                  Mikshaa is a great online destination to explore its
                  extraordinary collection for sarees and other ehnic wears the
                  best part is the site has the most competitive price and a
                  wide eclectic range of products guaranteed to satisfy every
                  customer. Mikshaa ensures excellent delivery services to its
                  buyer in a good condition and in a prompt manner.
                </p>
                <p>
                  Mikshaa collection is also available in the overseas market
                  (USA, UK, Europe, Australia, Southeast Asia, Dubai, Srilanka
                  and other countries) under the brand name of Mikshaa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutUs;

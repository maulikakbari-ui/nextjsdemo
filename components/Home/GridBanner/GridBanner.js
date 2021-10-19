/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import gridimg from "/data";

import styles from "../GridBanner/Grid.module.css";

function GridBanner() {
  //console.log(gridimg[0], "gridimg");
  return (
    <>
      <section className={styles.homegridbanner}>
        <div className="container">
          <div className="row">
            {gridimg?.gridBanner ? (
              <div className={styles.organicfoodfreshbanner}>
                {gridimg?.gridBanner.map((item, i) => {
                  return (
                    <div className={styles.offerbanner} key={i}>
                      {item?.gridBannerImgUrl && (
                        <Link href="#">
                          <a className={styles.bannerhover}>
                            <Image
                              src={item.gridBannerImgUrl}
                              layout="fill"
                              alt=""
                            />
                          </a>
                        </Link>
                      )}
                      <div className={styles.bannercontent}>
                        <span>{item.gridText}</span>
                        <h2>{item.title}</h2>
                        <a>
                          {item.link} <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1> No data</h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default GridBanner;

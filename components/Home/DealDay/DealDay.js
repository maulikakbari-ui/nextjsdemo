import Link from "next/link";
import Image from "next/image";
import dealdaybg from "/data";
import styles from "../Dealday/DealDay.module.css";

function DealDay() {
  return (
    <>
      <section className={styles.dealdaymain}>
        <div className="dealdaybg">
          <Image
            src={dealdaybg.DealDayBg[0].dealDayImgUrl}
            layout="fill"
            objectFit="cover"
            alt="cateimage"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.dealarea}>
                <div className={styles.dealcontent}>
                  <h2>
                    Deal of the day! <span>Sale</span>
                  </h2>
                  <span>We offer a hot deal offer every festival</span>
                </div>
                <ul className={styles.contdown_row}>
                  <li className="countdown_section">
                    <span>200</span>
                    <span className={styles.countdown_title}>Day</span>
                  </li>
                  <li className="countdown_section">
                    <span>0</span>
                    <span className={styles.countdown_title}>Hours</span>
                  </li>
                  <li className="countdown_section">
                    <span>58</span>
                    <span className={styles.countdown_title}>Minutes</span>
                  </li>
                  <li className="countdown_section">
                    <span>5</span>
                    <span className={styles.countdown_title}>Seconds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default DealDay;

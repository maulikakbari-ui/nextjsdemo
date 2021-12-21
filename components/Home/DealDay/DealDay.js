//import Link from "next/link";
import Image from "next/image";
import dealdaybg from "/data";
import { useEffect, useState } from "react";
import styles from "../DealDay/DealDay.module.css";

function DealDay() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2021 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {partyTime ? (
        <>
          <h1>Happy new year!</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </>
      ) : (
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
                        <span>{days}</span>
                        <span className={styles.countdown_title}>Day</span>
                      </li>
                      <li className="countdown_section">
                        <span>{hours}</span>
                        <span className={styles.countdown_title}>Hours</span>
                      </li>
                      <li className="countdown_section">
                        <span>{minutes}</span>
                        <span className={styles.countdown_title}>Minutes</span>
                      </li>
                      <li className="countdown_section">
                        <span>{seconds}</span>
                        <span className={styles.countdown_title}>Seconds</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
export default DealDay;

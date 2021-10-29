import React from "react";
import styles from "../common/Breadcrumb.module.css";
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <>
      <div className={styles.breadcrumb_main}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              All Product
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;

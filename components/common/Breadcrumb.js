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
            <li className="breadcrumb-item" aria-current="page">
              <Link href="/">
                <a> All Product</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;

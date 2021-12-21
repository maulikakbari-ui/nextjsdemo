import React from "react";
import styles from "../common/Breadcrumb.module.css";
import Link from "next/link";

export default function Breadcrumb(props) {
  const { title, type, subtype } = props;

  return (
    <>
      <div className={styles.breadcrumb_main}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>{title}</a>
              </Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <Link href="/products">
                <a> {type}</a>
              </Link>
            </li>
            {subtype && (
              <li className="breadcrumb-item active" aria-current="page">
                {subtype}
              </li>
            )}
          </ol>
        </nav>
      </div>
    </>
  );
}

//export default Breadcrumb;

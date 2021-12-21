import Link from "next/link";
import { HiSearch } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import styles from "../Header/Nav.module.css";
import Basket from "../../basket/Basket";

import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div>
      <header className="header-area">
        <div className="header-main-area">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className={styles.headerelement}>
                <Link href="/">
                  <a className="navbar-brand">freshbox</a>
                </Link>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className={styles.navmain}>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link href="/">
                        <a className="nav-link active" aria-current="page">
                          Home
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link href="/products">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Shop
                        </a>
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link href="/products">
                            <a className="dropdown-item">Product</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">Collection</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/aboutus">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className="nav-link">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.right_cart}>
                <div className="header-element right-block-box">
                  <ul className={styles.shopelement}>
                    <li className="side-wrap">
                      <div className="search-rap">
                        <Link href="#">
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#search-modal"
                          >
                            <HiSearch />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="side-wrap">
                      <div className="search-rap">
                        <Link href="/wishlist">
                          <a>
                            <FiHeart />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <Basket />
                    <li>
                      {session ? (
                        <button
                          onClick={() => signOut()}
                          className={styles.btn_log}
                        >
                          Log out
                        </button>
                      ) : (
                        <button
                          onClick={() => signIn()}
                          className={styles.btn_log}
                        >
                          Sign in
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
                <button
                  className={styles.navbar_toggler}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;

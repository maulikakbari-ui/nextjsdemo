import Link from "next/link";
import { HiSearch } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from "../Header/Nav.module.css";

function Header() {
  return (
    <div>
      <header className="header-area">
        <div className="header-main-area">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className={styles.headerelement}>
                <a className="navbar-brand" href="#">
                  freshbox
                </a>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
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
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link href="#">
                            <a className="dropdown-item">Fruit & nut</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a className="dropdown-item">Snack food</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a className="dropdown-item">Organics nut gifts</a>
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
                      <Link href="#">
                        <a className="nav-link">Pages</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">Blogs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-element right-block-box">
                <ul className={styles.shopelement}>
                  <li className="side-wrap">
                    <div className="search-rap">
                      <a href="#">
                        <HiSearch />
                      </a>
                    </div>
                  </li>
                  <li className="side-wrap">
                    <div className="search-rap">
                      <a href="#">
                        <FiHeart />
                      </a>
                    </div>
                  </li>
                  <li className="side-wrap">
                    <div className="search-rap">
                      <a href="#">
                        <HiOutlineShoppingBag />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;

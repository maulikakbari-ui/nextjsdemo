import React from "react";

import styles from "../common/Searchmodel.module.css";
import { HiSearch, HiX } from "react-icons/hi";

const SearchModel = () => {
  return (
    <>
      <div className="search-model">
        <div
          className="modal fade"
          id="search-modal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="search-content">
                        <div className="search-engine">
                          <input
                            type="text"
                            name="search"
                            placeholder="Search Product."
                          />
                          <button className="search-btn" type="button">
                            <HiSearch />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <HiX />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModel;

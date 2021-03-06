import React from "react";
import { Fragment } from "react";
import AllList from "../../components/common/AllList";
import Breadcrumb from "../../components/common/Breadcrumb";

function ProductList() {
  return (
    <Fragment>
      <Breadcrumb title="Home" type="All Products" />
      <AllList />
    </Fragment>
  );
}

export default ProductList;

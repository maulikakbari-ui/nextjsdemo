/* eslint-disable @next/next/no-img-element */
import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import CartList from "../../components/basket/Cart";

const Cart = () => {
  return (
    <>
      <Breadcrumb title="Home" />
      <CartList />
    </>
  );
};

export default Cart;

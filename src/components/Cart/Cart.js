import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <button className={classes.pill}>
      <p className={classes.pillItems}>Your Cart</p>
      <p className={classes.pillItems}>Shopping Cart Icon</p>
      <p className={classes.pillItems}>Count</p>
    </button>
  );
};

export default Cart;

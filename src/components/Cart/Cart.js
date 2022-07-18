import React from "react";
import classes from "./Cart.module.css";
import cartIcon from "./cartIcon.png";

const Cart = () => {
  return (
    <button className={classes.pill}>
      <img src={cartIcon} alt="shopping cart"></img>
      <p className={classes.pillItems}>Your Cart</p>
      <div className={classes.pillCountBg}>
        <p className={classes.pillCount}>0</p>
      </div>
    </button>
  );
};

export default Cart;

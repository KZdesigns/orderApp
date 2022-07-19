import React from "react";
import classes from "./Cart.module.css";
import cartIcon from "./cartIcon.png";

const Cart = (props) => {
  return (
    <button className={classes.pill}>
      <img src={cartIcon} alt="shopping cart"></img>
      <p className={classes.pillItems}>Your Cart</p>
      <div className={classes.pillCountBg}>
        <p className={classes.pillCount}>{props.cartItemCount}</p>
      </div>
    </button>
  );
};

export default Cart;

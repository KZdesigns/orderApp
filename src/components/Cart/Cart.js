import React from "react";
import classes from "./Cart.module.css";
import cartIcon from "./cartIcon.png";

const Cart = (props) => {
  let count = 0;

  props.cartItems.forEach((item) => {
    count += item.amount;
  });

  return (
    <button className={classes.pill} onClick={props.onConfirm}>
      <img src={cartIcon} alt="shopping cart"></img>
      <p className={classes.pillItems}>Your Cart</p>
      <div className={classes.pillCountBg}>
        <p className={classes.pillCount}>{count}</p>
      </div>
    </button>
  );
};

export default Cart;

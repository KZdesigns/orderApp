import React from "react";
import CartModalItem from "../CartModalItem/CartModalItem";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalCard}>
        {props.cartItems.map((cartItem) => (
          <CartModalItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default CartModal;

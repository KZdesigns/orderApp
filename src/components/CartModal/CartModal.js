import React from "react";
import CartModalItem from "../CartModalItem/CartModalItem";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalCard}>
        <div className={classes.header}>
          <p>Order Item</p>
          <p className={classes.middleItem}>Amount</p>
          <p>Total</p>
        </div>
        {props.cartItems.map((cartItem) => (
          <CartModalItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
          />
        ))}
        <div className={classes.finalRow}>
          <button className={classes.btn} onClick={props.closeModal}>
            Cancel
          </button>
          <div className={classes.order}>
            <p>Total: ${props.total.toFixed(2)}</p>
            <button className={classes.btn} onClick={props.order}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

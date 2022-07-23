import React from "react";
import classes from "./CartModalItem.module.css";

const CartModalItem = (props) => {
  return (
    <div className={classes.modalItem}>
      <p>
        {props.name}
        {` x ${props.amount}`}
      </p>
      <p></p>
      <p>{`$${(props.price * props.amount).toFixed(2)}`}</p>
    </div>
  );
};

export default CartModalItem;

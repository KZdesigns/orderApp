import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.leftSide}>
        <h3 className={classes.itemHeader}>{props.name}</h3>
        <p className={classes.itemText}>{props.description}</p>
        <h3 className={classes.itemCost}>${props.cost.toFixed(2)}</h3>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.amountBox}>
          <h3 className={classes.itemHeader}>Amount</h3>
          <input
            className={classes.addInput}
            type="number"
            defaultValue={props.amount}
          ></input>
        </div>
        <button className={classes.addBtn}>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;

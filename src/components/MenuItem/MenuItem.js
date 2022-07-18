import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.leftSide}>
        <h3 className={classes.itemHeader}>Sushi</h3>
        <p className={classes.itemText}>Finest fish and veggies</p>
        <h3 className={classes.itemCost}>$22.99</h3>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.amountBox}>
          <h3 className={classes.itemHeader}>Amount</h3>
          <input className={classes.addInput}></input>
        </div>
        <button className={classes.addBtn}>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;

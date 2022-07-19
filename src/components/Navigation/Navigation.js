import React from "react";
import Cart from "../Cart/Cart";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.header}>ReactMeals</h1>
      <Cart cartItemCount={props.cartItemCount} />
    </nav>
  );
};

export default Navigation;

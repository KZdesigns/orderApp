import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.container}>
      <MenuItem></MenuItem>
    </div>
  );
};

export default Menu;

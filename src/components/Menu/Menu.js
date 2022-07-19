import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.container}>
      {props.menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          name={menuItem.name}
          description={menuItem.description}
          cost={menuItem.cost}
          amount={menuItem.amount}
          onAddItem={props.onAddItem}
        />
      ))}
    </div>
  );
};

export default Menu;

import React from "react";
import classes from "./HeaderCard.module.css";

const HeaderCard = () => {
  return (
    <div className={classes.container}>
      <h1 style={{ margin: 0 }}>Delicious Food, Delivered To You</h1>
      <p style={{ margin: 0 }}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p style={{ margin: 0 }}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default HeaderCard;

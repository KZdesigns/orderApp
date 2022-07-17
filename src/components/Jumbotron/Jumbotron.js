import React from "react";
import classes from "./Jumbotron.module.css";
import mealsjpeg from "./meals.jpeg";

const Jumbotron = () => {
  return (
    <div className={classes.container}>
      <img src={mealsjpeg} alt="meals" className={classes.image}></img>
    </div>
  );
};

export default Jumbotron;

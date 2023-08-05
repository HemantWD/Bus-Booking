import React from "react";
import classes from "../css/SeatPrice.module.css";

export const SeatPrice = () => {
  return (
    <div>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">All</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">$699</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">899</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">999</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">1100</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">1450</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">1650</label>
      </span>
      <span className={classes.filter}>
        <input type="radio" />
        <label htmlFor="">1850</label>
      </span>
    </div>
  );
};

import React from "react";
import classes from "../css/SeatLayout.module.css";

export const SeatLayout = () => {
  return (
    <div>
      <div className={classes.section}>
        <h2>Upper Seat</h2>
        <div className={classes.seat}>
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
        </div>
      </div>
    </div>
  );
};

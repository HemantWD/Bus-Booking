import React from "react";
import classes from "../css/SeatLayout.module.css";

export const SeatLayout = ({ seats }) => {
  return (
    <>
      <div className={classes["seat-section"]}>
        <h2>Upper Seat</h2>
        <div className={classes.seats}>
          {seats.upper.map((seat, index) => (
            <div key={index} className={classes.seat}>
              <input type="button" />
            </div>
          ))}
        </div>
        <h2 className={classes["seat-position"]}>Lower Seat</h2>
        <div className={classes.seats}>
          {seats.lower.map((seat, index) => (
            <div key={index} className={classes.seat}>
              <input type="button" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

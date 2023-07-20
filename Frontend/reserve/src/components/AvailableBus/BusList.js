import React from "react";
import { Date } from "./Date";
import classes from "../css/BusList.module.css";
import { BookSeat } from "./BookSeat";

export const BusList = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <div>
        <Date />
      </div>
      <div className={classes.card}>
        <div className={classes.bus}>
          <div>
            <div>
              <h2 className={classes.name}>Volvo Buses</h2>
              <p>A/C Sleeper</p>
              <p>17:45 PM --- 12hrs --- 8:00 AM </p>
            </div>
          </div>
          <div className={classes.booking}>
            <div className={classes.price}>
              <h2>Trip Cost</h2>
              <h3>Rs. 899/-</h3>
            </div>
            <button onClick={handleClick}>View Seats</button>
          </div>
        </div>
        <BookSeat />
      </div>
    </>
  );
};

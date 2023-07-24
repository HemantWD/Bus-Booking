import React from "react";
import classes from "../css/SeatLayout.module.css";

export const SeatLayout = () => {
  return (
    <>
      <div className={classes["seat-section"]}>
        <h2>Upper Seat</h2>
        <div className={classes.seats}>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button" className={classes["down-seat"]}></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
        </div>
        <h2 className={classes["seat-position"]}>Lower Seat</h2>
        <div className={classes.seats}>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button" className={classes["down-seat"]}></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
        </div>
      </div>
    </>
  );
};

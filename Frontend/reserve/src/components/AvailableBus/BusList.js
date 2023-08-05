import React, { useState } from "react";
import classes from "../css/BusList.module.css";
import BookSeat from "./BookSeat";
import { BusCardLeft } from "./BusCardLeft";

export const BusList = () => {
  return (
    <>
      <div className={classes.busCard}>
        <div className={classes["bus-card-content"]}>
          <BusCardLeft />
          <div className={classes["bus-card-right"]}>
            <div className={classes["bus-right-text"]}>
              <p className={classes["bus-cost"]}>Trip Cost</p>
              <h3>Starts From</h3>
              <p className={classes.fare}>$800</p>
            </div>
            <div>
              <button className={classes.btn}>View Seats</button>
            </div>
          </div>
        </div>
        <BookSeat />
      </div>
    </>
  );
};

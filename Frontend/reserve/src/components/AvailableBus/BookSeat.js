import React, { useState } from "react";
import classes from "../css/BookSeat.module.css";
import { SeatPrice } from "./SeatPrice";
import { SeatLayout } from "./SeatLayout";
import data from "../../redux/sample";
import BusTicket from "./BusTicket";

const BookSeat = () => {
  const { seats } = data[0];
  return (
    <>
      <div className={classes["bus-seats"]}>
        <div className={classes.heading}>
          <h3>Select Seats</h3>
        </div>
        <div className={classes["select-price"]}>
          <div className={classes.price}>
            <SeatPrice />
          </div>
        </div>
        <div className={classes["main-container"]}>
          <div className={classes["bus-seat-flex"]}>
            <SeatLayout seats={seats} />
          </div>
        </div>
        <BusTicket />
      </div>
    </>
  );
};

export default BookSeat;

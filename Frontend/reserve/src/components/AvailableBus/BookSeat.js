import React from "react";
import classes from "../css/BookSeat.module.css";
import { SeatPrice } from "./SeatPrice";
import { SeatLayout } from "./SeatLayout";
import BusTicket from "./BusTicket";

const BookSeat = () => {
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
            <SeatLayout />
          </div>
          <div className={classes["bus-ticket-container"]}>
            <BusTicket />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSeat;

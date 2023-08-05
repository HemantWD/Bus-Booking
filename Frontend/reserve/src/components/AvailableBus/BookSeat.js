import React, { useState } from "react";
import classes from "../css/BookSeat.module.css";
import { SeatPrice } from "./SeatPrice";
import { SeatLayout } from "./SeatLayout";

const BookSeat = () => {
  return (
    <>
      <div className="bus-seats">
        <div className="heading">
          <h3>Select Seats</h3>
        </div>
        <div className="selcet-price">
          <div className="price">
            <span>
              <p>Seat Price</p>
            </span>
            <SeatPrice />
          </div>
        </div>
        <div className="container">
          <div className="bus-seat-flex">
            <SeatLayout />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSeat;

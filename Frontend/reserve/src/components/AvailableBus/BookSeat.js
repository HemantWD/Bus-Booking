import React from "react";
import classes from "../css/BookSeat.module.css";
import { SeatLayout } from "./SeatLayout";

export const BookSeat = () => {
  return (
    <>
      <div className={classes.select}>
        <h3 className={classes.heading}>Select Seats</h3>
        <div className={classes.seat}>
          <div className={classes.row}>
            <h3>Seat Price</h3>
            <div className={classes.box}>
              <input type="radio" />
              <p>All</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$699</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$899</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$1199</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$1599</p>
            </div>
          </div>

          <div className={classes.selected}>
            <div className={classes.fill}>
              <input type="radio" />
              <p>Vacant Seats</p>
            </div>
            <div className={classes.fill}>
              <input type="radio" />
              <p>Reserved Seats</p>
            </div>
            <div className={classes.fill}>
              <input type="radio" />
              <p>Your Seats</p>
            </div>
          </div>
        </div>

        <div className={classes.selectSeats}>
          <SeatLayout />
          <div className={classes.right}>
            <h3>Boarding & Droping</h3>
            <h4>Jaipur</h4>
            <p>
              Sindhi Camp | Jaipur
              <span className={classes.bTime}>17:45 PM</span>
            </p>
            <h4>Ahmedabad</h4>
            <p>
              Namaste Circle
              <span className={classes.dTime}>08:00 AM</span>
            </p>
            <hr />
            <p>
              Serial No : <span>7</span>
            </p>
            <hr />
            <h4>Fair Details</h4>
            <p>
              Amount : <span>INR 750.00</span>
            </p>
            <p>Includes all fair charges</p>
            <button className={classes.btn}>Proceed To Book</button>
          </div>
        </div>
      </div>
    </>
  );
};

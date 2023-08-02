import React from "react";
import classes from "../css/BusBooking.module.css";

export const BusBooking = () => {
  return (
    <div className={classes.container}>
      <div className={classes["payment-booking"]}>
        <div className={classes.upper}>
          <div className={classes.icon}>Icon</div>
          <div className={classes["book-confimed"]}>
            Booking Confirmed
            <br />
            <h4>Happy Journey</h4>
          </div>
          <div className={classes.booking}>
            <div className={classes["booking-details"]}>
              <div className={classes["left-side-detail"]}>Ticket Id:</div>
              <div className={classes["right-side-detail"]}>id</div>
            </div>
            <div className={classes["booking-details"]}>
              <div className={classes["left-side-detail"]}>Payment Id:</div>
              <div className={classes["right-side-detail"]}>200</div>
            </div>
            <div className={classes["booking-details"]}>
              <div className={classes["left-side-detail"]}>
                Passenger Details
              </div>
              <div className={classes["right-side-detail"]}>
                Hemant Ajay Sharma
              </div>
            </div>
            <div className={classes["booking-details"]}>
              <div className={classes["left-side-detail"]}>Contact Details</div>
              <div className={classes["right-side-detail"]}>0141-2722309</div>
            </div>
          </div>
        </div>
        <div className={classes.lower}>BusCard Left</div>
      </div>
    </div>
  );
};

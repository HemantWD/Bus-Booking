import React from "react";
import classes from "../css/BusBooking.module.css";
import { TiTickOutline } from "react-icons/ti";
import { BusCardInfo } from "../InfoPage/BusCardInfo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const BusBooking = () => {
  const formData = useSelector((state) => state.passenger);

  const bookingTitles = [
    "Ticket ID:",
    "Payment ID:",
    "Passenger Details:",
    "Contact Details:",
  ];
  const bookingValues = [
    "H3M175",
    "2545-326E3-7HHH",
    `Hemant Ajay Sharma, Male , 26 yrs`,
    `9024082738`,
  ];
  return (
    <div className={classes["booking-container"]}>
      <div className={classes["icon-Container"]}>
        <TiTickOutline className={classes.icon} />
      </div>
      <div className={classes["confirmation-text"]}>
        Booking has been confirmed
      </div>
      <div className={classes["details-container"]}>
        <div className={classes["title-container"]}>
          {bookingTitles.map((bookingTitle, id) => (
            <div key={id} className={classes.title}>
              {bookingTitle}
            </div>
          ))}
        </div>
        <div className={classes["value-container"]}>
          {bookingValues.map((bookingValue, id) => (
            <div key={id} className={classes.title}>
              {bookingValue}
            </div>
          ))}
        </div>
      </div>
      <div className={classes["busCardInfo-container"]}>
        <BusCardInfo />
      </div>
      <button className={classes.btn}>
        <Link to="/" className={classes.link}>
          Go Back Home
        </Link>
      </button>
    </div>
  );
};

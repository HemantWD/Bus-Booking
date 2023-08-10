import React from "react";
import classes from "../css/BusTicket.module.css";

const BusTicket = ({ selectedBus }) => {
  return (
    <div className={classes["bus-ticket-container"]}>
      <div className={classes["bus-ticket-heading"]}>
        <h3 className={classes.heading}>Boarding and Dropping</h3>
      </div>
      <br />
      <div
        className={`${classes["bus-ticket-destination"]} ${classes["d-flex"]}`}
      >
        <div className={classes["left-part"]}>
          <p className={classes.destination}>Ahmedabad</p>
          <p className={classes["destination-sub-heading"]}>
            Taxi Stand, Mughal Road
          </p>
        </div>
        <div className={classes["right-part"]}>
          <p></p>
        </div>
      </div>
      <div
        className={`${classes["bus-ticket-destination"]} ${classes["d-flex"]}`}
      >
        <div className={classes["left-part"]}>
          <p className={classes.destination}>Jaipur </p>
          <p className={classes["destination-sub-heading"]}>
            Taxi Stand, Mughal Road
          </p>
        </div>
        <div className={classes["right-part"]}>
          <p>08:00 AM</p>
        </div>
      </div>
      <div className={`${classes["seat-number"]} ${classes["d-flex"]}`}>
        <p>Seat No.</p>
        <p>mappedSeats</p>
      </div>
      <div className={classes["fare-details"]}>
        <div className={classes["bus-ticket-heading"]}>
          <p>Fare Details</p>
        </div>
        <div className={`${classes["fare"]} ${classes["d-flex"]}`}>
          <div className={classes["fare-amount"]}>
            <p className={classes.destination}>Amount</p>
            <p className={classes["destination-sub-heading"]}>
              Taxi Stand, Mughal Road
            </p>
          </div>
          <div className={classes["fare-price"]}>
            <p>INR price</p>
          </div>
        </div>
      </div>
      <br />
      <div className={classes["proceed-btn"]}>
        <button className={classes.btn}>Proceed To Book</button>
      </div>
    </div>
  );
};

export default BusTicket;

import React from "react";
import classes from "../css/BusCardLeft.module.css";

export const BusCardLeft = () => {
  return (
    <div className={classes["bus-card-left"]}>
      <div className={classes["bus-card-heading"]}>
        <div className={classes["bus-heading"]}>
          <h2>InterCity Smart Bus </h2>
          <div className={classes["bus-rating"]}>4.2</div>
        </div>
        <div className={classes["bus-details"]}>
          <h3>AC Seater / Sleeper</h3>
        </div>
      </div>
      <div className={classes.itenary}>
        <h3>
          <span className={classes.point}>15:40 PM</span>
          <span>
            ---- {""} Hrs {} Min's ----{" "}
          </span>
          <span className={classes.point}>08:00 AM</span>
        </h3>
      </div>
      <div className={classes["bus-actions"]}>
        <div className="bus-facility">
          <span>Live Tracking</span>
          <span>Policies</span>
          <span>Amenities</span>
          <span>Bus Photos</span>
          <span>Booking Polcies</span>
          <span>Reviews</span>
          <span>Rest Stop</span>
        </div>
      </div>
    </div>
  );
};

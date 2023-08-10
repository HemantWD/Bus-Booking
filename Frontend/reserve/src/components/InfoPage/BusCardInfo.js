import React from "react";
import classes from "../css/BusCardInfo.module.css";

export const BusCardInfo = () => {
  return (
    <div>
      <div className={classes["bus-information"]}>
        <div className={classes["bus-header"]}>
          <div className={classes["bus-name"]}>
            <div className={classes["bus-title"]}>
              <span className={classes["bus-name-text"]} id="busName">
                Mumbai
              </span>
              <span className={classes["bus-rating"]}>
                <ion-icon name="star-outline"></ion-icon>5 star
              </span>
              <span className={classes["bus-rating-text"]}>Ratings</span>
            </div>
            <div className={classes["bus-type"]}>
              <div>
                <span className={classes["bus-type-text"]}>
                  AC Sleeper (2-1)
                </span>
              </div>
            </div>
            <div className={classes["bus-timing"]}>
              <div>
                <span className={classes["from-time"]} id="fromTime">
                  18:30 PM <br />
                  <span style={{ fontSize: "15px", fontWeight: "400" }}>
                    09Aug2023
                  </span>
                </span>
              </div>
            </div>
            <div>
              <span className={classes["bus-time-interval"]}>
                ---------- 12:30 hr ---------
              </span>
            </div>
            <div>
              <span className={classes["to-time"]} id="toTime">
                06:30 AM <br />
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  09Aug2023
                </span>
              </span>
            </div>
          </div>
          <div className={classes["bus-locations"]}>
            <div className={classes["from-location"]}>
              <div className={classes.state} id="fromLocation">
                Maharashtra
              </div>
              <div className={classes.address}>
                Taxi Stand, Chhatrapati road
              </div>
            </div>
            <div className={classes["from-location"]}>
              <div className={classes.state} id="toLocation">
                Rajasthan
              </div>
              <div className={classes.address}>
                Taxi Stand, Chhatrapati road
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

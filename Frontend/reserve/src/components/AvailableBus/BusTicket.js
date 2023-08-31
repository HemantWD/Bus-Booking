import React from "react";
import classes from "../css/BusTicket.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../../redux/sample";

const BusTicket = () => {
  const selectedSeats = useSelector((state) => state.seat);
  const totalAmount = selectedSeats.reduce((total, seat) => {
    const seatInfo = data[0].seats.upper.find(
      (s) => s.seatNumber === seat.seatNumber
    );
    return total + seatInfo.price;
  }, 0);

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
            Taxi Stand, Mughal Roaddd
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
        {selectedSeats.map((seat) => (
          <p key={seat.seatNumber}>{seat.seatNumber}</p>
        ))}
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
            <p>INR {totalAmount} </p>
          </div>
        </div>
      </div>
      <br />
      <div className={classes["proceed-btn"]}>
        <button className={classes.btn}>
          <Link to="/info-page" className={classes.link}>
            Proceed To Book
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BusTicket;

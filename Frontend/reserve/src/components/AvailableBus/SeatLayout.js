import React from "react";
import classes from "../css/SeatLayout.module.css";
import { selectedSeat, deselectSeat } from "../../redux/seatSlice";
import { useDispatch, useSelector } from "react-redux";
import data from "../../redux/sample";

export const SeatLayout = () => {
  const selectedSeats = useSelector((state) => state.seat);
  const dispatch = useDispatch();

  const handleClick = (seatNumber, id) => {
    const isSelected = selectedSeats.some(
      (seat) => seat.seatNumber === seatNumber
    );
    if (isSelected) {
      dispatch(deselectSeat({ seatNumber }));
    } else {
      dispatch(selectedSeat({ seatNumber, id }));
    }
    console.log(isSelected);
  };

  return (
    <div className={classes["seat-section"]}>
      <h2>Upper Seat</h2>
      <div className={classes.seats}>
        {data[0].seats.upper.map((seat) => (
          <div
            key={seat.seatNumber}
            onClick={() => handleClick(seat.seatNumber, data[0]._id)}
            className={classes.seating}
            style={{
              backgroundColor: selectedSeats.some(
                (selectedSeat) => selectedSeat.seatNumber === seat.seatNumber
              )
                ? "green"
                : "",
            }}
          >{`${seat.seatNumber}`}</div>
        ))}
      </div>
      <h2 className={classes["seat-position"]}>Lower Seat</h2>
      <div className={classes.seats}>
        {data[0].seats.lower.map((seat) => (
          <div
            key={seat.seatNumber}
            onClick={() => handleClick(seat.seatNumber, data[0]._id)}
            className={classes.seating}
            style={{
              backgroundColor: selectedSeats.some(
                (selectedSeat) => selectedSeat.seatNumber === seat.seatNumber
              )
                ? "green"
                : "",
            }}
          >
            {`${seat.seatNumber}`}
          </div>
        ))}
      </div>
    </div>
  );
};
